#!/bin/bash

BACKEND_PORT=8000
# move to the backend directory
cd ../smart_chat_backend

# install requirements
pipenv install

# migrate DB
pipenv run python manage.py migrate

kill $(lsof -t -i :$BACKEND_PORT)

# start Daphne server
nohup pipenv run daphne -b 0.0.0.0 -p $BACKEND_PORT smart_chat_backend.asgi:application & disown

echo "Deployment Completed"