// SECTION 1

// Syntax

arr2 = [null, null, null];
arr1 = [1, 2];
System.arraycopy(arr1, 0, arr2, 0, 2);

// >>> the arr2 will now have: [1, 2, null]

Arrays.copyOf(arr1, 4);
//>>> arr1 will now have [1, 2, null, null]
arr1[2] = 3;
//>>> arr1 = [1, 2, 3, null];

/*
  ---------------------------------------------------------------
*/


// ./Main.java
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

import com.team.Comment;
import com.team.Comments;


public class Main {

  public static void main(String[] args) {

    Comment comment = new Comment(
      "Emerson",
      "Hello world.",
      new Date(1421849732000L)
    );

    Comment secondComment = new Comment(
      "Emerson",
      "Second comment goes here.",
      new Date(1421849732000L)
    );

    Comment[] comments = Comments.load();
    System.out.printf("There are %d comments. %n",
                     comments.length);

    Set<String> allHashTags = new HashSet<String>();
    Set<String> allMentions = new TreeSet<String>();

    for (Comment comment : comments) {
      allHashTags.addAll(comment.getHashTags());
      allMentions.addAll(comment.getMentions());
    }

    System.out.printf("Hash tags: %s %n", allHashTags);
    System.out.printf("Mentions: %s %n", allMentions);

  }

}


// ./com/team/Comment.java
package com.team;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class Comment implements Comparable<Comment>, Serializable {

  private static final long serialVersionUID = 7146681148113043748L;
  private String mAuthor;
  private String mDescription;
  private Date mCreationDate;

  public Comment(String author, String description, Date creationDate) {
    mAuthor = author;
    mDescription = description;
    mCreationDate = creationDate;
  }

  @Override
  public String toString() {
    return String.format("Comment:  \"%s\" by %s on %s",
                         mDescription, mAuthor, mCreationDate);
  }

  @Override
  public int compareTo(Comment other) {

    if (equals(other)) {
      return 0;
    }

    int dateCmp = mCreationDate.compareTo(other.mCreationDate);

    if (dateCmp == 0) {
      return mDescription.compareTo(other.mDescription);
    }

    return dateCmp;
  }

  public String getAuthor() {
    return mAuthor;
  }

  public String getDescription() {
    return mDescription;
  }

  public Date getCreationDate() {
    return mCreationDate;
  }

  public List<String> getWords() {

    String[] words = mDescription.toLowerCase().split("[^\\w#@']+");
    return Arrays.asList(words);

  }

  public List<String> getHashTags() {
    return getWordsPrefixedWith("#");
  }

  public List<String> getMentions() {
    return getWordsPrefixedWith("@");
  }

  private List<String> getWordsPrefixedWith(String prefix) {

    List<String> results = new ArrayList<String>();

    for (String word : getWords()) {
      if (word.startsWith(prefix)) {
        results.add(word);
      }
    }

    return results;
  }

}


// ./com/team/Comments.java
package com.team;

import java.io.*;

public class Comments {
  public static void save(Comment[] comments) {
    try (
      FileOutputStream fos = new FileOutputStream("comments.ser");
      ObjectOutputStream oos = new ObjectOutputStream(fos);
    ) {
      oos.writeObject(comments);
    } catch(IOException ioe) {
      System.out.println("Problem saving Comments");
      ioe.printStackTrace();
    }
  }

  public static Comment[] load() {
    Comment[] comments = new Comment[0];
    try (
      FileInputStream fis = new FileInputStream("comments.ser");
      ObjectInputStream ois = new ObjectInputStream(fis);
    ) {
      comments = (Comment[]) ois.readObject();
    } catch(IOException ioe) {
      System.out.println("Error reading file");
      ioe.printStackTrace();
    } catch(ClassNotFoundException cnfe) {
      System.out.println("Error loading comments");
      cnfe.printStackTrace();
    }
    return comments;
  }

}
