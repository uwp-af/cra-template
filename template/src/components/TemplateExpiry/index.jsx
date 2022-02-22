
export default function TemplateExpiry({ createDate, expiryMonths, ...props }) {
    let expireDate = new Date(createDate)
    expireDate.setMonth(expireDate.getMonth() + expiryMonths)
    let currentDate = new Date()
    let expired = currentDate > expireDate
    
    /** 
     * Get age in months (approximate, not fractional) of a date.
     */
    let monthsAge = (date) => {
        let curr = new Date()
        return ((curr.getFullYear() - date.getFullYear()) * 12) + curr.getMonth() - date.getMonth()
    }

    return (
        <div
            style={{
                width: "0%",
                minWidth: "550px",
                display: "grid",
                grid: "auto-flow/ 1fr 1fr",
                columnGap: "20px",
                alignItems: "center",
                border: "1px solid black",
                padding: "10px"
            }}
        >
            <DateDisplay date={createDate}>Template created on:</DateDisplay>
            <DateDisplay date={expireDate}>Best if used by:</DateDisplay>
            <DateDisplay date={currentDate} dateStyle={{ color: expired ? "red" : undefined }}>Current date:</DateDisplay>
            <p><span style={{color: expired ? "red" : undefined, backgroundColor: expired ? "#ffdddd" : "#dedede", padding: "1px 4px", borderRadius: "5px", border: "1px solid #787878"}}>{monthsAge(createDate)}</span> months since creation</p>
            {expired && <p style={{gridColumn: "1 / 3", fontSize: "18pt", fontWeight: "bold", color: "red" }}>
                This template is expired. Should be checked and updated by someone who knows their stuff before use. Consider this your check oil/engine light if you ignore it you've been warned.
            </p>}
        </div>
    )
}

function DateDisplay({ date, dateStyle, ...props }) {
    let dateFormatter = new Intl.DateTimeFormat("en", { day: "2-digit", month: "2-digit", year: "numeric" })

    return (
        <div>
            <p>{props.children}</p>
            <p style={{ ...dateStyle, textAlign: "center" }}>{dateFormatter.format(date)}</p>
        </div>
    )
}