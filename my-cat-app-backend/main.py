from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from pydantic import BaseModel
import uuid

# Connection database
connection = psycopg2.connect(database="my_cat_db", user="steph", password="test", host="127.0.0.1", port="5432")

app = FastAPI()

# Cors config
origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# CRUD (create, read, update, delete)
class Cat(BaseModel):
    name: str
    age: int


# Create cat
@app.post('/cats')
def create_cat(cat: Cat):
    random_id = str(uuid.uuid4())
    cur = connection.cursor()
    cur.execute('INSERT INTO cats (id, name, age) VALUES(%s, %s, %s)', (random_id, cat.name, cat.age))
    connection.commit()
    return {'id': random_id, 'name': cat.name, 'age': cat.age}


# Get all cats
@app.get('/cats')
def get_cats():
    cur = connection.cursor()
    cur.execute('SELECT id, name, age FROM cats')
    rows = cur.fetchall()
    result = map(lambda row: {'id': row[0], 'name': row[1], 'age': row[2]}, rows)
    return {'cats': list(result)}


# Get cat with id
@app.get('/cats/{id}')
def get_cat_id(id: str):
    cur = connection.cursor()
    cur.execute('SELECT id, name, age FROM cats WHERE id = %s', (id,))
    row = cur.fetchone()
    return {'id': row[0], 'name': row[1], 'age': row[2]}


# Update cat
@app.put('/cats/{id}')
def update_cat(cat: Cat, id: str):
    cur = connection.cursor()
    cur.execute('UPDATE cats SET name = %s, age = %s WHERE id = %s', (cat.name, cat.age, id))
    connection.commit()


# Delete cat
@app.delete('/cats/{id}')
def delete_cats(id: str) -> None:
    cur = connection.cursor()
    cur.execute('DELETE FROM cats WHERE id = %s', (id,))
    connection.commit()
