import { useState } from "react";

export const InvoiceForm = ({ handler })  => {


    const [invoiceItemsState, setInvoiceItemsState] = useState({

        product: '',
        price: 0,
        quantity: '',
    });
    const { product, price, quantity } = invoiceItemsState;


    const onInputChange = ({ target: { name, value } }) => {

        setInvoiceItemsState({


            ...invoiceItemsState,
            [name]: value
        })
    }

    const onInvoiceItemSubmit = (event) => {
        event.preventDefault();
        if (product.trim().length === 0) return;
        if (price.trim().length < 1 || isNaN(price)) return alert('Price must be a number greater than zero');
        if (quantity.trim().length < 1 || isNaN(quantity)) return alert('Quantity must be a number greater than zero');


     handler(invoiceItemsState);
        setInvoiceItemsState({
            product: '',
            price: 0,
            quantity: '',
        })


    }
    return (
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">Add Product</h3>
            <form className="space-y-4" onSubmit={onInvoiceItemSubmit}>
                <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Product</label>
                    <input
                        type="text"
                        name="product"
                        value={product}
                        placeholder="Enter product name"
                        className="w-full rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={onInputChange}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Price</label>
                    <input
                        type="text"
                        name="price"
                        placeholder="Enter price"
                        value={price}
                        className="w-full rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={event => {
                            onInputChange(event);
                        }}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Quantity</label>
                    <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter quantity"
                        className="w-full rounded-lg border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={
                            onInputChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Save
                </button>
            </form>
        </section>
    )
}