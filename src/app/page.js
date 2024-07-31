import Image from "next/image";
import Header from "./component/Header";
import Horizontal from "./component/Horizontal";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Circle from "./component/Circle";
import Joining from "./component/Joining";

export default function Home() {
  return (
    <div>
      <Header/>
      {/* <Horizontal/> */}
      <Joining/>
      <Slider/>
      <Circle/>
      <Footer/>
    </div>
  );
}
