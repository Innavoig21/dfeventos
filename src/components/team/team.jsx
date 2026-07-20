import "./Team.css";


import {motion} from "framer-motion";


import team1 from "../../assets/pessoa.jpg";
import team2 from "../../assets/pessoa.jpg";
import team3 from "../../assets/pessoa.jpg";
import team4 from "../../assets/pessoa.jpg";



const team = [


{
image:team1,
name:"Nome do Profissional",
role:"Diretor Geral"
},


{
image:team2,
name:"Nome do Profissional",
role:"Produtor Audiovisual"
},


{
image:team3,
name:"Nome do Profissional",
role:"Técnico de Streaming"
},


{
image:team4,
name:"Nome do Profissional",
role:"Designer / Editor"
}


];




function Team(){


return(


<section

id="team"

className="team"


>


<div className="team-title">


<span>

NOSSA EQUIPA

</span>


<h2>

Profissionais apaixonados pelo que fazem

</h2>



<p>

Uma equipa multidisciplinar preparada para
transformar ideias em experiências memoráveis.

</p>


</div>





<div className="team-grid">


{

team.map((person,index)=>(


<motion.div


className="team-card"


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



<div className="team-image">


<img

src={person.image}

alt={person.name}

/>


</div>




<div className="team-info">


<h3>

{person.name}

</h3>



<p>

{person.role}

</p>



<div className="social">


<span>

in

</span>


<span>

f

</span>


<span>

ig

</span>


</div>


</div>



</motion.div>



))


}



</div>



</section>



)

}



export default Team;