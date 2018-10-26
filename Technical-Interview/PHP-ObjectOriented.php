<?php
  /*
  PHP Methods
  protected - same as private, but also can be altered by sub-classes
  public - outside can modify this
  private - only classes can modify this attribute

  */

  class Android {

    protected $birth_name;
    protected $operating_system;
    protected $start_up_sound;
    protected $id;

    public static $population = 0;

    const PI = "3.14159";

    // Android::PI

    function getName() {
      return $this->birth_name;
    }

    function __construct() {

      $this->id = rand(100, 1000000000);
      $this->birth_name = 'Android' . $this->id;
      $this->operating_system = 'FreeWareOS';
      $this->start_up_sound = 'Boop.';

      echo $this->id . " has been assigned.\n";

      Android::$population++;

    }

    public function __destruct() {
      echo $this->birth_name . " is being destroyed.";
    }

    function __get($variable) {
      echo "Ask for " . str_replace("_", " ", $variable) . "\n";
      return $this->$variable;
    }


    function __set($variable, $value) {
      switch($variable) {
        case "birth_name":
          $this->birth_name = $value;
          break;
        case "operating_system":
          $this->operating_system = $value;
          break;
        case "start_up_sound":
          $this->start_up_sound = $value;
          break;
        default:
          echo $variable . " not found.";
      }

      echo "Set " . str_replace("_", " ", $variable) . " to " . $value . "\n";
    }

    function run() {
      echo $this->birth_name . " runs\n";
    }
  }

  class Dog extends Android {
    function run() {
      echo $this->birth_name . " runs like crazy\n";
    }
  }

  $android_clone = new Android();

  echo $android_clone->birth_name . " says " . $android_clone->start_up_sound . "\n";

  $android_clone->birth_name = "l33t";
  $android_clone->operating_system = "Windows 2057";
  $android_clone->start_up_sound = "Beeonnn";

  echo $android_clone->birth_name . " says " . $android_clone->start_up_sound;
 ?>
