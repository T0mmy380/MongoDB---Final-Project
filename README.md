# MongoDB --- Final Project

This project is a sample trainer registry and battle management system based on the Pokémon League. It demonstrates how to use MongoDB as a backend with a structured trainer schema, and a Flask-based REST API (with Swagger documentation) to perform full CRUD operations.

## Overview

- **Database:** MongoDB  
- **API:** Flask / Flask‑RESTx (with Swagger UI)  
- **Frontend:** N/A (API-focused project)  
- **Included Utilities:**  
  - *Collection.js* – Script to populate the MongoDB collection with sample trainer data.  
  - *app.py* – Flask API for creating, reading, updating, and deleting trainer records.

## Features

- **MongoDB Schema:**  
  Each trainer document includes:
  - `name`: Trainer's name  
  - `rank`: Trainer's title or rank  
  - `region`: The region they come from  
  - `team`: Array of Pokémon, each with a `name` and `type` array  
  - `record`: Object containing `wins` and `losses`  
  - `money`: Total money the trainer holds

- **API Endpoints:**  
  - **POST** `/trainers`: Add a new trainer  
  - **GET** `/trainers`: Retrieve all trainers  
  - **GET** `/trainers/<name>`: Get a specific trainer by name  
  - **PUT** `/trainers/<name>`: Update trainer info  
  - **DELETE** `/trainers/<name>`: Remove a trainer  
  - **Swagger UI:** API is documented interactively at `/apidocs`

## File Structure

- `app.py` – Main Flask API with Swagger integration  
- `Collection.js` – JavaScript file to bulk insert sample data into MongoDB  
- `.env` – Holds MongoDB connection URI (`MONGO_URI`)  
- `requirements.txt` – Python packages required for the backend (optional)  
- `README.md` – Setup instructions and documentation

## Setup and Running

### Prerequisites

- **MongoDB:** Install and ensure it is running  
  [Download MongoDB for Windows](https://www.mongodb.com/try/download/community)

- **Python:** Version 3.12+  
  [Download Python](https://www.python.org/downloads/windows)

- **Install Required Python Packages:**

  You can install manually:




