---
id: task-book-store
slug: /task-book-store

title: 图书商店
sidebar_label: 图书商店
---

### 任务
实现一个对图书进行管理的书店服务，并提供规范的增删改查 RESTful API。

#### Python 实现
```python title="main.py"
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# 内存数据库
books_db = []
book_id_counter = 0

# 图书模型
class Book(BaseModel):
    id: int
    title: str
    author: str

# 获取所有图书
@app.get("/books")
def get_all_books():
    return books_db

# 获取单个图书
@app.get("/books/{book_id}")
def get_book(book_id: int):
    for book in books_db:
        if book.id == book_id:
            return book
    return {"error": "Book not found"}

# 添加图书
@app.post("/books")
def add_book(title: str, author: str):
    global book_id_counter
    book_id_counter += 1
    book = Book(id=book_id_counter, title=title, author=author)
    books_db.append(book)
    return {"message": "Book added successfully"}

# 更新图书
@app.put("/books/{book_id}")
def update_book(book_id: int, title: str, author: str):
    for book in books_db:
        if book.id == book_id:
            book.title = title
            book.author = author
            return {"message": "Book updated successfully"}
    return {"error": "Book not found"}

# 删除图书
@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    for book in books_db:
        if book.id == book_id:
            books_db.remove(book)
            return {"message": "Book deleted successfully"}
    return {"error": "Book not found"}
```
#### 测试
##### 安装依赖
```shell
pip install fastapi pydantic uvicorn
```
##### 运行项目
```shell
uvicorn main:app --reload --port 8000 # 以 main.py 的 app 作为 Web API 实例
```
##### 测试接口
FastAPI 会自定生成 Swagger 文档，可访问 http://127.0.0.1:8000/docs 通过 Swagger UI 进行测试。
 