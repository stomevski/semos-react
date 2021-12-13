import styles from './Coffee.module.css';
import Button from '../Button/Button';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Coffee = () => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [animationClass, setAnimationClass] = useState(false);


    useEffect(() => {

        setAnimationClass(true);

        setTimeout(() => {
            setAnimationClass(false);
        }, 1500);

    }, [image])


    const getRandomPicHandler = async () => {
        setLoading(true);
        try {

            setError('');
            const pic = await axios.get('https://cors-anywhere.herokuapp.com/https://coffee.alexflipnote.dev/random.json');

            setImage(pic.data.file);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }


    }


    return (
        <React.Fragment>
            <div>
                {!error && !loading && !image && <h1 className={styles.text}>Click button for random image</h1>}
                {!error && loading && <h1 className={styles.text}>Loading...</h1>}
                {error && <h1 className={styles.text}>{error}</h1>}
                {image && !loading && !error && <img className={`${styles.img} ${animationClass ? styles.onLoad : ''}`} src={image} alt="Coffe Image" />}
            </div>
            <Button isDisabled={loading} click={getRandomPicHandler} />
        </React.Fragment>
    );

}

export default Coffee;