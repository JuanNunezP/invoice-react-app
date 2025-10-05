export const RoewItemView = ({id, product,price,quantity,handlerDeleteItem}) => {

    return (
        <tr key={product} className="hover:bg-slate-50 odd:bg-white even:bg-slate-50/40">
            <td className="px-4 py-3 border-t border-slate-200">{product}</td>
            <td className="px-4 py-3 border-t border-slate-200 text-right tabular-nums">{price}</td>
            <td className="px-4 py-3 border-t border-slate-200 text-right tabular-nums">{quantity}</td>
            <td className="px-4 py-3 border-t border-slate-200 text-right tabular-nums">
                <button  
                    className="w-full bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-700 transition-colors" onClick={()=>handlerDeleteItem(id)}>eliminar</button></td>
        </tr>
    )
}