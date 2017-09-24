#### Author: ampourgh | Version: 1.0.0 | Last Modified: 9/22/2017

# Project 5 — Map

## Getting Started

### Prerequisites
All the files included in the map/ file, including:
* index.html
* js folder - which includes the Google Maps and Wikipedia API 
* css folder - the layout of index.html
* img folder - which includes 5 images used for the sidebar
* lib doler - conatins the 2 extensions used for the project; knockout-3.4.2 and jquery.min

### Installing
1. Fork the catalog folder
2. Copy the link of the fork
3. In Git, use the clone command as so: git clone <forked url> <folder name>
  
OR

Directly download the folder.

### Folder Content Breakdown

#### knockout.js with Google Maps API
The map project uses the MVVM structure, index.html's view, googleMapsAPI.js' model and viewModel. The view consists of 3 components binded to the viewModel:
* The filterItems input filters through the locations present in the model
* The items lists the titles of the locations and directs it to its respective marker on the map
* the resetFilter binding turns visible when there's no items displayed after filtering the list, and the refreshListing binding resets the items list back to its original state

In googleMapsAPI.js, the model is the locations variable, with each variable in the array containing 3 members: title, location and address. The location is used for the marker's location on the map, the title and location are used for the infoWindow, and the title is also used for the view's list.

The viewModel contains the functionality for the information that goes on the view; taking the locations array and establishing how the information is seen on index.html. 
* Lines 231 - 333 goes through the process of filtering the input, with lines 196 - 213 for when the list is empty
* lines 215 - 229 connects the list item to its respective map marker when clicked

#### Google Maps API

Key additions to Google maps:
* On the beginning of line 8, the map style 'night mode' added as a stylistic choice
* Between lines 89 - 99 are the map features and specifications, which includes the original placement and zoom. A fullscreen options control was included so that the map would encompass the entirety of the screen
* Lines 121 - 138 are the marker symbols, which were changed to a circle with the insides filled in, with the fillColor matching the strokeColor
* Lines 421 - 429 is the function for the bounce animation, which includes a setTimeout so that the marker bounces no more than once. The function is executed through the marker listener at line 162, along with the viewModel list-to-model click at line 215.

#### Wikipedia API

The Wikipedia API uses Jquery and a AJAX GET request to place wikipedia information on the location onto the dropdown of the mobile page. 

wikiAPI consists of the:
* locations - on lines 8 - 19, the locations includes the name of the location, along with the Wikipedia name for the location for search purposes
* enter and click search function - on lines 21 - 31, the search function directs to the getWikiInfo() function, which consists of the following two functions below
* content filter - lines 35 - 52, much like the filter function used to filter the list for Google Map purposes, the Wiki API functions the same way, making a GET request for the first location from a filter
* AJAX request - lines 55 - 84, the GET request itself, appending the Wiki page content and url right below the view's list
* error handler - lines 87 - 89, the error pops up the same location the Google Maps filter appears


### Acknowledgments
* Udacity's google maps, cat clicker and wikipedia/NYTimes articles tutorials for the initial structure of the map layout, the MVVM template and two APIs used on the project
* used knockoutjs.com documentation to create the filter and the visibility of the 'NO FILTER RESULTS.' section
* Jason Chan's tutorial on 'Wikipedia Search API Javascript AJAX call GET' to get the wikipedia title and URL
* w3schools.com for the CSS used to create the dropdown for the <= 800px hamburger filter, along with CSS tweaks such as the gradiant transition for the dropdown
* css-tricks.com for addditional modifications to the CSS
* developers.google.com for the night time template, CIRCLE markers, fullscreen option and marker animation
* KudVenKat's number of tutorials of coding and loading error handlers
* stackoverflow.com for the code snippets used for the short animation and for the syntax for unwrapping observables
