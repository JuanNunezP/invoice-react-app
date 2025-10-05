import PropTypes from 'prop-types';
export const InvoiceCustomerData = ({ client }) => {
    const { country, city, street, number } = client.address;

    
    return (
        <>
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                            <h3 className="text-lg font-semibold mb-3">Customer Data</h3>
                            <ul className="list-disc list-inside space-y-1 leading-relaxed">
                                <li>{client.name} {client.lastName}</li>
                                <li>{country}</li>
                                <li>{city}</li>
                                <li>{street}</li>
                                <li>{number}</li>
                            </ul>
                        </section>
   </>  )

}

InvoiceCustomerData.propTypes = {

    client: PropTypes.object.isRequired

}