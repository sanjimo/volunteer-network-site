import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from '../src/context/AuthProvider';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Home from '../src/components/Home/Home';
import Events from '../src/components/Events/Events';
import Donation from '../src/components/Donation/Donation';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import NotFound from '../src/components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/events"><Events/></Route>
            <Route exact path="/donation"><Donation/></Route>
            <Route exact path="/login"><Login></Login></Route>
            <Route exact path="/register"><Register></Register></Route>
            <Route path="*"><NotFound></NotFound></Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
