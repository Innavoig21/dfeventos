import "./Equipment.css";


import {motion} from "framer-motion";


import camera from "../../assets/ptz.jpg";
import audio from "../../assets/coluna.jpg";
import lighting from "../../assets/led.jpg";
import streaming from "../../assets/mesa.jpg";
import led from "../../assets/palco.jpg";
import structure from "../../assets/palco.jpg";



const equipment = [


{

image:camera,

title:"Câmeras Profissionais",

description:
"Câmeras de alta resolução para produção audiovisual e cobertura de eventos."

},


{

image:audio,

title:"Sistema de Áudio",

description:
"Equipamentos profissionais de som para eventos corporativos e sociais."

},


{

image:lighting,

title:"Iluminação Profissional",

description:
"Soluções de iluminação para criar ambientes impactantes."

},


{

image:streaming,

title:"Equipamentos de Streaming",

description:
"Estruturas completas para transmissões ao vivo profissionais."

},


{

image:led,

title:"Painéis LED",

description:
"Tecnologia LED de alta definição para apresentações e eventos."

},


{

image:structure,

title:"Estruturas e Palcos",

description:
"Montagem técnica de estruturas adaptadas para cada evento."

}


];





function Equipment(){


return(


<section

id="equipment"

className="equipment"


>



<div className="equipment-title">


<span>

NOSSOS EQUIPAMENTOS

</span>



<h2>

Tecnologia preparada para grandes experiências

</h2>



<p>

Dispomos de equipamentos modernos e soluções
técnicas para garantir qualidade em cada produção.

</p>



</div>





<div className="equipment-grid">


{

equipment.map((item,index)=>(


<motion.div


className="equipment-card"


key={index}



initial={{

opacity:0,

y:50

}}



whileInView={{

opacity:1,

y:0

}}



transition={{

duration:.5,

delay:index*.15

}}



viewport={{

once:true

}}



>



<div className="equipment-image">


<img

src={item.image}

alt={item.title}

/>



<div className="equipment-overlay">


<h3>

{item.title}

</h3>



<p>

{item.description}

</p>



</div>


</div>


</motion.div>



))


}



</div>



</section>



)

}



export default Equipment;