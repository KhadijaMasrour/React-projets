export default function Cardemp({item,rem}){
    return(
        <div onClick={rem} className={`${item.salaire < 10 ? 'bg-red-50' : 'bg-green-50'} p-5 shadow`}>
        
            <h2 className="text-lg-pink-600 font-bold ">
                {item.prenom} {item.nom}
            </h2>

            <p className="mt-2 text-pink-500 }">
                {item.salaire}
            </p>

        </div>
    )
}