import webbrowser

class Video():
    """This is the Video parent class that houses movie and perhaps other future mediums """
    def __init__(self,
                 title,
                 year,
                 duration):
        self.title = title
        self.year = year
        self.duration = duration

class Movie(Video):
    """ This class provides a way to store movie related information """ #__doc__
    VALID_RATINGS = ["G", "PG", "PG-13", "R"]
    
    def __init__(self,
                 title,
                 year,
                 duration,
                 movie_storyline,
                 poster_image,
                 trailer_youtube): #constructor = the __init__ initializer
        Video.__init__(self, title, year, duration) #inheritance
        self.storyline = movie_storyline #self. makes it an instance variable
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube

    def show_trailer(self): #instance method
        webbrowser.open(self.trailer_youtube_url)
