<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Ici, vous pouvez ajouter le code pour ajouter l'e-mail à la liste de diffusion
    // Par exemple, enregistrement dans une base de données, appel à une API, etc.

    // Exemple basique : enregistrement dans un fichier texte (à des fins de démonstration)
    $file = fopen("abonnes.txt", "a");
    fwrite($file, $email . PHP_EOL);
    fclose($file);

    echo "Merci de vous être abonné à notre newsletter !";
}
?>
