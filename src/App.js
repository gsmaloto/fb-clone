import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wall from "./components/Wall";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Sidebar />
        <Wall className="app__wall"/>
        <h4>chat</h4>
      </div>
    </div>
  );
}

export default App;
