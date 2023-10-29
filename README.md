# Smart Chat
CD setup to deploy on Google App Engine

## Frontend
https://smart-chat-394120.wl.r.appspot.com/

## Backend
https://backend-dot-smart-chat-394120.wl.r.appspot.com/


# Setup

## Requirements
1. Pipenv
2. Python >= 3.7

## Steps Backend
```
# install requirements
pipenv install

# migrate DB
cd smart_chat_backend
python manage.py migrate

# start Daphne server
daphne -b 0.0.0.0 -p 8000 smart_chat_backend.asgi:application
```