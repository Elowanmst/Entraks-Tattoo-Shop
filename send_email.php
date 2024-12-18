<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['mail']);
    $telephone = htmlspecialchars($_POST['tel']);
    $idee = htmlspecialchars($_POST['message']);
    $taille = htmlspecialchars($_POST['taille']);
    $emplacement = htmlspecialchars($_POST['emplacement']);

    $to = "entraks.tattoo.shop.rdv@gmail.com";
    $subject = "Demande de tattoo de $prenom $nom";
    $message = "Nom: $nom\nPrénom: $prenom\nE-mail: $email\nTéléphone: $telephone\nIdée du tattoo: $idee\nTaille: $taille\nEmplacement: $emplacement";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Demande envoyée avec succès.";
    } else {
        echo "Erreur lors de l'envoi.";
    }
}
?>