import { Outlet } from "react-router";
import "./App.css";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <div className="h-16">
        <Nav></Nav>
      </div>
      <Outlet />
    </>
  );
}

export default App;
