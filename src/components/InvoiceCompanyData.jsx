export const InvoiceCompanyData = ({ company }) => {

    return (
        <>
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-white-800 mb-3">Company Data</h3>
                <ul className="list-disc list-inside space-y-1 leading-relaxed text-white-900/90">
                    <li>{company.name}</li>
                    <li>{company.fiscalNumber}</li>
                </ul>
            </section>
        </>
    );
}