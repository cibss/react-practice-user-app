import styles from './Card.module.css';

const Card = (props) => {
    return <div className={`${styles.card} ${props.className}`}>{props.children}</div>
    // If we need to use this Card component in more than 1 component
    // We still can use one ${props.className} to pass the className
    // We don't need to create a new props name
}

export default Card;