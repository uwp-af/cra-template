import { Link, Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div
            id='layout'
            style={{
                display: 'grid', // Sets up a basic css grid for
                grid: '1fr / auto-flow 3fr 7fr',
                minWidth: '100vw',
                minHeight: '100vh'
            }}
        >
            <nav
                style={{
                    borderRight: "2px solid",
                    padding: "20px"
                }}
            >
                <h1>Layout Nav</h1>
                <p>
                    This is the nav area for your app. You can edit this through the <code>src/routes/Layout/Layout.js</code> route component.
                </p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user">Dashboard</Link></li>
                </ul>
            </nav>
            <main
                style={{
                    padding: "20px"
                }}
            >
                <Outlet />
            </main>
        </div>
    )
}