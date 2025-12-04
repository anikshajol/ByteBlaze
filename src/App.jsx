import { Outlet } from "react-router";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="h-16">
        <Nav></Nav>
      </div>
      <div className="min-h-[100vh-64px-52px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
