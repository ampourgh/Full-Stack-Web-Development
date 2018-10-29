<?php

$passedUser = "\nthisUser";
$passedPass = "\nthisPass";

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

class Query {
    public function firstQuery($user, $pass) {
        $database = Connect::getInstance($user, $pass);
        $start = $database::connection();
        echo $start;
    }
}

$qq = new Query();
echo $qq->firstQuery($passedUser, $passedPass);
