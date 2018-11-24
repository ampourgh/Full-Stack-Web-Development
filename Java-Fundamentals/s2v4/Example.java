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
