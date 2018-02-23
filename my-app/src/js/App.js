import React, { Component } from 'react';
import '../css/App.css';
import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";


class App extends Component {
  
  render() {
    return (
      <div className="wrap App">
        <div className="content">
          <Header />
          <Tasks />
          
        </div>
        <div className="footer"><Footer /></div>
      </div>
    );
  }
}
export default App;
