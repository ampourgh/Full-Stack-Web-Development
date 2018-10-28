<?php

class Connect {

    public static $instance;

    protected static $username = "thisUser";
    protected static $password = "thisPass";

    private function __construct() {
        $this->username = $username;
        $this->password = $password;
    }

    public static function getInstance() {
        if (!isset(Connect::$instance)) {
            Connect::$instance = new Connect();
        }
        return Connect::$instance;
    }

    public static function connection() {
        return $this->username;
    }

}

class Query {
    public function firstQuery() {
        $database = Connect::getInstance();
        $start = $database->connection();
        return $start;
    }
}

$qq = new Query();
echo $qq->firstQuery();
