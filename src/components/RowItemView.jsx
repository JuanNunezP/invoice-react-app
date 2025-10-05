export const RoewItemView = ({ product,price,quantity}) => {

    return (
        <tr key={product} className="hover:bg-slate-50 odd:bg-white even:bg-slate-50/40">
            <td className="px-4 py-3 border-t border-slate-200">{product}</td>
            <td className="px-4 py-3 border-t border-slate-200 text-right tabular-nums">{price}</td>
            <td className="px-4 py-3 border-t border-slate-200 text-right tabular-nums">{quantity}</td>
        </tr>
    )
}