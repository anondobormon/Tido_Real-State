import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About/About";
import { Properties } from "./Components/AllProperties/Properties";
import { LevelContext } from "./Components/Context";
import { Home } from "./Components/Home/Home";
import { LoginResister } from "./Components/LoginResister/LoginResister";
import { NotFound } from "./Components/NotFound/NotFound";
import { PropertyForm } from "./Components/PropertyForm/PropertyForm";
import { SingleProperty } from "./Components/SingleProperties/SingleProperty";
import { DashboardAddProperty } from "./Components/UserDashboard/DashboradPages/DashboardAddProperty";
import { DashboardAllProperty } from "./Components/UserDashboard/DashboradPages/DashboardAllProperty";
import { DashboardUserProfile } from "./Components/UserDashboard/DashboradPages/DashboardUserProfile";
import { DashSection } from "./Components/UserDashboard/DashboradPages/DashSection";

function App() {
  let level = useContext(LevelContext);

  // const [prop, setProp] = useState();
  // useEffect(() => {
  //   fetch("http://localhost:5000/properties")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProp(data);
  //     });
  // }, []);

  return (
    <div className="App">
      l
      <LevelContext.Provider value={prop}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LoginResister />} />
          <Route path="/property/:id" element={<SingleProperty />} />
          <Route path="properties" element={<Properties />} />
          <Route path="form" element={<PropertyForm />} />
          <Route path="user" element={<DashSection />} />

          <Route path="user/dashboard" element={<DashSection />} />
          <Route path="user/profile" element={<DashboardUserProfile />} />
          <Route path="user/add-property" element={<DashboardAddProperty />} />
          <Route path="user/properties" element={<DashboardAllProperty />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LevelContext.Provider>
    </div>
  );
}

export default App;
