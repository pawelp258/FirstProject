import React from 'react'
import styles from './politics.module.css'
import IconBack from '../../UI/icons/icon-back-black.svg'
import { Link } from 'react-router-dom'

const AboutUs = () => {

    return (
        <div className={styles.PoliticsContainer}>
            <Link to="/">
                <img
                    src={IconBack}
                    alt="back icon"
                    className={styles.PoliticsBackIcon}
                />
            </Link>
            <h1>O nas</h1>
            <div className={styles.PoliticsContainerContent}>
                <h3>Drogi użytkowniu!</h3>
                <p>Bardzo nam miło, że nasza aplikacja zwróciła twoją uwagę.<br />
                Jesteśmy studentami tworzącymi wspólnie młody zespół programistyczny, a naszym celem jest zrzeszanie ludzi do wspólnego uprawiania sportu.</p>
                <h3>Nasza misja</h3>

                <p>Sportim powstało, aby ułatwić, nie tylko sportowcom, ale też amatorom, znalezienie partnerów do gier zespołowych. Dzięki naszej aplikacji, możecie poznać wielu nowych ludzi, z tym samym zapałem do waszej ulubionej dziedziny sportu. Jak wiadomo sport to zdrowie, a dzielenie przy tym wspólnej pasji to najlepsze urozmaicenie.</p>
            </div>
        </div>
    )
}

export default AboutUs;