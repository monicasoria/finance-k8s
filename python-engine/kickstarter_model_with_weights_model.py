import numpy
import tensorflow
from google.cloud import storage
from tensorflow.keras.layers import Dense
from tensorflow.keras import Model
from pickle import load
import os

# We keep model as global variable so we don't have to reload it in case of warm invocations
kickstarter_model = None


class CustomModel(Model):
    def __init__(self):
        super(CustomModel, self).__init__()
        self.relu1 = Dense(50, activation='relu')
        self.relu2 = Dense(50, activation='relu')
        self.d2 = Dense(2, activation='softmax')

    def call(self, x):
        x = self.relu1(x)
        x = self.relu2(x)
        return self.d2(x)


def download_blob(bucket_name, source_blob_name, destination_file_name):
    """Downloads a blob from the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(source_blob_name)

    blob.download_to_filename(destination_file_name)

    print('Blob {} downloaded to {}.'.format(
        source_blob_name,
        destination_file_name))


def one_hot_encoding(raw_prediction_input, categorical_list, category_key):
    res = [i for i in categorical_list if raw_prediction_input[category_key] in i]
    print(res)
    for i in categorical_list:
        raw_prediction_input[i] = 0
    raw_prediction_input[res[0]] = 1
    del raw_prediction_input[category_key]
    return raw_prediction_input


def handler(request):
    global kickstarter_model
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
    # Scaler load
    download_blob('finance-model-bucket', 'sklearn/scaler_kickstarter_v1.pkl',
                  '/tmp/scaler_kickstarter_v1.pkl')
    # Model load which only happens during cold starts
    if kickstarter_model is None:
        download_blob('finance-model-bucket', 'tensorflow/kickstarter_v1_weights.index.index',
                      '/tmp/kickstarter_v1_weights.index.index')
        download_blob('finance-model-bucket', 'tensorflow/kickstarter_v1_weights.data-00000-of-00001',
                      '/tmp/kickstarter_v1_weights.data-00000-of-00001')
        kickstarter_model = CustomModel()
        kickstarter_model.load_weights('/tmp/kickstarter_v1_weights')
    # One hot encode Input
    country_one_hot_input = one_hot_encoding(
        request.json, country_categories, 'country')
    complete_one_hot_input = one_hot_encoding(
        request.json, main_categories, 'main_category')
    # Transform dictionary to list
    to_predict_input_list = []
    for key, value in complete_one_hot_input.items():
        temp = value
        to_predict_input_list.append(temp)
    # Load scaler
    scaler = load(open('/tmp/scaler_kickstarter_v1.pkl', 'rb'))
    # Convert list to Numpy Array
    to_predict_input_array = np.array([to_predict_input_list])
    # Standardize the array
    standardized_input_array = scaler.transform(to_predict_input_array)
    # Predict the input with the trained model
    prediction = kickstarter_model.predict(standardized_input_array)
    prediction_probability = round(np.float64(prediction[0, 1]), 2)*100
    return {"success_probability": prediction_probability}
