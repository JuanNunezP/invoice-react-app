import PropTypes from 'prop-types';
export const InvoiceDetail = ({id,name}) => {
    return (
        <>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                    <li>{id}</li>
                    <li>{name}</li>
                </ul>
            </section>

        </>
    )

}

InvoiceDetail.propTypes = {

    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired       

}