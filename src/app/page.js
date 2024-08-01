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

export default function Home() {
  return (
    <div>
      <Header/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Footer/>
    </div>
  );
}
