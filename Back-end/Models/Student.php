<?php


require "Connection.php";


Class Student
{
    public $id;
    public $name;
    public $telphone;

    public static function getAll()
    {
        $Connection = Connection::getDb();

        $stmt = $Connection->query("SELECT * FROM students");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registerStudent()
    {
        $Connection = Connection::getDb();
        $stmt = $Connection->query("INSERT INTO students (name,telphone) VALUES ('$this->name','$this->telphone') ");

         if ($stmt->rowCount() > 0) {
             return true;
         } else {
            return false;
        }
    }

}
