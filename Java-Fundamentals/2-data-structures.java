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
      "craigsdennis",
      "Want to be famous? Simply tweet about Java and use " +
      "the hashtag #comment. I'll use your tweet in a new " +
      "@treehouse course about data structures.",
      new Date(1421849732000L)
    );
    Comment secondComment = new Comment(
      "journeytocode",
      "@treehouse makes learning Java sooooo fun! #comment",
      new Date(1421878767000L)
    );
    System.out.printf("This is a new Comment:  %s %n", comment);
    System.out.println("The words are:");
    for (String word: comment.getWords()) {
      System.out.println(word);
    }
    Comment[] comments = {secondComment, comment};
    Arrays.sort(comments);
    for (Comment exampleComment : comments) {
      System.out.println(exampleComment);
    }
  }

}


// ./com/team/Comment.java

package com.team;

import java.util.Date;

public class Comment implements Comparable {
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
  public int compareTo(Object obj) {
    Comment other = (Comment) obj;
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

  public String[] getWords() {
   return mDescription.toLowerCase().split("[^\\w#@']+");

  }

}
