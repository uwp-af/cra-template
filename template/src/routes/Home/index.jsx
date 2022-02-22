import { Link } from "react-router-dom";
import TemplateExpiry from "components/TemplateExpiry";

export default function Home() {
    document.title = "Home"

    return (
        <>
            <h1>Home</h1>
            <p>This is our homepage, go <Link to="/login">here</Link> to login</p>
            <TemplateExpiry createDate={new Date('Feb 20 2022')} expiryMonths={6} />
        </>
    )
}