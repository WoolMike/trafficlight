import React,{useState} from "react";




const Semaforo = () => {
	const[color, setColor]= useState("red")

	return<>
		<div className='soporte'></div>

			<div className="cuerpo">
			<div className=
				{`luz red ${color =="red" ? "glow" : ""}`}
				onClick={()=>setColor("red")}>
			</div>
			<div className=
				{`luz yellow ${color =="yellow" ? "glow" : ""}`}
			onClick={()=>setColor("yellow")}>
				</div>
			<div className=
				{`luz green ${color =="green" ? "glow" : ""}`}
				onClick={()=>setColor("green")}>
			</div>
		</div>
	</> 
		
			
		
	
}

export default Semaforo;
