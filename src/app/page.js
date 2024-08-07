import Image from "next/image";


import Homelayout from "./Homelayout";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";



export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Homelayout/>
      <Footer/>
    </div>
  );
}
