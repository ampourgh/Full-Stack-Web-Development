<?php

class Connect {

    public static $instance;

    protected static $username;
    protected static $password;

    private function __construct() {
        self::$username = "\nthisUser";
        self::$password = "\nthisPass";
        echo "Start connection.";
    }

    public static function getInstance() {
        if (!isset(Connect::$instance)) {
            Connect::$instance = new Connect();
        }
        return Connect::$instance;
    }

    public static function connection() {
        $user = self::$username;
        return $user;
    }

}

class Query {
    public function firstQuery() {
        $database = Connect::getInstance();
        $start = $database::connection();
        echo $start;
    }
}

$qq = new Query();
echo $qq->firstQuery();
