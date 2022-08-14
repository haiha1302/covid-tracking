import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './Components/Menu/Menu'
import Home from './pages/Home';
import Footer from './Footer';
import AboutVN from './pages/AboutVN';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/aboutVN' component={AboutVN} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
