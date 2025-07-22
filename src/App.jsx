import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Education } from "./components/educaton/educaton"; // check spelling "educaton"

const educationList = [
  {
    degree: "Master of Computer Applications(MCA)",
    institution: "Chandigarh University",
    duration: "2023 – 2025",
    description: "Focused on full-stack web development, data structures, and database design.",
    imageSrc: "skills/cu.jpeg",
    href: "https://www.cuchd.in/"
  },
  {
    degree: "Bachelor of Science",
    institution: " Chhatrapati Shahu Ji Maharaj University",
    duration: "2019 – 2022",
    description: "Completed coursework in Physics, Chemistry, Mathematics",
    imageSrc: "history/csjmu.png",
    href: "https://www.csjmkanpuruniversity.org/"
  }
];

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education educationList={educationList} />
      <Contact />
    </div>
  );
}

export default App;
