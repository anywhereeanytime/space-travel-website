import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import Header from "./Header";
import bgImagePhoneScreen from "./assets/home/background-home-mobile.jpg";
import bgImageTabletScreen from "./assets/home/background-home-tablet.jpg";
import bgImageDesktopScreen from "./assets/home/background-home-desktop.jpg";

function App() {
  return (
    <>
      <div className="relative min-h-screen sm:flex sm:flex-col sm:justify-between ">
        {/* Background Image for Phone Screens */}
        <div
          className="block sm:hidden absolute inset-0  bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: `url(${bgImagePhoneScreen})` }}
        ></div>

        {/* Background Image for Tablet Screens */}
        <div
          className="hidden sm:block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: `url(${bgImageTabletScreen})` }}
        ></div>

        {/* Background Image for Desktop Screens */}
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: `url(${bgImageDesktopScreen})` }}
        ></div>

        <Header />
        <div className="flex flex-col justify-center m-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
