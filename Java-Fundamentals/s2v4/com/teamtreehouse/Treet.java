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
