import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from './pages/sign-in';
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/post'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog_main from './pages/blog_main'
// import Register from "./pages/register";

ReactDOM.render(
<>
  <BrowserRouter>
    <Switch>
        <Route path="/blogs">
            <Home>
                <title>Home | INFIRIO</title>
            </Home>
        </Route>

        <Route path="/blog/:title">
            <Blog_main/>
        </Route>

        <Route path="/post">
            <Post/>
        </Route>

        <Route path="/about">
            <About>
                <title>About | INFIRIO</title>
            </About>
        </Route>

        <Route path="/services">
            <Services/>
        </Route>

        <Route path="/contact">
            <Contact/>
        </Route>

        <Route path="/home">
            <Home/>
        </Route>

        <Route path="/">
            <Home/>
        </Route>

        <Route path="/sign-in">
            <SignIn></SignIn>
        </Route>
    </Switch>
  </BrowserRouter>
</>,
  document.getElementById('root')
);