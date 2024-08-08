import React from 'react';
import Join from './component/Join/Join';
import Buenro from './component/Buenro/Buenro';
import Connect from './component/Connect/Connect';
import Create from './component/Create/Create';
import Carlos from './component/Carlos/Carlos';
import Circle from './component/Circle/Circle';
import Trusted from './component/Trusted/Trusted';
import Slider from './component/Slider/Slider';
import Globally from './component/Globally/Globally';
import Events from './component/Events/Events';





export default function Homelayout() {
  return (
    <div>
        <Join/>
        <Buenro/>
        <Connect/>
        {/* <Create/> */}
        <Carlos/>
        <Circle/>
        <Trusted/>
        <Slider/>
        <Globally/>
        <Events/>
    </div>
  )
}
