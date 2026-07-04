import { useState } from "react"
import { Link } from "react-router-dom"

import useWeb3 from "../hooks/useWeb3"
import Sell from "../pages/Sell"

export default function Dashboard({goSell}) {
    const { account } = useWeb3() || {}
    const [view, setView] = useState('account')

    return (
        <>
            <div className="profile-info">
                <div className="profile-stat">
                    <span className="profile-stat-label">Account</span>
                    <span className="profile-stat-value profile-address">{account}</span>
                </div>
                <div className="profile-stat">
                    <span className="profile-stat-label">Nuicoins</span>
                    <span className="profile-stat-value">0 NUI</span>
                </div>
            </div>

            <div className="profile-assets">
                <div className="profile-assets-header">
                    <h3>Currently Owned Assets</h3>
                    <button className="profile-sell-btn" onClick={goSell}>Sell</button>
                </div>
                <p className="profile-assets-empty">You don't own any assets yet.</p>
            </div>
        </>
    )
}
