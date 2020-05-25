import numpy as np
import os
from tensorflow.keras.layers import Dense
from tensorflow.keras import Sequential
from pickle import load
from flask import Flask
from flask import request
app = Flask(__name__)


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


@app.route('/predict', methods=['GET', 'POST'])
def kickstarter_predict():
    request_json = request.json
    print(request_json)
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
    scaler = load(open('scaler_kickstarter_v1.pkl', 'rb'))
    # Convert list to Numpy Array
    to_predict_input_array = np.array([to_predict_input_list])
    # Standardize the array
    standardized_input_array = scaler.transform(to_predict_input_array)
    # Create and load weights
    kickstarter_model = create_model()
    kickstarter_model.load_weights('kickstarter_v1_weights')
    # Predict the input with the trained model
    prediction = kickstarter_model.predict(standardized_input_array)
    prediction_probability = round(np.float64(prediction[0, 1]), 2)*100
    return {"success_probability": prediction_probability}
