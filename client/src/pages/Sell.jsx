import { useState } from "react"

export default function Sell({goBack}) {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [cost, setCost] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ image, name, description, cost })
        // handleSubmit
    }

    return (
        <form className="sell-form" onSubmit={handleSubmit}>
            <button type="button" className="sell-back-link" onClick={goBack}>← Back to Profile</button>

            <h3 className="sell-title">List a Product</h3>

            <label className="sell-label" htmlFor="sell-image">Image URL</label>
            <input
                id="sell-image"
                className="sell-input"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                required
            />

            <label className="sell-label" htmlFor="sell-name">Product Name</label>
            <input
                id="sell-name"
                className="sell-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label className="sell-label" htmlFor="sell-description">Description</label>
            <textarea
                id="sell-description"
                className="sell-textarea"
                rows={2}
                maxLength={100}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <span className="sell-char-count">{description.length}/100</span>

            <label className="sell-label" htmlFor="sell-cost">Cost (Nuicoins)</label>
            <input
                id="sell-cost"
                className="sell-input"
                type="number"
                min="0"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
            />

            <button type="submit" className="sell-submit-btn">List for Sale</button>
        </form>
    )
}
