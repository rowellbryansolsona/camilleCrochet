const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "camille14Rose",
  database: "camille-crochet",
});

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  const productId = req.params.id;

  const q = "SELECT * FROM products";
  db.query(q,[productId], (err,data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;

  const q = "SELECT * FROM products where id = ?";
  db.query(q,[productId], (err,data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
});

app.get("/api/contactinfo" , (req, res) => {
  const q = "SELECT * FROM contactinfo";
  db.query(q, (err,data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.post("/api/save-contactinfo", (req, res) => {
  const { name, email, number, subject, message } = req.body;

  const q = "INSERT INTO contactinfo (`name`, `email`, `number`, `subject`, `message`) VALUES (?, ?, ?, ?, ?)";
  const values = [name, email, number, subject, message];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Error saving contact info:", err);
      return res.status(500).json({ error: "An error occurred while saving contact info" });
    }

    sendEmail(email, subject, message);
    return res.json("Your message has been delivered");
  });
});


function sendEmail(recepient, subject, message) {
  // Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'genesis.14solsona@gmail.com',
    pass: 'uoxg cbzw gnlp cuxi'
  }
});

// Define email options
const mailOptions = {
  from: recepient,
  to: 'genesis.14solsona@gmail.com',
  subject: subject,
  text: message
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});