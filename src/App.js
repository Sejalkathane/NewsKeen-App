// import logo from './logo.svg';
import "./App.css";

// rcc -> react component
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";




export default class App extends Component {
  // c="SK"

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3 }
        color='#f11946'
        progress={this.state.progress}

      />

          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} key="general " country="in" csategory="general" />}
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} key="business " country="in" category="business" />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress} key="sports " country="in" category="sports" />}
            ></Route>
            <Route
              exact
              path="/general"
              element={<News setProgress={this.setProgress} key="general " country="in" category="general" />}
            ></Route>
            <Route
              exact
              path="/health"
              element={<News setProgress={this.setProgress} key="health " country="in" category="health" />}
            ></Route>
            <Route
              exact
              path="/science"
              element={<News setProgress={this.setProgress} key="science " country="in" category="science" />}
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} key="technology " country="in" category="technology" />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment "
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
