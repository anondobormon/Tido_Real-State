import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About/About";
import { Properties } from "./Components/AllProperties/Properties";
import ContactPage from "./Components/Contact/ContactPage";
import { LevelContext } from "./Components/Context";
import { Home } from "./Components/Home/Home";
import { LoginResister } from "./Components/LoginResister/LoginResister";
import { NotFound } from "./Components/NotFound/NotFound";
import { PlaceProperty } from "./Components/PopulerPlace/PlaceProperty";
import ProtectedRoute from "./Components/PortectedRoute/ProtectedRoute";
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
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginResister />} />
          <Route path="/property/:id" element={<SingleProperty />} />
          <Route path="properties" element={<Properties />} />
          <Route path="form" element={<PropertyForm />} />

          <Route
            path="city/:city"
            element={
              <ProtectedRoute>
                <PlaceProperty />
              </ProtectedRoute>
            }
          />

          <Route
            path="user/dashboard"
            element={
              <ProtectedRoute>
                <DashSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="user/profile"
            element={
              <ProtectedRoute>
                <DashboardUserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="user/add-property"
            element={
              <ProtectedRoute>
                <DashboardAddProperty />
              </ProtectedRoute>
            }
          />
          <Route
            path="user/properties"
            element={
              <ProtectedRoute>
                <DashboardAllProperty />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </LevelContext.Provider>
    </div>
  );
}

export default App;
