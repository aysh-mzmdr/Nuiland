import { useState } from "react"

import LogoBar from "../components/LogoBar"
import Marketplace from "../pages/Marketplace"
import Game from "../pages/Game"

export default function Home(){

    const [activeTab, setActiveTab] = useState('marketplace')

    return(
        <>
            <LogoBar/>
            <div className="home-tabs">
                <button
                    className={`home-tab-btn ${activeTab === 'marketplace' ? 'active' : ''}`}
                    onClick={() => setActiveTab('marketplace')}
                >
                    Marketplace
                </button>
                <button
                    className={`home-tab-btn ${activeTab === 'games' ? 'active' : ''}`}
                    onClick={() => setActiveTab('games')}
                >
                    Games
                </button>
            </div>
            {activeTab === 'marketplace' ? <Marketplace/> : <Game/>}
        </>
    )
}
