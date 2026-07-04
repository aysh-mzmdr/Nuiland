import styles from './Card.module.css'

export default function Card({ image, name, description, price }) {

    return (
        <div className={styles.card}>
            <img className={styles.image} src={image} alt={name} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <button className={styles.buyBtn} onClick={() => console.log("Clicked")}>
                {price} NC
            </button>
        </div>
    )
}
