import { useState, useEffect } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { InvoiceDetail } from "./components/InvoiceDetail";
import { InvoiceCustomerData } from "./components/InvoiceCustomerData";
import { InvoiceCompanyData } from "./components/InvoiceCompanyData";
import { InvoiceProducts } from "./components/InvoiceProducts";
import { InvoiceForm } from "./components/invoiceForm";


const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
}; // Estado inicial vacio
export const InvoiceApp = () => {


    const[activeForm, setActiveForm] = useState(true);
    // const toggleForm = () => setActiveForm(!activeForm);
    const [total, setTotal] = useState(0);
    const [invoice, setInvoice] = useState(invoiceInitial);  // Primero
    const { id, name, client, company } = invoice;    // Desp
    const [counter, setCounter] = useState(4);
    //     setCounter(counter + 1);


    const [items, setItems] = useState([]);
    const { country, city, street, number } = client.address;

 
    const handlerInvoiceItems = ( {product,price,quantity}) => {
        setItems([...items, { id: counter, product: product, price: price, quantity: quantity }]);
        setCounter(counter + 1);
    };


    const handlerDeleteItem = (id) => {
   
        setItems(items.filter(item => item.id !== id));
    }


    useEffect(() => {
        const data = getInvoice();
          
      
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);


    const onActiveForm = () => {    
        setActiveForm(!activeForm);
    }

    return (
        <>


            <div className="min-h-screen bg-slate-10 py-8">
                <div className="max-w-5xl mx-auto px-4 space-y-6 text-slate-800">

                    <section className="rounded-xl border border-slate-200 bg-white shadow-sm py-4">
                        <h1 className="text-3xl font-bold text-black-700 underline decoration-2 underline-offset-4 text-center my-1">
                            Invoice Example
                        </h1>
                    </section>
                    {/* Meta */}
                    <InvoiceDetail id={id} name={name} />

                    {/* Cliente / Empresa */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InvoiceCustomerData client={client} country={country} city={city} street={street} number={number} />
                        <InvoiceCompanyData company={company} />
                    </div>

                    {/* Productos */}
                    <InvoiceProducts items={items} total={total} handlerDeleteItem={id=>handlerDeleteItem(id)} />
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => onActiveForm(!activeForm)}>
                        {!activeForm?'Close Form':'Add Item'}
                    </button>
                    {/* Formulario */}
                    { !activeForm ||  <InvoiceForm handler={handlerInvoiceItems} />}
                

                </div>
            </div>
        </>
    );
};
