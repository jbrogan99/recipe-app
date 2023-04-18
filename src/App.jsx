import React, { useState } from "react";
import { Home } from "./pages/home";
import { Hamburger } from "./navigation/hamburger";
import { Logo } from "./logo/logo";
import "./css/styles.css";
import "./fonts/fonts.css";
import { NavHeadings } from "./navigation/navHeadings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Hungover } from "./pages/hungover";
import { Travel } from "./pages/travel";
import { Weather } from "./pages/weather";
import { Work } from "./pages/work";
import { NavHeadingsDesktop } from "./navigation/navHeadingsDesktop";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [errorMessage, setErrorMessage] = useState({
    errorMessageHome: false,
    errorMessage: false,
    errorMessageTravel: false,
    errorMessageWeather: false,
    errorMessageWork: false,
  });
  console.log("active page", activePage);
  return (
    <>
      <Router>
        <header>
          <div className="mobile-header">
            <Logo width="100vw" height="100vh" />
            <Hamburger
              setShowResults={setShowResults}
              showResults={showResults}
            />
          </div>
          <div className="desktop-header">
            <Logo width="100vw" height="100vh" />

            <NavHeadingsDesktop
              setActivePage={setActivePage}
              activePage={activePage}
            />
          </div>
          <NavHeadings
            showResults={showResults}
            activePage={activePage}
            setActivePage={setActivePage}
            setShowResults={setShowResults}
          />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                activePage={activePage}
                setActivePage={setActivePage}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/hungover"
            element={
              <Hungover
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/travel"
            element={
              <Travel
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/weather"
            element={
              <Weather
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/work"
            element={
              <Work
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
