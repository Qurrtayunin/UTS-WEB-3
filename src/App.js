import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
}  from "react-router-dom";
import Header from "./Header";
import Blog from "./Blog";
import About from "./About";
import Home from "./Home";
import BlogDetail from "./BlogDetail";

//install bootstrap dulu
import 'bootstrap/dist/css/bootstrap.min.css';

// Ini merupakan functional component
// https://getbootstrap.com/docs/4.4/examples/navbar-static/

function App() {
      return (
        <div className="App">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/blog">
                <Blog />
                <BlogDetail/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
