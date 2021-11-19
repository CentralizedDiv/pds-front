import "./App.css";

import Card from "./components/DemoCard";
import Menu from "./components/Menu";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Menu />
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/album">Álbum</Link>
          <Outlet />
        </nav>
      </header>
    </div>
  );
}

export default App;
