// import Hero from './Components/Hero';
import Indexbody from './Components/Indexbody';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Indexbody/>
    <Router>
    <Switch>
          <Route exact path="/">
            <index-body />
          </Route>
          <Route path="/about">
            <Navbar />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
