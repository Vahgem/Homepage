import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Howtonft from "./Components/Howtonft";
import Faqs from "./Components/Faq";

class Homepage extends Component {
 
  render() {
    return (
      <div className="App">
        <Header />
        <About  />
        <Howtonft />
        <Faqs/>
       <Footer/>
      </div>
    );
  }
}

export default Homepage;
