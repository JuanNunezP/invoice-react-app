import { invoice } from "../data/Invoice"

export const getInvoice = () => {

const total = invoice.items.reduce((accumulator, item) => {
    const itemTotal = item.price * item.quantity;
    return accumulator + itemTotal;
}, 0);

    return { ...invoice, total };
}