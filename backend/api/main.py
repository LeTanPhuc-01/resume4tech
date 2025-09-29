from fastapi import FastAPI, Form, Header, HTTPException
import sqlite3, os, re

app = FastAPI()
@app.post("/subscribe")
def subscribe(email: str = Form(...)):
    conn = sqlite3.connect("emails.db")
    cursor = conn.cursor()

    # Create table if not exists
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE
        )
    """)

    try:
        cursor.execute("INSERT INTO subscribers (email) VALUES (?)", (email,))
        conn.commit()
        return {"message": "Email subscribed successfully"}
    except sqlite3.IntegrityError:
        return {"error": "Email already subscribed"}
    finally:
        conn.close()