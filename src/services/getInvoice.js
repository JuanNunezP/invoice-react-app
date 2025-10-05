import { invoice } from "../data/Invoice"

export const getInvoice = () => {

const total = calculateTotal(invoice.items);

    return { ...invoice, total };
}

export const calculateTotal = (items) => {
    return items.reduce((accumulator, item) => {
        const itemTotal = item.price * item.quantity;
        return accumulator + itemTotal;
    }, 0);     

}

