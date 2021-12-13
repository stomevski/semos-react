import styles from './Button.module.css';


const Button = (props) => {

    return (
        <div className={styles.container}>
            <button disabled={props.isDisabled} onClick={props.click} className={styles.btn}>Get Random Coffee</button>
        </div>
    );


}


export default Button;