import styles from './Header.module.css';
import coffee from '../../assets/cupOfCoffee.png';

const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.text}>Coffee API</h1>
            <img className={styles.pic} src={coffee} alt="cup of coffee" />
        </header>
    );

}

export default Header;