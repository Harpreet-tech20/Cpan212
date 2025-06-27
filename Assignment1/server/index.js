import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(cors());

app.get('/getOverview', (req, res) => {
  res.json({ 
    name: "Harpreet Kaur", 
    about: "Currently pursuing a Diploma in Computer Programming at Humber Polytechnic. Passionate about software development, eager to learn and grow in full stack development and problem-solving." 
  });
});

app.get('/getEdu', (req, res) => {
  res.json([
    { degree: "Diploma in Computer Programming", school: "Humber Polytechnic", year: "2024" }
  ]);
});

app.get('/getExp', (req, res) => {
  res.json([
    { title: "Frontend Developer", company: "CreativeApps Inc.", years: "2024–2025" }
  ]);
});

app.get('/getSkills', (req, res) => {
  res.json(['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']);
});

app.get('/getProjects', (req, res) => {
  res.json([
    { name: "Portfolio Website", desc: "Personal portfolio with React & Bootstrap." },
    { name: "E-commerce App", desc: "Simple shopping cart built with MERN." }
  ]);
});

app.get('/getCerts', (req, res) => {
  res.json([
    { name: "AWS Certified Cloud Practitioner", year: "2024" },
    { name: "Meta Frontend Developer Certificate", year: "2023" }
  ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
