#!/bin/bash

# move to the backend directory
cd ../smart_chat_backend

# install requirements
pipenv install

# migrate DB
pipenv run python manage.py migrate

sudo kill $(lsof -t -i :8000)

# start Daphne server
sudo systemctl restart smart_chat_backend.service

echo "Deployment Completed"