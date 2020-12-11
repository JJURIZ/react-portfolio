import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Nav from './components/Nav'
import Weather from './components/Weather'
import Github from './components/Github'

import './App.css';
import './style.scss';


function App() {

  const aboutMe = [
    {
      name: 'Jeremy Uriz',
      profession: 'Software Engineer',
      phone: '770-555-0000'
    }
  ]
  
  const myProjects = [
    {
      name: 'JavaScript Calculator',
      description: 'A pure vanilla JavaScript calculator',
      completed: 2020,
      technologies: 'JavaScript, HTML, CSS'
    },
    {
      name: 'MathMatic',
      description: 'A children\'s game testing core math operations',
      completed: 2020,
      technologies: 'JavaScript, HTML, CSS'
    },
    {
      name: 'H.I.I.T.S.',
      description: 'Application to allow gym members and owners to settle the age old problem of what music to play during the workout.',
      completed: 2020,
      technologies: 'Express, Node, EJS, PostgreSQL, Sequelize, Axios, JavaScript, HTML, CSS'
    },
    {
      name: 'Fun With Forms',
      description: 'Personal project to learn more about HTML forms. Simulates a patient intake form with personal, insurance, and employer information',
      completed: 2020,
      technologies: 'Express, Node, Pug, MongoDB Atlas, JavaScript, HTML, CSS'
    },
  ]


  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route 
      path="/About" 
      render={() => { return <About
      aboutMe={aboutMe} />
      }} 
      />
      <Route 
      path="/Contact" 
      render={() => { return <Contact
      aboutMe={aboutMe} />
      }} />
      <Route 
      path="/Projects" 
      render={() => { return <Projects
      myProjects={myProjects} />
      }} />
      <Route path="/Weather" component={Weather} />
      <Route path="/Github" component={Github} />
    </div>
    </BrowserRouter>
  );
}

export default App;
