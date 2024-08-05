import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import imagePath from "./assets/your_image_icon.png";
import NavBar from './navbar';

function App() {
  let items = ["More Information","Scheduling"];
  return (
    <><div>
      <NavBar
        brandName="Lessons Scheduling"
        //imageSrcPath={imagePath}
        brandDescription=' Scheduling private swim lessons for patrons at the Morris Plains Pool.'
        navItems={items} />
        </div></>
  );

}
export default App;