import numpy as np
import os
from tensorflow.keras.layers import Dense
from tensorflow.keras import Sequential
from pickle import load
# from flask import request
from google.cloud import storage
from flask import jsonify


def download_blob(bucket_name, source_blob_name, destination_file_name):
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(source_blob_name)
    blob.download_to_filename(destination_file_name)


def one_hot_encoding(raw_prediction_input, categorical_list, category_key):
    res = [i for i in categorical_list if raw_prediction_input[category_key] in i]
    print(res)
    for i in categorical_list:
        raw_prediction_input[i] = 0
    raw_prediction_input[res[0]] = 1
    del raw_prediction_input[category_key]
    return raw_prediction_input


def create_model():
    input_size = 10
    output_size = 2
    hidden_layer_size = 50
    model = Sequential([
        Dense(hidden_layer_size, activation='relu'),
        Dense(hidden_layer_size, activation='relu'),
        Dense(output_size, activation='softmax')
    ])
    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    return model


def kickstarter_predict(request):
        # Set CORS headers for preflight requests
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600',
        }
        return ('', 204, headers)
    # Set CORS headers for main requests
    headers = {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
    request_json = request.get_json(silent=True)
    # Define in a list the categories for prediction dictionary
    country_categories = ['country_GB', 'country_Other', 'country_US']
    main_categories = [
        'main_category_Art',
        'main_category_Comics',
        'main_category_Crafts',
        'main_category_Dance',
        'main_category_Design',
        'main_category_Fashion',
        'main_category_Film & Video',
        'main_category_Food',
        'main_category_Games',
        'main_category_Journalism',
        'main_category_Music',
        'main_category_Photography',
        'main_category_Publishing',
        'main_category_Technology',
        'main_category_Theater'
    ]
    # One hot encode Input
    country_one_hot_input = one_hot_encoding(
        request_json, country_categories, 'country')
    complete_one_hot_input = one_hot_encoding(
        request_json, main_categories, 'main_category')
    # Transform dictionary to list
    to_predict_input_list = []
    for key, value in complete_one_hot_input.items():
        temp = value
        to_predict_input_list.append(temp)
    # Load scaler
    print('Loading Scaler...')
    download_blob('finance-model-bucket', 'scaler_kickstarter_v1.pkl',
                  '/tmp/scaler_kickstarter_v1.pkl')
    scaler = load(open('/tmp/scaler_kickstarter_v1.pkl', 'rb'))
    # Convert list to Numpy Array
    to_predict_input_array = np.array([to_predict_input_list])
    # Standardize the array
    standardized_input_array = scaler.transform(to_predict_input_array)
    # Create and load weights
    print('Loading Model Weights...')
    download_blob('finance-model-bucket', 'kickstarter_v1_weights.index',
                  '/tmp/kickstarter_v1_weights.index')
    download_blob('finance-model-bucket', 'kickstarter_v1_weights.data-00000-of-00001',
                  '/tmp/kickstarter_v1_weights.data-00000-of-00001')
    kickstarter_model = create_model()
    kickstarter_model.load_weights('/tmp/kickstarter_v1_weights')
    # Predict the input with the trained model
    prediction = kickstarter_model.predict(standardized_input_array)
    prediction_probability = round(np.float64(prediction[0, 1]), 2)*100
    result = {
        "prediction_probability": prediction_probability
    }
    return (jsonify(result), 200, headers)
