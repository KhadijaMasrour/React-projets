import { useState } from "react"


export default function Formetd() {
    const [nom,setnom]=useState[""];
    function sayMama(vnom){
        setnom(vnom);
    }
    return (
        <div className="rounded-xl bg-white p-5 shadow">
            <button onClick={()=>sayMama("Mama")}
            ></button>
            {nom}
        </div>
    )
}