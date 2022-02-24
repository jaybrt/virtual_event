import "./App.css";
import { HeaderText, Info, CodeExample } from "./components";

const infoData = [
  {
    link: "https://www.freecodecamp.org/",
    title: "freeCodeCamp",
    text: "freeCodeCamp is a completely free, online coding bootcamp. Users can navigate through hundreds of tutorials at their own pace while earning certificates for all of the skills they acquire. The site offers many different ways to learn the content including coding lessons, articles, and video tutorials, and qualified learners even have the opportunity to gain hands-on coding experience by working for nonprofits. Programming languages taught: HTML, CSS, JavaScript, databases, Git, GitHub, Node.js, React.js, D3.js.",
  },
  {
    link: "https://www.khanacademy.org/computing/computer-programming",
    title: "Khan Academy",
    text: "When it comes to free online learning, the non-profit Khan Academy is the go-to site for nearly every subject, coding included. Khan academy offers multiple subjects to learn about including computer programming, computer science, and computer animation in collaboration with the animation company Pixar. Students can learn through video tutorials, coding challenges, and question forums. Programming languages taught: HTML, CSS, JavaScript (including games and visualizations), SQL, animation, algorithms, cryptography, information theory.",
  },
  {
    link: "https://www.codecademy.com/",
    title: "Codecademy",
    text: "Codecademy offers users both a free but restricted option as well as a pro plan with full access to all the course offerings for $15.99/month. Codecademy’s curriculum is organized into paths which will take you from zero to hero by teaching you all the skills you need for a career such as a fullstack developer. Users also have the ability to take courses on one programming language or subject at a time. Each lesson is broken up into different sections including projects, videos, quizzes, and even step-by-step exercises which can be done through their online code editor. Programming languages taught: HTML, CSS, Sass, JavaScript, jQuery, Angular, React, Java, Python, Ruby, SQL, Bash/Shell.",
  },
  {
    link: "https://www.w3schools.com/",
    title: "W3Schools",
    text: "W3Schools is another great free resource for learning to code, and it teaches students both client-side and server-side programming. W3 schools has many articles teaching users how to code, and there are also interactive example problems for users to solve along the way to help strengthen their understanding of the topic. Overall, this site is great for quickly figuring out the basics of a new programming language or command. Programming languages taught: HTML, CSS, Bootstrap, JavaScript, jQuery, AngularJS (v1.x), SQL, PHP, Node.js, Java, and more.",
  },
];

function App() {
  return (
    <div className="App gradient__bg">
      <header>
        <HeaderText />
      </header>
      <hr></hr>
      <div className="code-section">
        <h1>Python 101</h1>
        <CodeExample />
      </div>
      <div className="info-section">
        <h1>Learning Resources</h1>
        {infoData.map((_info) => (
          <Info link={_info.link} title={_info.title} text={_info.text} />
        ))}
      </div>
      <hr></hr>
      <div className="footer">
        <h1>Citations</h1>
        <p>
          Developerdrive Staff. “15 Best Places to Learn How to Code in 2019 -
          Developer Drive.” Www.developerdrive.com, 13 Feb. 2019,
          www.developerdrive.com/best-places-learn-how-to-code/. Accessed 18
          Dec. 2021.
        </p>
        <a href="https://jaybrt.github.io/tsa_webmaster">Back To Main Site</a>
      </div>
    </div>
  );
}

export default App;
