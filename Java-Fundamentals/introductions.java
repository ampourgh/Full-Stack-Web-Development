/*
Oracle is the company that develops Java
Everything in Java is case sensitive
If data type is lower case, they are called a primitive, such as an int
primitive data types include: int, double, long, byte, char, float, short, boolean
*/

// INTRODUCTIONS.JAVA

// IO == input / output
import java.io.Console;

// The name of class is the same as the name of the file
public class Main {
  public static void main(String[] args) {
    Console console = System.console();
    String firstString = console.readLine("Insert text: ");
    console.printf("\n%s\nconsole logging\nconsole logging", firstString);

  }
}

// javac Introductions.java --> to compile
// ls
// >>> Introductions.class Introductions.java
// java introductons --> to run

// STRINGS AND VARIABLES

// Variables are written in camelCase

/*
  ---------------------------------------------------------------
*/

import java.io.Console;

// The name of class is the same as the name of the file
public class Main {
  public static void main(String[] args) {

    Console console = System.console();
    String name = console.readLine("Enter username: ");
    String adjective = console.readLine("Enter adj: ");

    console.printf("%s is very %s", name, adjective);

  }
}

/*
  ---------------------------------------------------------------
*/

import java.io.Console;

// The name of class is the same as the name of the file
public class Main {
  public static void main(String[] args) {
    Console console = System.console();

    String ageAsString = console.readLine("How old? ");
    int age = Integer.parseInt(ageAsString);
    if (age < 13) {
      console.printf("Sry, you need to be 13 or older to run this program.\n");
      System.exit(0);
    }

    String name = console.readLine("Enter a name:  ");
    String adjective = console.readLine("Enter an adjective:  ");

    String noun;
    boolean isInvalid;

    do {
      noun = console.readLine("Enter a noun:  ");

      sInvalid = (noun.equalsIgnoreCase("trash")
                  || noun.equalsIgnoreCase("dumpster fire"));

      // There's the ==, equals and equalsIgnoreCase function
      if (isInvalid) {
        console.printf("Please refrain from the trashtalk. Try again.\n\n");
      }
    } while (isInvalid);

    String adverb = console.readLine("Enter an adverb:  ");
    String verb = console.readLine("Enter a verb ending with -ing:  ");

    console.printf("%s is an %s %s. ", name, adjective, noun);
    console.printf("They are sometimes %s %s.\n", adverb, verb);
  }
}

/*
  ---------------------------------------------------------------
*/
