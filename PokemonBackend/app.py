from flask import Flask, jsonify, request
from pymongo import MongoClient
from dotenv import load_dotenv
from flasgger import Swagger, swag_from
import os

load_dotenv()

app = Flask(__name__)
swagger = Swagger(app)

# MongoDB connection
client = MongoClient(os.getenv("MONGO_URI"))
db = client.pokemonLeague
trainers_collection = db.trainers

@app.route('/trainers', methods=['POST'])
@swag_from({
    'responses': {
        201: {'description': 'Trainer created successfully'},
        400: {'description': 'Invalid input'}
    },
    'parameters': [
        {
            'name': 'body',
            'in': 'body',
            'required': True,
            'schema': {
                'type': 'object',
                'properties': {
                    'name': {'type': 'string'},
                    'rank': {'type': 'string'},
                    'region': {'type': 'string'},
                    'team': {
                        'type': 'array',
                        'items': {
                            'type': 'object',
                            'properties': {
                                'name': {'type': 'string'},
                                'type': {'type': 'array', 'items': {'type': 'string'}}
                            }
                        }
                    },
                    'record': {
                        'type': 'object',
                        'properties': {
                            'wins': {'type': 'integer'},
                            'losses': {'type': 'integer'}
                        }
                    },
                    'money': {'type': 'number'}
                }
            }
        }
    ]
})
def create_trainer():
    data = request.get_json()
    result = trainers_collection.insert_one(data)
    return jsonify({"id": str(result.inserted_id)}), 201


@app.route('/trainers', methods=['GET'])
@swag_from({
    'responses': {200: {'description': 'List of all trainers'}}
})
def get_trainers():
    trainers = list(trainers_collection.find({}, {'_id': 0}))
    return jsonify(trainers), 200


@app.route('/trainers/<string:name>', methods=['GET'])
@swag_from({
    'parameters': [
        {'name': 'name', 'in': 'path', 'type': 'string', 'required': True}
    ],
    'responses': {
        200: {'description': 'Trainer found'},
        404: {'description': 'Trainer not found'}
    }
})
def get_trainer(name):
    trainer = trainers_collection.find_one({"name": name}, {'_id': 0})
    if trainer:
        return jsonify(trainer), 200
    return jsonify({"error": "Trainer not found"}), 404


@app.route('/trainers/<string:name>', methods=['PUT'])
@swag_from({
    'parameters': [
        {'name': 'name', 'in': 'path', 'type': 'string', 'required': True},
        {
            'name': 'body',
            'in': 'body',
            'required': True,
            'schema': {'type': 'object'}
        }
    ],
    'responses': {
        200: {'description': 'Trainer updated'},
        404: {'description': 'Trainer not found'}
    }
})
def update_trainer(name):
    data = request.get_json()
    result = trainers_collection.update_one({"name": name}, {"$set": data})
    if result.modified_count:
        return jsonify({"message": "Trainer updated"}), 200
    return jsonify({"error": "Trainer not found"}), 404


@app.route('/trainers/<string:name>', methods=['DELETE'])
@swag_from({
    'parameters': [
        {'name': 'name', 'in': 'path', 'type': 'string', 'required': True}
    ],
    'responses': {
        200: {'description': 'Trainer deleted'},
        404: {'description': 'Trainer not found'}
    }
})
def delete_trainer(name):
    result = trainers_collection.delete_one({"name": name})
    if result.deleted_count:
        return jsonify({"message": "Trainer deleted"}), 200
    return jsonify({"error": "Trainer not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
