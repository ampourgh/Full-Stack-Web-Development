from flask import Flask
app = Flask(__name__)

from json import dumps
from random import randint

"""
5. Here is some starter code for a Flask Web Application.
Expand on that and include a route that simulates rolling two dice
and returns the result in JSON.
You should include a brief explanation of your code.
"""

@app.route('/')
def hello_world():
 return 'Hello World!'

# extenstion: localhost:5000/roll
@app.route('/roll')
def roll_dice():
    # randint is imported from the random library to generate a random number
    # JSON's dumps is imported to return the JSON result

    # empty array
    rolls = []

    # generate the random numbers and put them in JSON format
    d6_1, d6_2 = randint(1, 6), randint(1, 6)
    roll1, roll2 = {'firstRoll' : d6_1}, {'secondRoll' : d6_2}

    # append to the empty around
    rolls.append(roll1)
    rolls.append(roll2)

    # return results
    return dumps(rolls)

if __name__ == '__main__':
 app.debug = True
 app.run(host='0.0.0.0')
