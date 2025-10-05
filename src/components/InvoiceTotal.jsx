export const InvoiceTotal = ({ total }) => {
    return (
        <>
            <div className="text-end my-2 py-2">
            
                <span className="inline-flex items-center  bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-medium">
                    Total: ${total}
                </span>

            </div>
        </>
    )

}