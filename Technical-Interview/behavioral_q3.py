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

# Refactored code to take up less space

def display_strings(list_of_strings):
    aggregated_string = "<ul>\n"
    for string in list_of_strings:
        aggregated_string += ("  <li>%s</li>\n" % (string))
    aggregated_string += "</ul>"
    return aggregated_string

arr = ['hello', 'world']
print(display_strings(arr))
