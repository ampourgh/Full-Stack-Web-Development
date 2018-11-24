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
import com.team.Comment;

public class Main {

  public static void main(String[] args) {

    Comment comment = new Comment(
      "Emerson Pourghaed",
      "Comment inserted here.",
      new Date(620024400L)
    );

    Comment comment2 = new Comment(
      "Emerson Pourghaed",
      "Second comment inserted here.",
      new Date(620024400L)
    );

    System.out.printf("NEW: %s %n", comment);

    System.out.println("The words are: ");

    for (String word: comment.getWords()) {
      System.out.println("word");
    }

    Comment[] comments = {
      comment, comment2
    };

    Arrays.sort(comments);

    for (Comment exampleComment : comments) {
      System.out.println(exampleComment);
    }
  }

}

// ./com/team/Comment.java
package com.team;

import java.util.Date;

public class Comment {
  private String mAuthor;
  private String mDescription;
  private Date mCreationDate;

  public Comment(String author, String description, Date creationDate) {
    mAuthor = author;
    mDescription = description;
    mCreationDate = creationDate;
  }

  // if method name changed:
  // error: method does not override or implement a method from a supertype
  @Override
  public String toString() {
    return String.format(
      "Comment \"%s\" by %s on %s",
      mDescription, mAuthor, mCreationDate);
  }

  @Override
  public int compareTo(Object obj) {
    Comment other = (Comment) obj;

    if(equals(other)) {
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

  public String[] getWords() {
    return mDescription.toLowerCase().split("[^\\w#@']+");
  }
}
