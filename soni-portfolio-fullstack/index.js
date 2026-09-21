const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Soni Roy - IT Portfolio Backend" });
});

app.get('/api/experience', (req, res) => {
  res.json([
    { 
      role: "Backend Executive", 
      company: "DSA Department", 
      duration: "2023 - 2025 (2 Years)", 
      work: "Loan files, backend operations, data management & client coordination" 
    },
    { 
      role: "Backend Executive (Current)", 
      company: "CA Firm", 
      duration: "2025 - Present", 
      work: "Currently working, GST, Accounting, Tally & transitioning to IT - Full Stack Development" 
    }
  ]);
});

app.post('/api/contact', (req, res) => {
  console.log(req.body);
  res.json({ message: "Message mil gaya Soni!" });
});

app.listen(5000, () => {
  console.log("Server 5000 par chal gaya - Soni Roy IT Portfolio");
});