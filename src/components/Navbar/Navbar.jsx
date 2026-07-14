import "./Navbar.css";

import logo from "../../assets/hero.png";

import {Link} from "react-scroll";

import {useState,useEffect} from "react";

import {
HiOutlineMenuAlt3
} from "react-icons/hi";

import {
IoClose
} from "react-icons/io5";


function Navbar(){


const [scrolled,setScrolled]=useState(false);

const [open,setOpen]=useState(false);



useEffect(()=>{


function handleScroll(){

if(window.scrollY > 80){

setScrolled(true);

}else{

setScrolled(false);

}

}


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
)

}


},[]);



return(

<header className={
scrolled 
? "navbar scrolled"
: "navbar"
}>


<div className="nav-container">


<div className="logo">

<img src={logo}/>

</div>



<nav className={
open 
?"menu open"
:"menu"
}>


<Link 
to="hero"
smooth
duration={600}
onClick={()=>setOpen(false)}
>
Início
</Link>


<Link 
to="about"
smooth
duration={600}
onClick={()=>setOpen(false)}
>
Sobre Nós
</Link>



<Link 
to="services"
smooth
duration={600}
onClick={()=>setOpen(false)}
>
Serviços
</Link>



<Link 
to="clients"
smooth
duration={600}
onClick={()=>setOpen(false)}
>
Clientes
</Link>



<Link 
to="equipment"
smooth
duration={600}
onClick={()=>setOpen(false)}
>
Equipamentos
</Link>



<Link 
to="team"
smooth
duration={600}
onClick={()=>setOpen(false)}
>
Equipa
</Link>



<Link 
to="contact"
smooth
duration={600}
onClick={()=>setOpen(false)}
>
Contacto
</Link>


</nav>



<button
className="mobile-btn"
onClick={()=>setOpen(!open)}
>

{
open
?
<IoClose/>
:
<HiOutlineMenuAlt3/>
}

</button>



</div>


</header>

)

}


export default Navbar;