#### Author: ampourgh | Version: 2.0.0 | Last Modified: 9/17/2017

# Project 5 — Neighborhood Map

## Getting Started

### Prerequisites
All the files included in the map/ file, including:
* index.html
* SimpleHTTPServer.py
* js folder - which includes the Google Maps API and contentStyle.json
* css folder - the layout of index.html
* img folder - which includes 5 images used for the sidebar
* lib doler - conatins the 2 extensions used for the project; knockout-3.4.2 and jquery-3.2.1.min

Along with:
* Git command line
* Python 3.61

### Installing
1. Fork the catalog folder
2. Copy the link of the fork
3. In Git, use the clone command as so: git clone 

```git 
<forked url> <folder name>
```

OR

Directly download the folder.

### Booting up webpage on localhost
Boot up Git Bash and navigate to where the Neighborhood_Map folder is, click on the folder and use the command ls to make sure SimpleHTTPServer.py is present. From there, use the following command to start server port 8000:
```git
python SimpleHTTPServer.py
```
If the following message appears, the webpage is connected onto localhost.

"SUCCESSFULLY CONNECTED!
serving at port 8000, access the page at: http://localhost:8000"

As such, navigate to the following address on a browser: http://localhost:8000

### Acknowledgments
* https://www.shareicon.net for icons used for the project
* Udacity's google maps, cat clicker and wikipedia/NYTimes articles tutorials for the initial structure of the map layout, the MVVM template and two APIs used on the project
* used knockoutjs.com documentation to create the filter and the visibility of the 'NO FILTER RESULTS.' section
* Jason Chan's tutorial on 'Wikipedia Search API Javascript AJAX call GET' to get the wikipedia title and URL
* w3schools.com for the CSS used to create the dropdown for the <= 800px hamburger filter, along with CSS tweaks such as the gradiant transition for the dropdown
* css-tricks.com for addditional modifications to the CSS
* developers.google.com for the night time template, CIRCLE markers, fullscreen option and marker animation
* KudVenKat's number of tutorials of coding and loading error handlers
* stackoverflow.com for the code snippets used for the short animation and for the syntax for unwrapping observables
