import fresh_tomatoes
import media

# Below is the movies that turn into a list, formatted based on the Movie class in media.py

Lilo = media.Movie("Lilo and Stitch",
                    "2002",
                    "85 minutes",
                    "Artificially created space alien escapes captivity and crashes into Earth.",
                    "https://upload.wikimedia.org/wikipedia/en/c/c6/LiloandStitchmovieposter.jpg",
                    "https://www.youtube.com/watch?v=KYz2wyBy3kc")

blade_runner = media.Movie("Blade Runner",
                        "1982",
                        "117 minutes",
                        "Classic cyberpunk movie, with neo-noir aesthetic, and eerie electronic soundscapes.",
                        "https://upload.wikimedia.org/wikipedia/en/5/53/Blade_Runner_poster.jpg",
                        "https://www.youtube.com/watch?v=hu9bERy7XGY")

Drive = media.Movie("Drive",
                    "2011",
                    "100 minutes",
                    "Hollywood stunt devil driver gets involved in an onslaught of events.",
                    "http://img.moviepostershop.com/drive-movie-poster-2011-1010745541.jpg",
                    "https://www.youtube.com/watch?v=KBiOF3y1W0Y")

Ex_Machina = media.Movie("Ex Machina",
                        "2014",
                        "108 minutes",
                        "Scifi film about the turing test, guy wins a trip to interact with a sentient AI.",
                        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
                        "https://www.youtube.com/watch?v=XYGzRB4Pnq8")

Cuckoo = media.Movie("One Flew Over the Cuckoo's Nest",
                    "1975", 
                    "133 minutes",
                    "A tale of a felon who gets sent to a mental asylum.",
                    "https://upload.wikimedia.org/wikipedia/en/2/26/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg",
                    "https://www.youtube.com/watch?v=OXrcDonY-B8")

Howls = media.Movie("Howl's Moving Castle",
                    "2004", 
                    "119 minutes",
                    "Girl gets cursed with old age by a which, and comes across a moving castle with magical inhabitants.",
                    "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
                    "https://www.youtube.com/watch?v=iwROgK94zcM")

# the movies are then placed into a list
movies = [Lilo, blade_runner, Drive, Ex_Machina, Cuckoo, Howls]
# The list is processed in the function named open_movies_page within fresh_tomatoes.py
fresh_tomatoes.open_movies_page(movies)


