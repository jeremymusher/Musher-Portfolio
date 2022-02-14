import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
    <Header />
    <Route path="/" component={Home} />
    </div>
  );
}

export default App;
