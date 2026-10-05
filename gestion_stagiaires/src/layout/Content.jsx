import { useState } from "react";
import TableStg from "../TableStg.jsx";

export default function Content() {

    const [id, setId] = useState("");
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [note, setNote] = useState("");

    const [stagiaires, setStg] = useState([
        { id: 1, nom: "Johnson", prenom: "Ethan", note: 18 },
        { id: 2, nom: "Williams", prenom: "Olivia", note: 14 },
        { id: 3, nom: "Brown", prenom: "Noah", note: 9 },
        { id: 4, nom: "Davis", prenom: "Emma", note: 16 },
        { id: 5, nom: "Miller", prenom: "Liam", note: 12 },
        { id: 6, nom: "Wilson", prenom: "Ava", note: 7 },
        { id: 7, nom: "Moore", prenom: "Lucas", note: 19 },
        { id: 8, nom: "Taylor", prenom: "Sophia", note: 11 },
        { id: 9, nom: "Anderson", prenom: "Mason", note: 8 },
        { id: 10, nom: "Thomas", prenom: "Mia", note: 15 }
    ]);

    function ajouter(){
        setStg([...stagiaires,{id:id ,prenom:prenom,nom:nom,note:note}])
        setId(Number(id)+1)
        setNom('')
        setPrenom('')
        setNote('')
    }

    function remplire(item){
        setId(item.id)
        setPrenom(item.prenom)
        setNom(item.nom)
        setNote(item.note)
    }

    function modifier(){
        const updatedstg=stagiaires.map((item)=>{
            
            return item.id==id?{...item,id:id ,prenom:prenom,nom:nom,note:note }:item
            
        })

        setStg(updatedstg)
        
        setId('')
        setNom('')
        setPrenom('')
        setNote('')

    }

    

    function supprimer(){
        const supprimerStg=stagiaires.filter((item)=>{
            
            return item.id!=id
            
        })

        setStg(supprimerStg)
        setId('')
        setNom('')
        setPrenom('')
        setNote('')

    }

    return (
        <main className="flex-1 p-8">

            <h1 className="text-slate-900 text-3xl mb-10 text-center font-bold">
                Les notes des stagiaires
            </h1>

            <div className="max-x-md mx-auto p-4 border rounded-lg shadow-sm space-y-3 mb-20">
                <input type="number" onChange={(e)=>setId(e.target.value)} placeholder="ID" value={id}    className="w-full border border-gray-300 rounded px-3 py-2" />
                <input type="text" onChange={(e)=>setPrenom(e.target.value)} placeholder="PRENOM" value={prenom}  className="w-full border border-gray-300 rounded px-3 py-2" />
                <input type="text" onChange={(e)=>setNom(e.target.value)} placeholder="NOM" value={nom} className="w-full border border-gray-300 rounded px-3 py-2" />
                <input type="number" onChange={(e)=>setNote(e.target.value)} placeholder="NOTE" value={note} className="w-full border border-gray-300 rounded px-3 py-2" />
                <button onClick={ajouter} className="w-full bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-900">Ajouter</button>
                <button onClick={modifier} className="w-full bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-900">modifier</button>
                <button onClick={supprimer} className="w-full bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-900">supprimer</button>
            </div>

            <table className="w-full max-w-4xl mx-auto table-fixed border-collapse bg-white shadow-xl rounded-xl overflow-hidden">

                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-6 py-4 text-center">ID</th>
                        <th className="px-6 py-4 text-center">Nom</th>
                        <th className="px-6 py-4 text-center">Prénom</th>
                        <th className="px-6 py-4 text-center">Note</th>
                        <th className="px-6 py-4 text-center">Mention</th>
                    </tr>
                </thead>

                <tbody>
                    {stagiaires.map((item) => (
                        <TableStg
                            key={item.id}
                            item={item}
                            rem={()=>remplire(item)}
                        />
                    ))}
                </tbody>

            </table>
        </main>
    );
}