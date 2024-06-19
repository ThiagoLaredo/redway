<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mail = new PHPMailer(true);

try {
    // Configurações do servidor de e-mail
    $mail->SMTPDebug = 0; // Altere para 2 se precisar de debugging, 0 em produção
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USER'];
    $mail->Password = $_ENV['SMTP_PASS'];
    $mail->SMTPSecure = $_ENV['SMTP_SECURE'];
    $mail->Port = $_ENV['SMTP_PORT'];

    // Configurações dos destinatários
    $mail->setFrom($_ENV['SMTP_USER'], 'Formulário de Contato');
    $mail->addAddress('olatuthinking@gmail.com', 'Nome do Destinatário'); // Adicione um destinatário

    // Validar a entrada
    $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $whatsapp = filter_var($_POST['whatsapp'], FILTER_SANITIZE_STRING);
    $motivo = filter_var($_POST['motivo'], FILTER_SANITIZE_STRING);
    $mensagem = filter_var($_POST['mensagem'], FILTER_SANITIZE_STRING);

    if (!$email) {
        throw new Exception('Email inválido.');
    }

    // Conteúdo do e-mail
    $mail->isHTML(true);
    $mail->Subject = 'Novo contato de: ' . $nome;
    $mail->Body    = 'Você recebeu uma nova mensagem de ' . $nome . '<br>'
                    . 'E-mail: ' . $email . '<br>'
                    . 'WhatsApp: ' . $whatsapp . '<br>'
                    . 'Motivo: ' . $motivo . '<br>'
                    . 'Mensagem: ' . nl2br($mensagem);
    $mail->AltBody = 'Nome: ' . $nome . "\n"
                    . 'E-mail: ' . $email . "\n"
                    . 'WhatsApp: ' . $whatsapp . "\n"
                    . 'Motivo: ' . $motivo . "\n"
                    . 'Mensagem: ' . $mensagem;

    $mail->send();
    echo 'Mensagem enviada com sucesso!';
} catch (Exception $e) {
    echo "Mensagem não pôde ser enviada. Mailer Error: {$mail->ErrorInfo}<br>";
    echo "Erro: {$e->getMessage()}"; // Exibe a mensagem de erro personalizada
}
?>
