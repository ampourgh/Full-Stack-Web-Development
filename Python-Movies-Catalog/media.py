import webbrowser

# Video parent class 
class Video():
    """This is the Video parent class that houses movie and perhaps other future mediums """
    #constructor for instance variables title, year and duration
    def __init__(self,
                 title,
                 year,
                 duration):
        self.title = title
        self.year = year
        self.duration = duration

# Movie child class that inherits from Video
class Movie(Video):
    """ This class provides a way to store movie related information """ #__doc__
    VALID_RATINGS = ["G", "PG", "PG-13", "R"] #a constant - the movie ratings
    
    # Movie's constructor variable with Video's inherited variable, along with Movie specific instance variables
    def __init__(self,
                 title,
                 year,
                 duration,
                 movie_storyline,
                 poster_image,
                 trailer_youtube):
        Video.__init__(self, title, year, duration) #inheritance from Video
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube

    # instance method which defines show_trailer
    def show_trailer(self): 
        webbrowser.open(self.trailer_youtube_url)
