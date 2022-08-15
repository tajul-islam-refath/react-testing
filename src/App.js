import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/login/Login";
import Search from "./components/search/Search";
import Stories from "./components/stories/Stories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Body title="Learning React" /> */}

          <Route path="/" element={<Stories />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
