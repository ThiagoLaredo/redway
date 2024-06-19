import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001; // Porta alternativa

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { nome, email, whatsapp, motivo, mensagem } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,  // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'olatuthinking@gmail.com',
    subject: `Mensagem de ${nome}`,
    text: `Nome: ${nome}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nMotivo: ${motivo}\nMensagem: ${mensagem}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erro ao enviar email:", error);
      res.status(500).send("Erro ao enviar e-mail.");
    } else {
      console.log("Email enviado com sucesso:", info.response);
      res.status(200).send("E-mail enviado com sucesso.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

