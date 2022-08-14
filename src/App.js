import "./App.css";
import Body from "./components/Body";
import Login from "./components/login/Login";
import Search from "./components/search/Search";
import Stories from "./components/stories/Stories";

function App() {
  return (
    <div className="App">
      {/* <Body title="Learning React" /> */}
      {/* <Login /> */}
      <div className="container my-5">
        <div className="d-flex justify-content-center">
          <Search>Search for </Search>
        </div>
        <Stories />
      </div>
    </div>
  );
}

export default App;
