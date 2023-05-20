import Header from "./cmp/Header/Header";
import Footer from "./cmp/Footer/Footer";
import Homepage from "./cmp/Homepage/Homepage";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = ()=>{
  const design = (
    <>
      <Router>
        <Header />
          <div>
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/blog">
                  <h1>Welcome to blog</h1>
                </Route>
                <Route exact path="/software-engineering">
                  <h1>Welcome to se</h1>
                </Route>
                <Route exact path="/web-development">
                  <h1>Welcome to wd</h1>
                </Route>
                <Route exact path="/robotics">
                  <h1>Welcome to robotics</h1>
                </Route>
                <Route exact path="/contact-us">
                  <h1>Welcome to contact us</h1>
                </Route>
              </Switch>
          </div>
        <Footer />
      </Router>
    </>
  );
  return design;
}

export default App;
