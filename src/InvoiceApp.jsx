import { getInvoice } from "./services/getInvoice";
import { InvoiceDetail } from "./components/InvoiceDetail";
import { InvoiceCustomerData } from "./components/InvoiceCustomerData";
import { InvoiceCompanyData } from "./components/InvoiceCompanyData";
import { InvoiceProducts } from "./components/InvoiceProducts";


export const InvoiceApp = () => {
    const { id, name, client, company, items ,total} = getInvoice();
    const { country, city, street, number } = client.address;

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
                    <InvoiceProducts items={items} total={total}/>

                </div>
            </div>
        </>
    );
};
