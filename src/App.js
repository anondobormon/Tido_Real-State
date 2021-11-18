import "./App.css";
import { About } from "./Components/About/About";
import { Properties } from "./Components/AllProperties/Properties";
import { Home } from "./Components/Home/Home";
import { SingleProperty } from "./Components/SingleProperties/SingleProperty";

function App() {
  return (
    <div className="App">
      <Home />
      <SingleProperty />
      <Properties />
      <About />
    </div>
  );
}

export default App;
