import './App.css';
import Home from './pages/Home';
import Menu from './Components/Menu/Menu'
import Footer from './Footer';
import AboutVN from './pages/AboutVN';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
