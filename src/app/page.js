import Image from "next/image";
import Header from "./component/Header";
import Horizontal from "./component/Horizontal";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Circle from "./component/Circle";
import Joining from "./component/Joining";
import Connect from "./component/Connect";
import Map from "./component/Map";
import Event from "./component/Event";

export default function Home() {
  return (
    <div>
      <Header/>
      <Map/>
      {/* <Horizontal/> */}
      <Connect/>
      <Joining/>
      <Event/>
      <Slider/>
      <Circle/>
      <Footer/>
    </div>
  );
}
