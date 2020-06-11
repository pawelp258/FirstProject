import React from 'react'
import styles from './politics.module.css'
import IconBack from '../../UI/icons/icon-back-black.svg'
import { Link } from 'react-router-dom'

const Politics = () => {

    return (
        <div className={styles.PoliticsContainer}>
            <Link to="/">
                <img
                    src={IconBack}
                    alt="back icon"
                    className={styles.PoliticsBackIcon}
                />
            </Link>
            <h1>Polityka prywatności – Aplikacja “Sportim”</h1>
            <div className={styles.PoliticsContainerContent}>
                <p>1.  Niniejszy dokument opisuje politykę prywatności aplikacji „Sportim” zwanej dalej Aplikacją.</p>
                <p>2. Aplikacja występuje w wersji mobilnej oraz webowej. Mobilna wersja instalowana jest w szczególności na telefonach komórkowych i        tabletach, po uprzednim pobraniu przez użytkownika za pośrednictwem sklepu Play (Android), czy sklepu Itunes (iOS).</p>
                <p>3. Korzystanie z aplikacji wymaga podania podstawowych danych osobowych, takich jak login, e-mail, płeć, wiek. Dane te nie podlegają profilowaniu. Dokładamy wszelkich starań, aby jak najlepiej chronić Twoje dane osobowe, którymi administrujemy. Zależy nam aby  stosowane przez nas środki ochrony były skuteczne i dawały gwarancję poufności, integralności i dostępności przetwarzanych danych.</p>
                <p>4. Każdemu użytkownikowi, który wypełnił formularz rejestracyjny czy w inny sposób udostępnił nam swoje dane osobowe zapewniamy dostęp do dotyczących go danych w celu ich weryfikacji, modyfikacji lub też usunięcia. Podawanie danych osobowych jest dobrowolne.</p>
                <p>5. Przetwarzanie Państwa danych osobowych następuje zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (Ogólne Rozporządzenie o Ochronie Danych), tzw „RODO”.</p>
                <p>6. Usługi geolokalizacji wykorzystywane przez Aplikację służą do określania położenia Użytkownika w celu dostarczenia mu najbardziej dopasowanych informacji. Aplikacja informuje Użytkownika o fakcie zbierania danych geolokalizacyjnych. Pozyskane dane są wykorzystywane w celu zaprezentowania informacji dopasowanych do lokalizacji, w jakiej obecnie znajduje się Użytkownik.</p>
                <p>7. Aplikacja korzysta z podkładów mapowych dostarczanych przez Google Maps API. Polityka prywatności Google inc.</p>
                <p>8. W przypadku braku akceptacji na zasady Polityki Prywatności prosimy nie korzystanie z Aplikacji, lub usunięcie konta użytkownika.</p>
                <p>9. Jesteśmy do Państwa dyspozycji. Jeżeli mają Państwo jakiekolwiek pytania w zakresie ochrony Państwa danych osobowych lub też którykolwiek z zapisów niniejszego dokumentu nie jest dla Państwa zrozumiały, mogą Państwo zwrócić się do nas z zapytaniem na skrzynkę kontaktową pod adresem: sportim@gmail.pl Zwrócenie się do nas z zapytaniem, o którym mowa w zdaniu poprzedzającym oznacza, że wyrażają Państwo zgodę na przetwarzanie podanych przez Państwa danych osobowych w postaci podanego przez Państwa adresu e-mailowego, na który odeślemy odpowiedź.</p>
            </div>
        </div>
    )
}

export default Politics;