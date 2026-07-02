import useWeb3 from '../contexts/Web3Context'

const LogoBar = () => {
    const {web3,account,connect,disconnect,connecting,error} = useWeb3() || {}

    const truncatedAccount = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : null

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
                            <div className="logo-bar-avatar" />
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
