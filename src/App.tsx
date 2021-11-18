import logo from "./logo.svg";
import "./App.css";

import Card from "./components/DemoCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testing CI with GH Actions</p>
        <Card />
      </header>
    </div>
  );
}

export default App;
