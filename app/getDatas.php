<?php

  function getLanguages($array){
    $languages = [];
    if (in_array("french", $array)){
      array_push($languages, 'français');
    }
    if (in_array("english", $array)){
      array_push($languages, 'anglais');
    }

    return $languages;
  }

  /* Pour se connecter à la BDD, il faudra changer les paramètres suivants:
      "host" correspond à ton hébergeur, ici on utilise localhost puisqu'on est en local mais il changera en fonction de l'hébergeur
      "dbname" correspond au nom de la base de données
      Le second paramètre correspond au nom d'utilisateur (ici "root")
      Le troisième paramètre correspond au mot de passe (ici vide)
      Ce sont les identifiants par défaut de phpmyadmin mais ils changeront lorsque tu auras un hébergeur
  */

  $pdo = new PDO('mysql:host=localhost;dbname=bookreader', 'root', '', array( PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
  $opts = isset($_POST['filterOpts'])? $_POST['filterOpts'] : array('');
  $select = 'SELECT *';
  $from = ' FROM ';
  $where = ' WHERE TRUE';
  $count = sizeof($opts);
  if (in_array("book_b", $opts)) {
    $languages = getLanguages($opts);
    $from .= 'book_b';
    if($opts[$count-1][1] != '0'){
      $where .= ' AND sourate = '.$opts[$count-1][1];
    }
  }else if(in_array("book_a", $opts)) {
    $languages = getLanguages($opts);
    $from .= 'book_a';
    if($opts[$count-1][1] != '0'){
      $where .= ' AND sourate = '.$opts[$count-1][1];
    }
  }





  $sql = $select . $from . $where;
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($results, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  echo($json);
?>
