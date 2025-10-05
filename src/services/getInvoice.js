import { invoice } from "../data/Invoice"

export const getInvoice = () => {

    // let total=0;
    // invoice.items.forEach(item => { 
    //     total = total + item.price * item.quantity

    // })
const total = invoice.items.reduce((accumulator, item) => {
    const itemTotal = item.price * item.quantity;
    return accumulator + itemTotal;
}, 0);

    return { ...invoice, total };
}