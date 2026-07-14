import Particles from "@tsparticles/react";

import { loadFull } from "tsparticles";

function ParticlesBackground(){

const particlesInit = async(main)=>{

await loadFull(main);

};

return(

<Particles

init={particlesInit}

options={{

fullScreen:false,

particles:{

number:{

value:90

},

color:{

value:"#ffffff"

},

links:{

enable:true,

distance:150,

opacity:.2,

color:"#ffffff"

},

move:{

enable:true,

speed:1

},

size:{

value:2

}

}

}}

/>

);

}

export default ParticlesBackground;