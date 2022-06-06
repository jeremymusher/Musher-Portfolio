import './App.css';
import { Route } from "react-router-dom"
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
    <Route path ="/" component={Header}/>
    <Route path ="/" exact component={Projects} />
    <Route path ="/aboutme" exact component={About} />
    <Route path ="/contact" exact component={Contact} />
    </div>
  );
}

export default App;
