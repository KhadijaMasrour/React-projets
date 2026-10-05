import { useState } from "react";
import Cardemp from "../CardEmp.jsx";



export default function Conetent(){
    
    const [id, setId] = useState("");
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [salaire, setSalaire] = useState("");
    
    const [employees,setEmployees]=useState([
        {id:1 ,prenom:"khadija",nom:"masrour",salaire:20},
        {id:2 ,prenom:"sara",nom:"marina",salaire:2},
        {id:3 ,prenom:"salma",nom:"nami",salaire:18}
    ])


    function ajouter(){
        setEmployees([...employees,{id:id ,prenom:prenom,nom:nom,salaire:salaire}])
        setId(Number(id)+1)
        setNom('')
        setPrenom('')
        setSalaire('')
    }

    function remplire(item){
        setId(item.id)
        setPrenom(item.prenom)
        setNom(item.nom)
        setSalaire(item.salaire)
    }

    function modifier(){
        const updatedEmployes=employees.map((item)=>{
            
            return item.id==id?{...item,id:id ,prenom:prenom,nom:nom,salaire:salaire }:item
            
        })

        setEmployees(updatedEmployes)
        
        setId('')
        setNom('')
        setPrenom('')
        setSalaire('')

    }

    

    function supprimer(){
        const supprimerEmployes=employees.filter((item)=>{
            
            return item.id!=id
            
        })

        setEmployees(supprimerEmployes)
        setId('')
        setNom('')
        setPrenom('')
        setSalaire('')

    }

    return(
        <main className="flex-1 p-8">
            
            <div className="max-x-md mx-auto p-4 border rounded-lg shadow-sm space-y-3">
                <input type="number" onChange={(e)=>setId(e.target.value)} placeholder="ID" value={id}    className="w-full border border-gray-300 rounded px-3 py-2" />
                <input type="text" onChange={(e)=>setPrenom(e.target.value)} placeholder="PRENOM" value={prenom}  className="w-full border border-gray-300 rounded px-3 py-2" />
                <input type="text" onChange={(e)=>setNom(e.target.value)} placeholder="NOM" value={nom} className="w-full border border-gray-300 rounded px-3 py-2" />
                <input type="number" onChange={(e)=>setSalaire(e.target.value)} placeholder="SALAIRE" value={salaire} className="w-full border border-gray-300 rounded px-3 py-2" />
                <button onClick={ajouter} className="w-full bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400">Ajouter</button>
                <button onClick={modifier} className="w-full bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400">modifier</button>
                <button onClick={supprimer} className="w-full bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400">supprimer</button>
            </div>
        
            <h2 className="text-3lx-pink-700 font-bold ">
                Bienvenue 
            </h2>
            <p className="text-fuchsia-200 mb-10 "> 
                Bienvenue dans le systeme
            </p>

            <div className="grid grid-cols-3 gap-5 ">
                
                {
                    employees.map(function(item){
                        return <Cardemp key={item.id} item={item} rem={()=>remplire(item)}  />;
                    })
                }
            </div>
        </main>
    )
}