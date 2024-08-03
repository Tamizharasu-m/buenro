import Image from "next/image";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Section3 from "./component/Section3";
import Section2 from "./component/Section2";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Section7 from "./component/Section7";
import Section9 from "./component/Section9";
import Section8 from "./component/Section8";
import Section11 from "./component/Section11";
import Section1 from "./component/Section1";
import Section10 from "./component/Section10";
import Section12 from "./component/Section12";

export default function Home() {
  return (
    <div>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Section11/>
      {/* <Section12/> */}
      <Footer/>
    </div>
  );
}
