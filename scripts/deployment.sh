# move to the backend directory
cd ../smart_chat_backend

# install requirements
pipenv install

# migrate DB
python manage.py migrate

# start Daphne server
daphne -b 0.0.0.0 -p 8000 smart_chat_backend.asgi:application