// eslint-disable-next-line no-unused-vars
import React from "react";
// import RepositoriesList from "./components/RepositoriesList";
import Footer from "./components/Footer";
import "./App.css";
import githubLogo from "./assets/githubLogo.png";
import HomeScreen from "./Screens/HomeScreen";


/*
ROOT COMPONENT TO RENDER DE APPLICATION
*/
const App = () => {
  return (
    <>
  <div className="container border border-dark rounded-2">
        <div className="header rounded-2 bg-dark text-white mt-3 py-1 d-flex align-items-center justify-content-center">
          <img src={githubLogo} alt="githubLogo" className="logo" />
          <h2 className="text-light font-weight-bold text-center">TOP RANKED REPOSITORIES</h2>
        </div>
        <div className="container mt-4 pt-4">
          <HomeScreen />
        </div>
      </div>
      <Footer />
     </>
  );
}

export default App;
