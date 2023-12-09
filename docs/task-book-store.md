---
id: task-book-store
slug: /task-book-store

title: Book Store
sidebar_label: Book Store
---

### Task
Implement a bookstore service to manage books and provide a RESTful API for CRUD operations.

#### Python implementation
```python title="main.py"
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# In-memory database
books_db = []
book_id_counter = 0

# Book model
class Book(BaseModel):
    id: int
    title: str
    author: str

# Get all books
@app.get("/books")
def get_all_books():
    return books_db

# Get a single book
@app.get("/books/{book_id}")
def get_book(book_id: int):
    for book in books_db:
        if book.id == book_id:
            return book
    return {"error": "Book not found"}

# Add a book
@app.post("/books")
def add_book(title: str, author: str):
    global book_id_counter
    book_id_counter += 1
    book = Book(id=book_id_counter, title=title, author=author)
    books_db.append(book)
    return {"message": "Book added successfully"}

# Update a book
@app.put("/books/{book_id}")
def update_book(book_id: int, title: str, author: str):
    for book in books_db:
        if book.id == book_id:
            book.title = title
            book.author = author
            return {"message": "Book updated successfully"}
    return {"error": "Book not found"}

# Delete a book
@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    for book in books_db:
        if book.id == book_id:
            books_db.remove(book)
            return {"message": "Book deleted successfully"}
    return {"error": "Book not found"}
```
#### Test
##### Install dependencies
```shell
pip install fastapi pydantic uvicorn
```
##### Run the project
```shell
uvicorn main:app --reload --port 8000 # Use app from main.py as the Web API instance
```
##### Test the API
FastAPI will automatically generate a Swagger documentation, you can access http://127.0.0.1:8000/docs to test it using Swagger UI.
