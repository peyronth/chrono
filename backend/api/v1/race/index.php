<?php
require_once '../../config.php';
require_once ROOT_PATH . '/Database.php';
require_once ROOT_PATH . '/Utils.php';

$db = Database::getInstance();

try {
    $stmt = $db->query("SELECT * FROM race ORDER BY date DESC");
    $races = $stmt->fetchAll(PDO::FETCH_ASSOC);
    jsonResponse($races);
} catch (PDOException $e) {
    jsonResponse(['error' => 'Database error'], 500);
}
