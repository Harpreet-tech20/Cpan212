import ProfileImage from './components/ProfileImage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Overview from './components/Overview';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <ProfileImage /> {/* Profile image shows here */}
        <h1 className="text-center mb-4">My Online Resume</h1>
        
        <Overview />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

