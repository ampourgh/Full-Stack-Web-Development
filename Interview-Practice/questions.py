"""
Behavioral Interview Questions
"""

"""
1.	What is the most influential book or blog post you’ve read regarding web development?

The most influential blog I have used has been freecodecamp. Originally, signed up to their site for their free tutorials and community, however I have been receiving emails from them about their blog which has been very useful. The blogs covers a wide variety of material, such as the latest web development trends, guides on specific languages, and a roadmap on what to learn. The blog also link to other helpful webpages with content, so it’s been useful to learning about content outside of their own blog as well. I particular was finding that learning React had a bit of barrier to entry, and the sample code I’ve seen on other pages were clear enough for me to understand how to manipulate and build on the code. However, I’ve recently went through a blog covering React, which has been helpful for getting a better grasp on how the parts come together. Because of their resource, I believe I’m better equipped now to tackle a project with the framework.

The most influential book I read was not specifically focused on web development in particular, but is relatable when designing a webpage. The book is called Non-designer’s Design & Type Books by Robin Williams, and is focused on general design philosophies that could be transferred over various mediums in graphic and instructional design. It includes how to format a page, which gives a overview on spacing, alignment, repetition, font styles, common design conventions that are used and how to move away from those conventions to make the page be more alluring. Personally, the biggest take away was being conscious of how a person might stumble on your page, and considering to what degree they could be paying attention to your content. I’ve learned that the special composition lead the persons’ eyes across the page, without the clutter detracting from their time viewing your work.
"""

"""
2.	Tell me about a web application you have built. Why did you choose to build it? What did you learn? What challenges did you face and how did you overcome them?

Awhile back, I decided I wanted an updated portfolio page with JSON functionality. The idea was that the content would for the most part be contained within a JSON file, while the HTML page focused on structure of the page. The main problem I came across was the JavaScript that was meant to load the JSON wasn’t working. As someone who has a preference for learning on a video platform, I looked up examples on YouTube first to get an idea how the examples implemented it, but the examples given were either using older versions or weren’t particularly close to how I planned to implement JSON. I then went on to read the updated documentation on MDN, read through the breakdown of how the JavaScript and JSON were set up. I then researched more on their format to see how I could create hyperlinks and images. This challenge presented to me a situation where I couldn’t fall back on my preference. I got out of my comfort zone, and used the documentation that was available to solve my how I would build my webpage.
"""

"""
3.	Write a function in Python that takes a list of strings
and returns a single string that is an HTML unordered list (<ul>...</ul>) of those strings.
You should include a brief explanation of your code.
Then, what would you have to consider if the original list was provided by user input?
"""

#create a function that takes in an argument
def string_list(list_of_strings):

	# The variable single string starts off taking in the first part of the unordered list
    single_string += '<ul>’

    # assuming the list is an array, loop through the argument
    for each_string in list_of_strings:
	   # add each string along with a space to separate the strings
        single_string += each_string + ' '

    # when the loop is done, add the closing unordered list tag
    single_string += '</ul>'

    #  return the single string
    return single_string

# initializing the function, include the array
Array = [‘x’, ‘y’, ‘z’]
string_list(array)

"""
If the original list was provided by user input,
I would have to consider what the min and max amount of strings could be inserted in the array.
Along with what the length of strings,
what alphanumeric values would be accepted,
or whether a dictionary would be preferable for what the user is inputting.
"""

"""
4.	List 2-3 attacks that web applications are vulnerable to. How do these attacks work? How can we prevent those attacks?

The most common are SQL injection and OS commanding. A SQL injection is when the attacker inserts a malicious SQL statement to either compromise, control or withdraw the contents of a database. Suggestions include having constraints on the acceptable characters that are allowed, along with using an account that does not have administrative powers over the database. With OS command attacks, the attacker will inject malicious commands within normal ones.  A solution suggested, as suggested with the previous attack, is to have constraints on acceptable characters, along with limiting user input by giving less opportunities to so. One other solution for both injections is to look for an API that would protect the programming language, however not all programming languages will have a choice.
"""

"""
5.	Here is some starter code for a Flask Web Application. Expand on that and include a route that simulates rolling two dice and returns the result in JSON. You should include a brief explanation of your code.
"""

from flask import Flask
app = Flask(__name__)

from json import dumps
from random import randint

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

"""
6.	If you were to start your full-stack developer position today, what would be your goals a year from now?

If I started my full-stack developer position today, I would learn as much as I can the business and employee side. That way in a year from now, I would be able to research and make sound judgment on how I could guide the company forward. This would be contributing to the company by introducing modern web design techniques that align with the organizations vision and various products and services the company has to offer. This would also mean that when I do make suggestions, that I am able to clearly and succinctly get ideas across to all levels of management and professionals. That way we’re able to collaborate and refine our websites and services.
"""
