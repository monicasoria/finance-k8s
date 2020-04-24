from flask import Flask
from flask_cors import CORS

def hello_world(request):
  return "Hello, cross-origin-world!"