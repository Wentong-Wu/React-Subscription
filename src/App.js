import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { Component } from "react";
import PostForm from "./components/PostForm";
import PatchForm from './components/PatchForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/subscribe' element={<PostForm/>}/>
            <Route path='/subscribe/:email' element={<PatchForm/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
