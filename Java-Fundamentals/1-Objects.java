/*
Object Oriented Programming

JShell / Project Kulla is the first official Java REPL (Read-Eval-Print-Loop)
https://blog.takipi.com/java-9-early-access-a-hands-on-session-with-jshell-the-java-repl/


pre-increment: i++; returns the value before incrementing
post-increment: ++i; returns the incremented value


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
    System.out.printf(" and has %s %n health points.",
                      cat.MAX_HEALTH);
    String originalName = cat.swap("Meowth");
    System.out.printf("\nThe cat is now a %s %n",
                      cat.getName());
    System.out.printf("Healing wounds...");

    if (cat.isDepleted()) {
      System.out.println("Depleted.");
    }

    cat.heal();

    if (!cat.isDepleted()) {
      System.out.println("Not depleted.");
    }

    while(cat.decline()) {
      System.out.println("-1 HP");
    }

    if (cat.isDepleted()) {
      System.out.println("Depleted.");
    }

    cat.heal(3);

    while(cat.decline()) {
      System.out.println("-1 HP");
    }

    try {
      cat.heal(20);
      System.out.println("Overdose will not work.");
    } catch(IllegalArgumentException iae) {

      System.out.printf("ERROR: %s", iae.getMessage());

    }

  }
}

// Feline.java
class Feline {

  // when class string is put on private, it's called encapsulation
  private String name;
  final private String family = "Felidae";

  // static refers to how the var is stored into memory
  public static final int MAX_HEALTH = 10;

  private int HealthPoints;

  // instantiation of the class, with a string arg a name
  public Feline(String inputName) {
    this.name = inputName;
    HealthPoints = 0;
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

  public boolean isDepleted() {
    return HealthPoints == 0;
  }

  // when the method does not return anything, it's called void
  public void heal() {
    heal(MAX_HEALTH);
  }

  public void heal(int healthPot) {
    int newHP = HealthPoints + healthPot;
    if (newHP > MAX_HEALTH) {
      throw new IllegalArgumentException("Preventing an overdose on nutrients.");
    }

    HealthPoints = healthPot;

  }

  public boolean decline() {
    boolean declining = false;
    if (!isDepleted()) {
      HealthPoints--;
      declining = true;
    }
    return declining;
  }

}

/*
  ---------------------------------------------------------------
*/

// Main.java
public class Main {
  public static void main(String[] args) {
    Game game = new Game("legends");

    Prompter prompter = new Prompter(game);
    while(game.getRemainingTries() > 0) {
      prompter.displayProgress();
      prompter.prompterForGuess();
    }

    /*
    if (isHit) {
      System.out.println("hit");
    } else {
      System.out.println("missed");
    }

    prompter.displayProgress();
    */
  }

}

// Game.java
class Game {

  public static final int MAX_MISSES = 7;
  private String answer;
  private String hits;
  private String misses;

  public Game(String answer) {
    this.answer = answer;
    hits = "";
    misses = "";
  }

  public boolean applyGuess(char letter) {
    boolean isHit = answer.indexOf(letter) != -1;
    if (isHit) {
      hits += letter;
    } else {
      misses += letter;
    }
    return isHit;
  }

  public int getRemainingTries() {
    return MAX_MISSES - misses.length();
  }

  public String getCurrentProgress(){
    String progress = "";
    for(char letter : answer.toCharArray()) {
      char display = '-';
      if(hits.indexOf(letter) != -1) {
        display = letter;
      }
      progress += display;
    }

    return progress;
  }

}

// Prompter.java
import java.util.Scanner;

class Prompter {
  private Game game;

  public Prompter(Game game) {
    this.game = game;
  }

  public boolean prompterForGuess() {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter letter: ");
    String guessInput = scanner.nextLine();
    char guess = guessInput.charAt(0);
    return game.applyGuess(guess);
  }

  public void displayProgress() {
    System.out.printf("%d attempts left to solve %s%n", game.getRemainingTries(),game.getCurrentProgress());
  }

}
