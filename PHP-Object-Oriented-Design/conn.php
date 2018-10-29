<?php

$passedUser = "thisUser";
$passedPass = "thisPass";

class Connect {

    public static $instance;

    protected static $username;
    protected static $password;

    private function __construct($user, $pass) {
        self::$username = $user;
        self::$password = $pass;
        echo "Start connection.";
    }

    public static function getInstance($user, $pass) {
        if (!isset(Connect::$instance)) {
            Connect::$instance = new Connect($user, $pass);
        }
        return Connect::$instance;
    }

    public static function connection() {
        $user = self::$username;
        return $user;
    }

}

class Query implements Welcome {
    public function loggingIn($user, $pass) {
        $database = Connect::getInstance($user, $pass);
        $start = $database::connection();
        return $start;
    }

    public function welcomeMessage($user) {
        return "\nWelcome " . $user . " to the server!";
    }
}

interface Welcome {
    public function welcomeMessage($user);
}

function pushWelcome(Welcome $qq, $login) {
  $qq->welcomeMessage($login);
}

$qq = new Query();
$login = $qq->loggingIn($passedUser, $passedPass);
echo pushWelcome($qq, $login);
