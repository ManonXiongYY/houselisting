import React from "react";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import MainLogoSection from "./components/MainLogoSection/MainLogoSection";
import HouseListing from "./components/HouseListing/HouseListing";

const App = () => {
  return (
    <div>
      <NavigationHeader />
      <MainLogoSection />
      <HouseListing />
      <div
        className="footer"
        style={{
          height: '50px',
          width: '100%',
          backgroundColor: '#002349'
        }}
      />
    </div>
  );
}

export default App;
