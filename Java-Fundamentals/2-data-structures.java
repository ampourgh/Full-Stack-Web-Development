// SECTION 1

// ./Main.java
import java.util.Date;
import com.team.Comment;

public class Main {
  public static void main(String[] args) {
    Comment comment = new Comment(
      "Emerson Pourghaed",
      "Comment here.",
      new Date(620024400L)
    );
    System.out.printf("NEW: %s %n", comment);
  }
}

// ./com/team/Comment.java
package com.team;

import java.util.Date;

public class Comment {
  private String mAuthor;
  private String mDescription;
  private Date mCreationDate;

  public  Comment(String author, String description, Date creationDate) {
    mAuthor = author;
    mDescription = description;
    mCreationDate = creationDate;
  }

  // if method name changed:
  // error: method does not override or implement a method from a supertype
  @Override
  public String toString() {
    return "Comment: \"" + mDescription + "\" @" + mAuthor + " (" + mCreationDate + ")";
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
}
