import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About/About";
import { Properties } from "./Components/AllProperties/Properties";
import { LevelContext } from "./Components/Context";
import { Home } from "./Components/Home/Home";
import { LoginResister } from "./Components/LoginResister/LoginResister";
import { NotFound } from "./Components/NotFound/NotFound";
import { PlaceProperty } from "./Components/PopulerPlace/PlaceProperty";
import { PropertyForm } from "./Components/PropertyForm/PropertyForm";
import { SingleProperty } from "./Components/SingleProperties/SingleProperty";
import { DashboardAddProperty } from "./Components/UserDashboard/DashboradPages/DashboardAddProperty";
import { DashboardAllProperty } from "./Components/UserDashboard/DashboradPages/DashboardAllProperty";
import { DashboardUserProfile } from "./Components/UserDashboard/DashboradPages/DashboardUserProfile";
import { DashSection } from "./Components/UserDashboard/DashboradPages/DashSection";

function App() {
  let level = useContext(LevelContext);

  return (
    <div className="App">
      <LevelContext.Provider value={level}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LoginResister />} />
          <Route path="/property/:id" element={<SingleProperty />} />
          <Route path="properties" element={<Properties />} />
          <Route path="form" element={<PropertyForm />} />
          <Route path="user" element={<DashSection />} />
          <Route path="city/:city" element={<PlaceProperty />} />

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
