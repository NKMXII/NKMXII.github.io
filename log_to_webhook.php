<?php
$webhook_url = "https://discord.com/api/webhooks/1358197654575648945/PXLFa9MW5PoHMlOmnIlA5eydxT8RFuK5neV7yMnDByn-MNGA43ye7Z9UqPmGq5k8ncz_";

// Récupère IP
$ip = $_SERVER['REMOTE_ADDR'];
$type = isset($_GET['type']) ? $_GET['type'] : 'Connexion';
$time = date("Y-m-d H:i:s");

$data = [
    "content" => "**$type détecté**\n🕒 $time\n🌐 IP: $ip"
];

$options = [
    'http' => [
        'method'  => 'POST',
        'header'  => "Content-Type: application/json\r\n",
        'content' => json_encode($data),
    ]
];

$context = stream_context_create($options);
$result = @file_get_contents($webhook_url, false, $context);

// Debug : affiche résultat (temporaire)
if ($result === FALSE) {
    echo "Erreur d’envoi vers le webhook.";
} else {
    echo "Log envoyé avec succès.";
}
?>
