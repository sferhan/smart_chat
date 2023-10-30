#!/bin/bash

# move to the backend directory
cd ../smart_chat_backend

# install requirements
pipenv install

# migrate DB
pipenv run python manage.py migrate

# start Daphne server
pipenv run daphne -b 0.0.0.0 -p 8000 smart_chat_backend.asgi:application