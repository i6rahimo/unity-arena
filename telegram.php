<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$value = $_POST['playerNumber'];
$message = $_POST['room'];
$token = "5683526280:AAFwAEGGbUbKshhbiXkBB9SO3XYtz7qF920";
$chat_id = "-1001857805137";
$arr = array(
  'Ваше имя: ' => $name,
  'Ваш телефон: ' => $phone,
  'Дата' => $date,
  'Время' => $time,
  'Количество игроков' => $value,
  'Зал' => $message
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  return false;
} else {
  return true;
}
