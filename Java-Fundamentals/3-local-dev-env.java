/*
SDK - Software Development Kit - A grouping of tools that allow you to create software locally. Also some times referred to as devkits.
JDK - Java SE Development Kit - A set of tools specifically for developing Java SE Applications
Java SE - Standard Edition
JRE - Java Runtime Environment - A minimum set of tools that allow local Java programs to execute
Java SE API - Application Programming Interface - A set of libraries provided to build applications.
JCL - Java Class Library - A synonym for the Java SE API. More info here.
JVM - Java Virtual Machine - an abstract computing machine.


Umbrella (what contains what):
JDK -> JRE -> JAVA SE API

Download latest version of Java: https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html

in Terminal:
java --version

Download IntelliJ IDE: https://www.jetbrains.com/idea/download/#section=mac


In Intellij, to standardize to the best formating practices:
Code -> Reformat Code
OR
option + CMD + L
OR
command + shift + a -> type reformat in actions tab


For searching (specifically classes in the example):
shift + shift

To get word -> sentence -> paragraph:
option + up arrow

Go back:
command + z

Go forward:
shift + command + z

equivalent of ctrl + d:
ctrl + t
OR
on the menu, choose refactor -> refactor this

Below are comment labels for todos and bug fixes, in intellij they can be accessed for the bottom navbar:
TODO:
FIXME:

*/

// sys
// ./com/group/Main.java
package com.team;

import java.util.Set;
import java.util.TreeSet;

public class Main {

    public static void main(String[] args) {

        // sout + tab will create the syntax below

        System.out.printf("This is the classpath:  %s %n",
                System.getProperty("java.class.path"));
        Set<String> propNames = new TreeSet<String>(System.getProperties().stringPropertyNames());
        for (String propertyName : propNames) {
            System.out.printf("%s is %s %n",
                    propertyName,
                    System.getProperty(propertyName));
        }
    }
}

/*
  ---------------------------------------------------------------
*/

// ./src/Karaoke.java
import com.team.KaraokeMachine;
import com.team.model.Song;
import com.team.model.SongBook;

public class Karaoke {

  public static void main(String[] args) {
    SongBook songBook = new SongBook();
    songBook.importFrom("songs.txt");
    KaraokeMachine machine = new KaraokeMachine(songBook);
    machine.run();
    System.out.println("Saving book....");
    songBook.exportTo("songs.txt");
  }
}


// ./src/com/team/KaraokeMachine.java
package com.team;

import com.team.model.Song;
import com.team.model.SongBook;
import com.team.model.SongRequest;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Queue;


public class KaraokeMachine {
  private SongBook mSongBook;
  private BufferedReader mReader;
  private Queue<SongRequest> mSongQueue;

  private Map<String, String> mMenu;

  public KaraokeMachine(SongBook songBook) {
    mSongBook = songBook;
    mReader = new BufferedReader(new InputStreamReader(System.in));
    mSongQueue = new ArrayDeque<SongRequest>();
    mMenu = new HashMap<String, String>();
    mMenu.put("add", "Add a new song to the song book");
    mMenu.put("play", "Play next song in the queue");
    mMenu.put("choose", "Choose a song to sing!");
    mMenu.put("quit", "Give up.  Exit the program");
  }

  private String promptAction() throws IOException {
    System.out.printf("There are %d songs available and %d in the queue.  Your options are: %n",
                     mSongBook.getSongCount(),
                     mSongQueue.size());
    for (Map.Entry<String, String> option : mMenu.entrySet()) {
      System.out.printf("%s - %s %n",
                        option.getKey(),
                        option.getValue());
    }
    System.out.print("What do you want to do:  ");
    String choice = mReader.readLine();
    return choice.trim().toLowerCase();
  }

  public void run() {
    String choice = "";
    do {
      try {
        choice = promptAction();
        switch(choice) {
          case "add":
            Song song = promptNewSong();
            mSongBook.addSong(song);
            System.out.printf("%s added!  %n%n", song);
            break;
          case "choose":
            String singerName = promptForSingerName();
            String artist = promptArtist();
            Song artistSong = promptSongForArtist(artist);
            SongRequest songRequest = new SongRequest(singerName, artistSong);
            if (mSongQueue.contains(songRequest)) {
              System.out.printf("%n%n %s already requested %s!", singerName, artistSong);
              break;
            }
            mSongQueue.add(songRequest);
            System.out.printf("You chose:  %s %n", artistSong);
            break;
          case "play":
            playNext();
            break;
          case "quit":
            System.out.println("Thanks for playing!");
            break;
          default:
            System.out.printf("Unknown choice:  '%s'. Try again.  %n%n%n",
                             choice);
        }
      } catch(IOException ioe) {
        System.out.println("Problem with input");
        ioe.printStackTrace();
      }
    } while(!choice.equals("quit"));
  }

  // TODO: etc
  private String promptForSingerName() throws IOException {
    System.out.println("What is your name: ");
    return mReader.readLine();
  }

  // TODO: etc
  private Song promptNewSong() throws IOException {
    System.out.print("Enter the artist's name:  ");
    String artist = mReader.readLine();
    System.out.print("Enter the title:  ");
    String title = mReader.readLine();
    System.out.print("Enter the video URL:  ");
    String videoUrl = mReader.readLine();
    return new Song(artist, title, videoUrl);
  }

  private String promptArtist() throws IOException {
    System.out.println("Available artists:");
    List<String> artists = new ArrayList<>(mSongBook.getArtists());
    int index = promptForIndex(artists);
    return artists.get(index);
  }

  private Song promptSongForArtist(String artist) throws IOException {
    List<Song> songs = mSongBook.getSongsForArtist(artist);
    List<String> songTitles = new ArrayList<>();
    for (Song song : songs) {
      songTitles.add(song.getTitle());
    }
    System.out.printf("Available songs for %s: %n", artist);
    int index = promptForIndex(songTitles);
    return songs.get(index);
  }

  private int promptForIndex(List<String> options) throws IOException {
    int counter = 1;
    for (String option : options) {
      System.out.printf("%d.)  %s %n", counter, option);
      counter++;
    }
    System.out.print("Your choice:   ");
    String optionAsString = mReader.readLine();
    int choice = Integer.parseInt(optionAsString.trim());
    return choice - 1;
  }

  public void playNext() {
    SongRequest songRequest = mSongQueue.poll();
    if (songRequest == null) {
      System.out.println("Sorry there are no songs in the queue." +
                         "  Use choose from the menu to add some");
    } else {
      Song song = songRequest.getSong();
      System.out.printf("%n%n%n Ready %s? Open %s to hear %s by %s %n%n%n",
                        songRequest.getSingerName(),
                        song.getVideoUrl(),
                        song.getTitle(),
                        song.getArtist());
    }
  }

}


// ./src/com/team/model/Song.java
package com.team.model;

public class Song {
    protected String mArtist;
    protected String mTitle;
    protected String mVideoUrl;

    public Song(String artist, String title, String videoUrl) {
        mArtist = artist;
        mTitle = title;
        mVideoUrl = videoUrl;
    }

    public String getTitle() {
        return mTitle;
    }

    public String getArtist() {
        return mArtist;
    }

    public String getVideoUrl() {
        return mVideoUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Song song = (Song) o;

        if (mArtist != null ? !mArtist.equals(song.mArtist) : song.mArtist != null) return false;
        if (mTitle != null ? !mTitle.equals(song.mTitle) : song.mTitle != null) return false;
        return mVideoUrl != null ? mVideoUrl.equals(song.mVideoUrl) : song.mVideoUrl == null;
    }

    @Override
    public int hashCode() {
        int result = mArtist != null ? mArtist.hashCode() : 0;
        result = 31 * result + (mTitle != null ? mTitle.hashCode() : 0);
        result = 31 * result + (mVideoUrl != null ? mVideoUrl.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return String.format("Song:  %s by %s", mTitle, mArtist);
    }
}


// ./src/com/team/model/SongBook.java
package com.team.model;

import java.io.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

public class SongBook {
  private List<Song> mSongs;

  public SongBook() {
    mSongs = new ArrayList<Song>();
  }

  public void exportTo(String fileName) {
    try (
      FileOutputStream fos = new FileOutputStream(fileName);
      PrintWriter writer = new PrintWriter(fos);
    ) {
      for (Song song : mSongs) {
        writer.printf("%s|%s|%s%n",
                      song.getArtist(),
                      song.getTitle(),
                      song.getVideoUrl());

      }
    } catch(IOException ioe) {
      System.out.printf("Problem saving %s %n", fileName);
      ioe.printStackTrace();
    }
  }

  public void importFrom(String fileName) {
    try (
      FileInputStream fis = new FileInputStream(fileName);
      BufferedReader reader = new BufferedReader(new InputStreamReader(fis));
    ) {
      String line;
      while((line = reader.readLine()) != null) {
        String[] args = line.split("\\|");
        addSong(new Song(args[0], args[1], args[2]));
      }
    } catch(IOException ioe) {
      System.out.printf("Problems loading %s %n", fileName);
      ioe.printStackTrace();
    }
  }

  public void addSong(Song song) {
    mSongs.add(song);
  }

  public int getSongCount() {
    return mSongs.size();
  }

  // FIXME:  This should be cached!
  private Map<String, List<Song>> byArtist() {
    Map<String, List<Song>> byArtist = new TreeMap<>();
    for (Song song : mSongs) {
      List<Song> artistSongs = byArtist.get(song.getArtist());
      if (artistSongs == null) {
        artistSongs = new ArrayList<>();
        byArtist.put(song.getArtist(), artistSongs);
      }
      artistSongs.add(song);
    }
    return byArtist;
  }

  public Set<String> getArtists() {
    return byArtist().keySet();
  }

  public List<Song> getSongsForArtist(String artistName) {
    List<Song> songs = byArtist().get(artistName);
    songs.sort(new Comparator<Song>() {

      @Override
      public int compare(Song song1, Song song2) {
        if (song1.equals(song2)) {
          return 0;
        }
        return song1.mTitle.compareTo(song2.mTitle);
      }
    });
    return songs;
  }

}


// ./src/com/team/model/SongRequest.java
package com.team.model;

public class SongRequest {
    private String mSingerName;
    private Song mSong;

    public SongRequest(String singerName, Song song) {
        mSingerName = singerName;
        mSong = song;
    }

    public String getSingerName() {
        return mSingerName;
    }

    public void setSingerName(String singerName) {
        mSingerName = singerName;
    }

    public Song getSong() {
        return mSong;
    }

    public void setSong(Song song) {
        mSong = song;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SongRequest that = (SongRequest) o;

        if (!mSingerName.equals(that.mSingerName)) return false;
        return mSong.equals(that.mSong);
    }

    @Override
    public int hashCode() {
        int result = mSingerName.hashCode();
        result = 31 * result + mSong.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "SongReques{" +
                "mSingerName='" + mSingerName + '\'' +
                ", mSong=" + mSong +
                '}';
    }
}

// ./src/songs.txt
/*
Artist1|Song1|https://www.youtube.com/watch?v=
Artist1|Song2|https://www.youtube.com/watch?v=
Artist1|Song3|https://www.youtube.com/watch?v=
Artist2|Song1|https://www.youtube.com/watch?v=
Artist3|Song1|https://www.youtube.com/watch?v=
Artist2|Song2|https://www.youtube.com/watch?v=
*/
