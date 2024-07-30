import Image from "next/image";
import Header from "./component/Header";
import Horizontal from "./component/Horizontal";
import Slider from "./component/Slider";

export default function Home() {
  return (
    <div>
      <Header/>
      {/* <Horizontal/> */}
      <Slider/>
    </div>
  );
}
