/*
Object Oriented Programming

JShell / Project Kulla is the first official Java REPL (Read-Eval-Print-Loop)
https://blog.takipi.com/java-9-early-access-a-hands-on-session-with-jshell-the-java-repl/

*/

String someWords = "example text";
someWords.contains("example");
// >>>True

/*
  ---------------------------------------------------------------
*/

// Main.java
public class Main {
  public static void main(String[] args) {
    System.out.println("We are making a new cat.");
    Feline cat = new Feline("Snorlax");
    // cat.name = "Snorlax";
    System.out.printf("The cat is a %s %n",
                      cat.getName());
    String originalName = cat.swap("Meowth");
    System.out.printf("The cat is now a %s %n",
                      cat.getName());
  }
}

// Feline.java
class Feline {

  // when class string is put on private, it's called encapsulation
  private String name;
  final private String family = "Felidae";

  // instantiation of the class, with a string arg a name
  public Feline(String inputName) {
    this.name = inputName;
  }

  // declaring a method
  public String getName() {
    return name;
  }

  public String swap(String inputName) {
    String originalName = this.name;
    this.name = inputName;
    return originalName;
  }

}

/*
  ---------------------------------------------------------------
*/
