import { RoewItemView } from "./RowItemView";
import { InvoiceTotal } from "./InvoiceTotal";

export const InvoiceProducts = ({ items, total, handlerDeleteItem }) => {
    return (
        <>
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="text-base font-semibold mb-3">Invoiced Products</h4>

                <div className="overflow-x-auto">
                    <table className="w-full table-auto text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="px-4 py-2 text-left font-semibold text-slate-600">Product</th>
                                <th className="px-4 py-2 text-right font-semibold text-slate-600">Price</th>
                                <th className="px-4 py-2 text-right font-semibold text-slate-600">Quantity</th>
                                <th className="px-4 py-2 text-right font-semibold text-slate-600">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(({ id, product, price, quantity }) => (
                                <RoewItemView
                                    key={product}  // ← Usa id aquí también, no product
                                    id={id}
                                    product={product}
                                    price={price}
                                    quantity={quantity}
                                    handlerDeleteItem={handlerDeleteItem}  // ← Sin arrow function extra
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <InvoiceTotal total={total} />
            </section>
        </>
    )
}