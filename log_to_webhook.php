<?php
// Ton webhook Discord
$webhook_url = "https://discord.com/api/webhooks/TON_ID/TON_TOKEN";

// Récupération IP
$ip = $_SERVER['REMOTE_ADDR'];

// Type d'action
$type = isset($_GET['type']) ? $_GET['type'] : 'Connexion';

// Date
$time = date("Y-m-d H:i:s");

// Contenu du message
$data = [
    "content" => "**$type détecté**\n🕒 $time\n🌐 IP: $ip"
];

// Envoi vers le webhook
$options = [
    'http' => [
        'method' => 'POST',
        'header'  => "Content-Type: application/json\r\n",
        'content' => json_encode($data),
    ]
];

$context  = stream_context_create($options);
file_get_contents($webhook_url, false, $context);
?>
