import { Nav } from "./navigation/nav";
import { Home } from "./pages/home/home";
import { Hamburger } from "./navigation/hamburger";
import { Logo } from "./logo/logo";

import "./css/styles.css";
import "./fonts/fonts.css";
function App() {
  return (
    <>
      <header className="mobile-header">
        <Logo width="100vw" height="100vh" />
        <Hamburger />
      </header>
      <Home />
    </>
  );
}

export default App;
