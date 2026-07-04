import { useState } from "react"
import { Link } from "react-router-dom"

import LogoBar from "../components/LogoBar"
import Sell from "../pages/Sell"
import Dashboard from "../pages/Dashboard"

export default function Profile() {
    const [view, setView] = useState('account')

    return (
        <>
            <LogoBar />
            <div className="profile-page">
                <Link className="profile-back-link" to="/">← Back to Marketplace</Link>
                {view === 'account' ? <Dashboard goSell={() => setView('sell')}/> : (<Sell goBack={() => setView('account')}/>)}
            </div>
        </>
    )
}
