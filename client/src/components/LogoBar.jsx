import { useEffect, useRef, useState } from 'react'

import useWeb3 from '../hooks/useWeb3'

const LogoBar = () => {
    const {web3,account,connect,disconnect,connecting,error} = useWeb3() || {}

    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target))             // e.target is the element clicked, preferably outside the menu
                setMenuOpen(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const truncatedAccount = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : null

    const handleDisconnect = () => {
        disconnect()
        setMenuOpen(false)
    }

    return (
        <div className="logo-bar-wrapper">
            <div className="logo-bar">
                <div className="logo-bar-logo">Nuiland</div>

                <div className="logo-bar-wallet">
                    {(error || !web3) && <span className="logo-bar-error">{error?.message ?? "Web3 Unavailable"}</span>}
                    {account ? (
                        <>
                            <span className="logo-bar-status-dot" />
                            <span className="logo-bar-address">{truncatedAccount}</span>
                            <div className="logo-bar-avatar-wrapper" ref={menuRef}>
                                <div className="logo-bar-avatar" onClick={() => setMenuOpen((open) => !open)} />
                                {menuOpen && (
                                    <div className="logo-bar-menu">
                                        <button className="logo-bar-menu-disconnect" onClick={handleDisconnect}>
                                            Disconnect
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <button className="logo-bar-connect-btn" onClick={connect} disabled={connecting}>
                            {connecting && <span className="logo-bar-spinner" />}
                            {connecting ? 'Connecting...' : 'Connect Wallet'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LogoBar
