

export default function TableStg({ item , rem }) {
    const decision = item.note >= 10 ? "Admis" : "Redoublant";

    return (
        <tr onClick={()=>rem()} className="border-b border-slate-200 hover:bg-slate-300">
            <td className="px-6 py-4 text-center">{item.id}</td>
            <td className="px-6 py-4 text-center">{item.nom}</td>
            <td className="px-6 py-4 text-center">{item.prenom}</td>
            <td className="px-6 py-4 text-center">{item.note}</td>
            <td className="px-6 py-4 text-center">
                <span
                    className={`px-3 py-1 rounded-full font-medium ${
                        item.note >= 10
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {decision}
                </span>
            </td>
            
        </tr>
    );
}