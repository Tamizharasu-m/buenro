import Image from "next/image";
import Header from "./component/Header";
import Horizontal from "./component/Horizontal";
import Slider from "./component/Slider";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      {/* <Horizontal/> */}
      <Slider/>
      <Footer/>
    </div>
  );
}
