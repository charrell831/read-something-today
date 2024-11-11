from flask import Flask
from flask_cors import CORS
from flask import request

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

import json


class Node:
   def __init__(self, statement):
      self.child = []
      self.statment = statement
   def toJSON(self):
        return json.dumps(
            self,
            default=lambda o: o.__dict__, 
            sort_keys=True,
            indent=4)

@app.route('/api/baldwinTree/', methods=['GET'])
def baldwinTree():
    root = Node('I want to read...')
    (root.child).append(Node('Fiction'))
    (root.child).append(Node('Non-Fiction'))
    (root.child[0].child).append(Node('I want to be happy'))
    (root.child[0].child).append(Node('I want to cry'))
    (root.child[0].child).append(Node('I want to sob'))
    (root.child[1].child).append(Node('It is hard for me to focus'))
    (root.child[1].child).append(Node('I am overwhelmed'))
    (root.child[1].child).append(Node('I want my life to change'))
    (root.child[1].child).append(Node('I want a one stop shop'))
    (root.child[0].child[0].child).append(Node('Read another author'))
    (root.child[0].child[1].child).append(Node('If Beale Street Could Talk'))
    (root.child[0].child[2].child).append(Node('Giovannis Room'))
    return root.toJSON()

@app.route('/api/displayRow/', methods=['GET'])
def getRow():
    child = request.args.get('child')
    statment = request.args.get('statment')
    node = Node(statment)
    (node.child).append(child)
    print('node', node)
    if (node.child != None):
        return node.child
    return None

@app.route('/api/displayLevel/', methods=['GET'])
def displayLevel(row, root):
     if row == -1:
         return root.child
     if row == 0:
         return root.child[0]
     if row == 1:
         return root.child[1]


if __name__ == '__main__':
    app.run()