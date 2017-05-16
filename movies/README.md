#### Author: ampour | Version: 1.0.0 | Last Modified: 5/15/2017

# Project 1 — Movies 
Python code designed to produce a webpage with a catalogue of movie, linking the movie's trailer if clicked.

## Getting Started
Download the files listed in /movies/.

### Prerequisites
Needs a Python compiler to run, the project was coded in Python 3.61. Python's compiler can be found on Python.org > Downloads > Python 3.6.1, then scroll down and choose a download link with the OS you are currently running.


### Installing
Download, or CTRL+C, the code found in the /movie/ file, which inlcude the python files listed below. 

File List:
-------
* media.py
* entertainment.py
* fresh_tomatoes.py

### Running the tests
In order to simply run the test, as is, run entertainment_center.py and your default browser will pop up with a webpage with a catalogue of clickable movies. 

#### Breakdown on how to modify the template:
For modifying the list, media.py includes the class and constructor that maps out the perameters for the information the movie instance will take. The Video class is the parent that contains the title, year and duration, where the Movie child class contains movie_storyline, poster_image, and trailer_youtube. The Video subclass exists in case a TV_show, YouTube or Videogame child classes were to be added. 

Entertainment_center.py contains the list of instances of movies that will show up, and is where the program is ran. As specified within media.py, each movie variable takes in: 

* title
* year
* duration
* storyline
* poster
* trailer

All the new variable of movies are inserted into the list below to be processed into fresh_tomatoes.py.
```python
movies = []
fresh_tomatoes.open_movies_page(movies)
```

Fresh_tomatoes.py is a template that passes the variables from the list in entertainment_center.py and into HTML/CSS code. In order for the information to be process, it needs to be appended within the code below:

```python
        # Append the tile for the movie with its content filled in
        content += movie_tile_content.format(
            title=movie.title,
            year=movie.year,
            poster_image_url=movie.poster_image_url,
            trailer_youtube_id=trailer_youtube_id
        )
    return content
```

The information is then delegated here:

```python
movie_tile_content = '''
<div class="col-md-6 col-lg-4 movie-tile text-center" data-trailer-youtube-id="{trailer_youtube_id}" data-toggle="modal" data-target="#trailer">
    <img src="{poster_image_url}" width="220" height="342" class="poster">
        <h3><span><span class="bold">{title}</span> ({year})</span></h3>
</div>
'''
```
Which is then written into the {movie_tiles} section of the HTML template.

### Acknowledgments
Based on and modified from a tutorial at Udacity.


