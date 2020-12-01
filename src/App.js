import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {

  return (
    <Router>
    
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/login" children={<Login/> } />
        </Switch>
    </Router>
  );
}

export default App;
