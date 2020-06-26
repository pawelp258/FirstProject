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
            <h1>Klauzula informacyjna o przetwarzaniu danych osobowych</h1>
            <div className={styles.PoliticsContainerContent}>
                <p style={{ textIndent: "20px" }}>Zgodnie z art. 13 ust. 1 i ust. 2 rozporządzenia Parlamentu Europejskiego i Rady (UE)
                2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
                przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz
                uchylenia dyrektywy 95/46/WE ( dalej: RODO), informujemy, iż:</p>
                <p><b>Administrator danych osobowych:</b></p>
                <p style={{ textIndent: "20px" }}>Administratorem Pani/Pana danych osobowych jest <b>SPORTIM sp. z o.o.</b> z siedzibą w
                Toruniu przy ul. Kopernika 11.
                Kontakt z Administratorem możliwy jest pod adresem e-mail: kontakt@sportim.pl a także pod
                numerem telefonu XXX-XXX-XXX.</p>
                <p><u>Współadministratorem Pani/Pana danych osobowych mogą być:</u></p>
                <p style={{ display: "flex" }}><div>(1)</div><div style={{ marginLeft: "5px" }}> administratorzy / zarządcy obiektów sportowych zamieszczonych w bazie Aplikacji –
                jeśli użytkownik dokona z użyciem Aplikacji rezerwacji lub zgłoszenia wydarzenia
                takiemu podmiotowi; dane dotyczące tego podmiotu będą każdorazowo
                uwidocznione przy nawiązywaniu kontaktu z administratorem / zarządcą wybranego
                obiektu sportowego;</div></p>
                <p style={{ display: "flex" }}><div>(2)</div><div style={{ marginLeft: "5px" }}> zakład ubezpieczeń [NAZWA] z siedzibą w [MIEJSCOWOŚĆ] [ADRES] – o ile użytkownik
                skorzysta ze świadczonej na odległość usługi finansowej – umowy ubezpieczenia
                sportowego (od następstw nieszczęśliwych wypadków).
                </div></p>
                <p><b>Cel i podstawy przetwarzania danych osobowych:</b></p>
                <p style={{ textIndent: "20px" }}>Przetwarzanie Pani/Pana danych osobowych będzie się odbywać na podstawie art. 6 ust.
                1 pkt b), d) i f) RODO, w celu wykonania wykonywania umów łączących Pana/Panią z
                Administratorem, w tym w szczególności świadczonej drogą elektroniczną usługi dostępu i
                wykorzystania funkcjonalności Aplikacji SPORTIM (dalej jako „Aplikacja”).</p>
                <p style={{ textIndent: "20px" }}>W oparciu o art., 6 ust. 1 pkt f) RODO Administrator powołuje się na prawnie uzasadniony
                interes, którym jest prawidłowe i zgodne z prawem dopełnienia formalności związanych z
                wykonywaniem umów.</p>
                <p style={{ textIndent: "20px" }}>Przekazanie danych osobowych Współadministratorom odbywać się będzie wyłącznie w
                związku z realizacją przez nich usług dodatkowych - we własnym imieniu i na własny rachunek
                - na podstawie wyraźnego żądania Użytkownika. </p>
                <p><b>Zakres przetwarzania danych osobowych:</b></p>
                <p>Administrator uprawniony jest do przetwarzania Pani/Pana danych osobowych w zakresie
                niezbędnym do prawidłowego wykonania umowy łączącej Panią/Pana z Administratorem, w
                zakresie niezbędnym dla ochrony żywotnych interesów osoby, której dany dotyczą lub innej
                2
                osoby fizycznej, a także w zakresie niezbędnym dla realizacji prawnie uzasadnionych celów
                administratora. W szczególności przetwarzane dane obejmują: imię i nazwisko osoby fizycznej,
                numer telefonu, adres mailowy, rok urodzenia oraz płeć.</p>
                <p><b>Są to w szczególności dane podane dobrowolnie przez Użytkownika Aplikacji przy rejestracji,
                także każdorazowo – przy korzystaniu z wybranych funkcjonalności Aplikacji, przy czym o
                ostatecznym wyborze funkcjonalności decyduje Użytkownik. </b></p>
                <p>Przetwarzanie Pani/Pana danych osobowych polegać będzie na przechowywaniu danych w
                szczególności na elektronicznych nośnikach informacji, a wyjątkowo – jeśli cele przetwarzania
                tych danych będą tego wymagać – również w formie papierowej.
                Pani/Pana dane osobowe mogą być udostępniane innym podmiotom wyłącznie w sytuacjach
                prawnie dopuszczalnych, w szczególności w zakresie realizacji uprawnień i obowiązków
                związanych z przechowywaniem i udostępnianiem dokumentacji medycznej oraz
                świadczeniem usług medycznych na terenie Polski i UE.</p>
                <p><b>Prawa osób, których dane dotyczą</b></p>
                <p>Zgodnie z RODO przysługuje Pani Panu:</p>
                <p style={{ marginLeft: "25px" }}>a) prawo dostępu do swoich danych oraz otrzymania ich kopii;</p>
                <p style={{ marginLeft: "25px" }}>b) prawo do sprostowania (poprawiania) swoich danych;</p>
                <p style={{ marginLeft: "25px" }}>c) prawo do usunięcia danych osobowych, jedynie jednak w zakresie, w jakim nie uchybia
                to przepisom szczególnym – przede wszystkim przepisom regulującym sposób
                świadczenia usług medycznych, prowadzenia dokumentacji medycznej, jej
                przechowywania i udostępniania; </p>
                <p style={{ marginLeft: "25px" }}>d) prawo do ograniczenia przetwarzania danych;</p>
                <p style={{ marginLeft: "25px" }}>e) prawo do wniesienia sprzeciwu wobec przetwarzania danych;</p>
                <p style={{ marginLeft: "25px" }}>f) prawo do wniesienia skargi do Prezes UODO (na adres Urzędu Ochrony Danych
                Osobowych, ul. Stawki 2, 00 - 193 Warszawa)</p>
                <p><b>Podanie przez Panią/Pana danych osobowych jest dobrowolne, jednakże brak podania
                danych osobowych będzie skutkować będzie niemożnością zawarcia i wykonania umowy z
                Administratorem (niemożliwością zalogowania się do Aplikacji i skorzystania z jej
                funkcjonalności.</b></p>
                <p>Jeśli została udzielona zgoda marketingowa przetwarzanie danych w sposób
                zautomatyzowany będzie wykonywane wyłącznie w ramach udzielonej zgody i ograniczone
                wyłącznie do danych kontaktowych objętych treścią tej zgody.
                Dane osobowe nie będą przekazywane do państw znajdujących się poza Europejskim
                Obszarem Gospodarczym.</p>
                <p><b>Okres przechowywania danych</b></p>
                <p>Pani/Pana dane osobowe przechowywane będą przez czas niezbędny dla realizacji usług
                świadczonych drogą elektroniczną przez Administratora, w tym do czasu upływu okresu
                przedawnienia roszczeń wynikających z tych usług.
                Użytkownik w każdym czasie może usunąć konto użytkownika w Aplikacji. Jeśli w chwili
                usunięcia konta ustaną wszelkie stosunki prawne pomiędzy użytkownikiem a
                Administratorem lub którymkolwiek ze Współadministratorów – zaniechają oni dalszego
                przetwarzania tych danych. </p>
                <p><b>Inspektor ochrony danych osobowych</b></p>
                <p>U Administratora wyznaczony jest Inspektor Ochrony Danych Osobowych (dalej: IOD). Kontakt
                z IOD możliwy jest pod numerem telefonu XXX-XXX-XXX, oraz adresem e – mail
                iodo@sportim.pl</p>
                <h2>POLITYKA PRYWATNOŚCI</h2>
                <h4>APLIKACJI „SPORTIM”</h4>
                <p><b>§ 1 Słowniczek pojęć</b></p>
                <p>1. Aplikacja – aplikacja mobilna „SPORTIM” dostępna dla systemów operacyjnych
                opartych na oprogramowaniu Android oraz iOS; do pobrania również pod
                adresem https://www.aleks-2.mat.umk.pl/pz2019/zesp03/</p>
                <p>2. Administratorem danych osobowych gromadzonych za pośrednictwem
                Aplikacji jest SPORTIM sp. z o. o. z siedzibą w Toruniu, ul. Kopernika 11;
                zarejestrowana w Krajowym Rejestrze Sądowym pod numerem: XXXXXXXXX.</p>
                <p>3. Użytkownik – osoba fizyczna korzystająca z Serwisu;</p>
                <p>4. RODO – rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z
                27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
                danych osobowych i w sprawie swobodnego przepływu takich danych or az
                uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
                (Dz.Urz. UE L 119, s. 1);</p>
                <p>5. Ubezpieczenie – umowa ubezpieczenia sportowego (od następstw
                nieszczęśliwych wypadków) zawarta przez Użytkownika z Zakładem Ubezpieczeń
                [NAZWA] z wykorzystaniem Aplikacji.</p>
                <p><b>§ 2 Dane osobowe Użytkownika</b></p>
                <p>1. Dane osobowe Użytkownika są przetwarzane zgodnie z obowiązującymi
                przepisami prawa, w szczególności RODO oraz ustawą o świadczeniu usług drogą
                elektroniczną z dnia 18 lipca 2002 r.</p>
                <p>2. Zbierane przez Administratora dane osobowe Użytkownika wykorzystywane są
                kontaktu z nim w celu świadczenia usług oraz dystrybucji ubezpieczeń.</p>
                <p>3. Administrator przetwarza następujące dane osobowe Użytkownika: imię i
                nazwisko, numer telefonu, adres e-mail, płeć, rok urodzenia.</p>
                <p>Jeśli Użytkownik decyduje się na skorzystanie z Ubezpieczenia, Administrator
                zbiera w imieniu Zakładu Ubezpieczeń dane niezbędne do zawarcia umowy
                ubezpieczenia, w szczególności numer PESEL i adres zamieszkania. Dopuszcza się
                przeprowadzenie ankiety zawierającej dodatkowe informacje obowiązkowe. Ich
                podanie jest konieczne do skorzystania z funkcjonalności Ubezpieczenia, ale nie
                jest niezbędne dla korzystania z podstawowych funkcjonalności Aplikacji. </p>
                <p>4. Podanie danych osobowych w postaci: imienia i nazwis ka, adresu e-mail oraz
                numeru telefonu jest niezbędne w celu założenia konta Użytkownika, co jest
                inicjowane przez samego Użytkownika i może nastąpić albo bezpośrednio w
                Aplikacji albo za pośrednictwem jego konta na portalu społecznościowym
                Facebook.com. Wówczas dostęp do danych Użytkownika zawartych na tym
                portalu Administrator otrzymuje za wyraźną zgodą Użytkownika (uprawnieniem
                dostępu). </p>
                <p>5. Administrator udostępnia dane Użytkowników jedynie w ramach czynności
                związanych z wykonywaniem usług świadczonych drogą elektroniczną
                (funkcjonalności Aplikacji) i w zakresie określonym charakterem
                wykorzystywanej funkcjonalności. </p>
                <p>6. Administrator umożliwia korzystanie z Aplikacji nieodpłatnie, jednakże
                skorzystanie z funkcjonalności „Ubezpieczenie” wymagać będzie dodatkowej
                opłaty w postaci składki ubezpieczeniowej według stawek i wytycznych Zakładu
                Ubezpieczeń. Obsługę płatności oraz samego procesu zawarcia umowy
                ubezpieczenia zapewnia bezpośrednio Zakład Ubezpieczeń.</p>
                <p>7. Użytkownik może usunąć konto i zaprzestać z korzystania z usługi w każdym
                czasie, bez ponoszenia jakichkolwiek kosztów lub innych negatywnych
                konsekwencji, chyba że na własne wyraźne żądanie uzyskał dostęp do płatnych
                funkcjonalności Aplikacji i nie dokonał wymagalnych płatności. </p>
                <p><b>§3 Przetwarzanie danych</b></p>
                <p>1. Korzystanie z Aplikacji jest dobrowolne.</p>
                <p>2. Administrator zbiera i analizuje informacje zawarte w logach systemowych,
                takie jak nazwy domen, z których łączą się Użytkownicy serwisu, ilość odsłon
                stron, liczba wizyt we własnych celach statystycznych, jak również uprawnia do
                dostępu do nich reklamodawcom.</p>
                <p>3. Użytkownik ma prawo dostępu do treści swoich danych osobowych oraz
                prawo ich sprostowania, usunięcia, zaprzestania bądź ograniczenia
                przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu,
                prawo do cofnięcia zgody na ich przetwarzanie w dowolnym momencie bez
                wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie
                zgody wyrażonej przed jej cofnięciem. </p>
                <p><b>§4 Obowiązki Użytkownika</b></p>
                <p>1. Użytkownik zobowiązany jest do korzystania z Aplikacji w sposób zgodny z
                prawem i dobrymi obyczajami, mając na uwadze poszanowanie dóbr osobistych i
                praw własności intelektualnej osób trzecich.</p>
                <p>2. Użytkownik zobowiązany jest nie przekazywać Administratorowi do
                przetwarzania danych osobowych dotyczących innej osoby bez jej zgody. </p>
                <p>3. Wszystkie treści zamieszczone w Aplikacji korzystają z ochrony
                prawnoautorskiej i są własnością Administratora.</p>
                <p>4. Jakiekolwiek wykorzystanie przez kogokolwiek, bez wyraźnej zgody
                Administratora, któregokolwiek z elementów składających się na treść oraz
                zawartość Aplikacji stanowi naruszenie prawa autorskiego.</p>
                <p><b>§5 Postanowienia końcowe</b></p>
                <p>1. Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę
                przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii
                danych objętych ochroną, a w szczególności zabezpiecza dane przed ich
                udostępnieniem osobom nieupoważnionym, zabraniem przez osobę
                nieuprawnioną, przetwarzaniem z naruszeniem obowiązujących przepisów oraz
                zmianą, utratą, uszkodzeniem lub zniszczeniem.</p>
                <p>2. Administrator udostępnia środki techniczne zapobiegające pozyskiwaniu i
                modyfikowaniu przez osoby nieuprawnione danych osobowych, przesyłanych
                drogą elektroniczną.
                </p>
                <p>3. W sprawach nieuregulowanych niniejszą Polityką prywatności stosuje się
                właściwe przepisy prawa polskiego oraz RODO.</p>
                <p>4. W przyszłości powyższe zasady mogą ulec zmianie. W takim przypadku
                Administrator poinformuje o tym Użytkowników oraz umieści informację w na
                stronie internetowej Aplikacji.</p>
                <h2>REGULAMIN APLIKACJI MOBILNEJ SPORTIM</h2>
                <h4>§ 1</h4>
                <h4>Postanowienia ogólne</h4>
                <div style={{ display: "flex", margin: '5px 0px' }}>
                    <div>
                        1.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Aplikacja SPORTIM (dalej jako „Aplikacja”) jest udostępniana przez SPORTIM sp. z o.o.
                        z siedzibą w Toruniu przy ul. Kopernik 11, wpisaną do Krajowego Rejestru Sądowego
                        pod numerem XXXXXXXXX, NIP: XXX-XXX-XX-XX, REGON XXXXXXXXXXXX zwaną dalej
                        Administratorem
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        2.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Dane teleadresowe Administratora, umożliwiające Użytkownikowi kontakt z
                        Administatorem.
                        <div style={{ textIndent: "15px" }}>1) adres pocztowy: ul. Kopernika 11, 87-100 Toruń</div>
                        <div style={{ textIndent: "15px" }}>2) numer telefonu i/lub faksu: tel.: +48 XXX-XXX-XXX</div>
                        <div style={{ textIndent: "15px" }}>3) adres poczty elektronicznej: kontakt@sportim.pl</div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        3.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Do skutecznego zawarcia umowy o świadczenie usług drogą elektroniczną w postaci
                        dostępu do Aplikacji niezbędne jest urządzenie wykorzystujące system operacyjny
                        Android lub iOS.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        4.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Ceny wszystkich widocznych w Aplikacji usług – o ile są one odpłatne - są ceną brutto
                        (zawierającą podatek VAT) oraz są wyrażone w złotych polskich. Odstępstwa od zasady
                        waluty polskiej są wyraźnie zaznaczone. W przypadku prawnie wiążącego wejścia
                        przez Polskę do tzw. strefy Euro, ceny w Aplikacji wyrażane będą w okresie
                        przejściowym w złotych polskich i w euro, a po jego ustaniu – w euro. W przypadku
                        powstania wątpliwości czy cena towaru jest wyrażona w złotych polskich czy w Euro,
                        do czasu prawnie wiążącego wejścia przez Polskę do tzw. strefy Euro, przy braku
                        wyraźnego zaznaczenia, że cena wyrażona jest w Euro, należy rozumieć, iż cena jest
                        wyrażona w złotych polskich.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        5.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Ceny widniejące w Aplikacji jak również opisy towarów stanowią jedynie informację
                        handlową, a nie ofertę w rozumieniu Kodeksu Cywilnego. Charakter wiążący –
                        na potrzeby zawarcia konkretnej umowy – zyskują one dopiero z chwilą potwierdzenia
                        realizacji usługi przez Administratora lub podmiotu wskazanego przez Administratora
                        (w szczególności przez Zakład Ubezpieczeń).
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        6.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Administrator zastrzega sobie prawo zmiany cen usług, zamieszczania informacji
                        o nowych usługach dostępnych za pośrednictwem Aplikacji, przeprowadzenia
                        i odwołania akcji promocyjnych, bądź wprowadzenia w nich zmian.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        7.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W przypadku sprzedaży promocyjnej oraz wyprzedaży, na które przeznaczona jest
                        ograniczona liczba dostępności do usług świadczonych za pośrednictwem Aplikacji,
                        zawieranie zamówień lub ich realizacja następować będzie według kolejności
                        wpływania potwierdzonych zgłoszeń, aż do wyczerpania oznaczonego limitu.
                        W przypadku, o którym mowa w ustępie niniejszym, Administrator zastrzega sobie
                        możliwość ustalenia innej kolejności, jak też zastrzega sobie prawo wprowadzenia
                        innych szczególnych warunków odnoszących się do zawarcia lub realizacji transakcji.
                        O odstępstwach w stosunku do zasady powszechności, o których mowa w zdaniu
                        drugim niniejszego ustępu, Administrator informuje w odpowiedniej zakładce lub
                        komunikacie wyświetlanym przy dostępie Aplikacji oraz na swojej stronie
                        internetowej.

                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        8.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Do korzystania z Aplikacji konieczna jest pełna akceptacja niniejszego Regulaminu.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        9.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Rozmowy telefoniczne oraz korespondencja elektroniczna i papierowa prowadzone
                        w związku działalnością Aplikacji mogą być nagrywane i archiwizowane. Ujawnienie
                        jakichkolwiek szczegółów wynikających z tych rozmów lub korespondencji jest
                        niedopuszczalne, chyba że za wyraźną zgodą nadawcy i adresata albo gdy jest
                        to konieczne ze względu na dochodzone przez Administratora roszczenie,
                        w szczególności wobec adresata lub nadawcy, lub gdy jest to niezbędne ze względu
                        na przepisy prawa i na żądanie uprawnionego do tego organu państwa.
                    </div>
                </div>
                <h4>§ 2</h4>
                <h4>Korzystanie z Aplikacji</h4>
                <div style={{ display: "flex" }}>
                    <div>
                        1.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Korzystanie z funkcjonalności Aplikacji następuje po założeniu konta, zalogowaniu się i
                        wyborze odpowiednych funkcjonalności. Usługi świadczone z użyciem Aplikacji mogą być
                        nieodpłatne (główne funkcjonalności) jak i odpłatne (funkcjonalności dodatkowe,
                        oznaczone wyraźnie jako wymagające uiszczenia dodatkowej opłaty).
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        2.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Podczas zakładania konta Użytkownik jest zobowiązany do podania prawidłowych danych
                        osobowych wymaganych w formularzu, a jeśli decyduje się na podanie danych
                        nieobowiązkowych – również zobowiązany jest ujawniać jedynie dane zgodne ze stanem
                        rzeczywistym. Podawanie danych osób trzecich bez ich wyraźnej zgody jest zabronione.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        3.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Po komunikacie elektronicznym o założeniu konta lub uruchomieniu dodatkowej
                        funkcjonalności Aplikacji, czynności te zostaną potwierdzone przez Administratora drogą
                        telefoniczną lub elektroniczną. Z chwilą potwierdzenia umowa o świadczenie usług drogą
                        elektroniczną (niezależnie od tego, czy usługi te świadczone będą nieodpłatnie czy za
                        dodatkową opłatą) uważana jest za zawartą.

                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        4.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Administrator potwierdzi Użytkownikowi zawarcie umowy na odległość na trwałym
                        nośniku w rozsądnym czasie po jej zawarciu, najpóźniej w chwili rozpoczęcia świadczenia
                        usług.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        5.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Informacje zawarte w potwierdzeniu, o którym mowa w § 2 ust. 4 Regulaminu stanowią
                        integralną część umowy zawieranej na odległość albo poza lokalem przedsiębiorstwa
                        i mogą zostać zmienione jedynie za wyraźnym porozumieniem stron.
                    </div>
                </div>
                <h4>§ 3</h4>
                <h4>Płatności za usługi dodatkowe</h4>
                <div style={{ display: "flex" }}>
                    <div>
                        1.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Jeśli za pośrednictwem Aplikacji będzie możliwe skorzystanie z usług wymagających
                        uiszczenia dodatkowej opłaty, Administrator udostępni możliwość płatności w formie
                        przelewu na konto bankowe poprzez system transakcyjny PayU (operator płatności).
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        2.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Przelew na konto bankowe rozumieć należy jako transfer środków pieniężnych za pomocą
                        systemu PayU (za pomocą kart płatniczych lub logowania bezpośredniego do banku
                        współpracującego z operatorem). Korzystając z tej formy płatności Użytkownik nie ponosi
                        żadnych dodatkowych kosztów. Realizacja usługi rozpoczyna się natychmiast po zawarciu
                        umowy i uznaniu konta Administratora w serwisie PayU.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        3.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Za moment dokonania płatności uważa się moment wpływu środków na konto
                        Administratora w serwisie PayU.
                    </div>
                </div>
                <h4>§ 4</h4>
                <h4>Odstąpienie od umowy</h4>
                <div style={{ display: "flex" }}>
                    <div>
                        1.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Zgodnie z ustawą z 30.5.2014 r. – o prawach konsumenta (t.j. Dz.U. z 2017 r. poz. 683)
                        Użytkownik będący konsumentem, który zawarł umowę na odległość lub poza lokalem
                        przedsiębiorstwa, ma prawo odstąpić od zawartej umowy w terminie 14 dni od daty
                        jej zawarcia, chyba że zażądał natychmiastowego rozpoczęcia świadczenia usług i
                        wykonania umowy
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        2.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Co do zasady Użytkownik oświadcza, że wyraża zgodę na przystąpienie przez
                        Administratora lub podmioty z nim współpracujące do realizacji niniejszej umowy
                        niezwłocznie po jej zawarciu.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        3.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Użytkownik oświadcza, że został pouczony o skutkach zgody, o której mowa w ustępie
                        poprzedzającym, w szczególności o utracie prawa do odstąpienia od umowy w
                        terminie 14 dni od jej zawarcia bez ponoszenia dodatkowych kosztów oraz o
                        obowiązku zapłaty umówionego wynagrodzenia w przypadku wypowiedzenia umowy
                        w trakcie jej realizacji.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        4.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W razie podjęcia działań przez Administratora lub podmiot z nim współpracujący i
                        następczego odstąpienia od umowy przez Użytkownika, Administrator lub właściwy
                        podmiot z nim współpracujący obowiązany będzie zapłacić za świadczenia spełnione
                        do chwili odstąpienia od umowy.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        5.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W przypadku skorzystania z prawa odstąpienia od umowy – jeśli prawo takie mu
                        przysługuje - Użytkownik zobowiązany jest poinformować o tym Administratora,
                        składając oświadczenie o odstąpieniu na formularzu udostępnionym mu przez
                        Administratora; może to także zrobić drogą elektroniczną za pomocą elektronicznego
                        formularza odstąpienia od umowy przesłanego na adres kontakt@sportim.pl.
                        Oświadczenie o odstąpieniu od umowy złożone po terminie, o którym mowa
                        w ustępie pierwszym niniejszego paragrafu nie wywołuje skutków prawnych. Artykuł
                        61 KC stosuje się wprost.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        6.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W przypadku złożenia przez Użytkownika oświadczenia o odstąpieniu drogą
                        elektroniczną, Administrator niezwłocznie prześle potwierdzenie otrzymania
                        oświadczenia o odstąpieniu od umowy (na trwałym nośniku danych w rozumieniu
                        art. 2 pkt 4 ustawy z 30.5.2014 r. – o prawach konsumenta (t.j. Dz.U. z 2017 r.
                        poz. 683).
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        7.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W przypadku odstąpienia od umowy wszystkie dokonane przez Użytkownika płatności
                        podlegające zwrotowi zostaną przekazane niezwłocznie, nie później jednak niż
                        w terminie 14 dni od dnia otrzymania przez Administratora oświadczenia
                        o odstąpieniu od umowy.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        8.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Administrator oświadcza, iż zwrot płatności, o którym mowa w ust. 5 powyżej zostanie
                        zrealizowany przy użyciu takiego samego sposobu zapłaty, jakiego użył Użytkownik.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        9.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Zawierając umowę Użytkownik potwierdza, iż zapoznał się z treścią niniejszego
                        regulaminu, w tym potwierdza, iż został zawiadomiony o prawie odstąpienia
                        od zawartej umowy w terminie 14 dni od daty jej zawarcia oraz, że został pouczony o
                        konsekwencjach wynikających ze zgłoszenia żądania natychmiastowego rozpoczęcia
                        realizacji usług.
                    </div>
                </div>
                <h4>§ 5</h4>
                <h4>Usługi finansowe (ubezpieczeniowe)</h4>
                <div style={{ display: "flex" }}>
                    <div>
                        1.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Administrator może udostępniać Użytkownikowi dodatkową usługę – zawarcie umowy
                        ubezpieczenia sportowego (ubezpieczenia od następstw nieszczęśliwych wypadków)
                        ze wskazanym zakładem ubezpieczeń korzystającym z prawa do wykonywania
                        działalności ubezpieczeniowej na terytorium Rzeczypospolitej Polskiej, na warunkach i
                        zasadach określonych przez ten zakład ubezpieczeń, w szczególności zawartych we
                        wniosku ubezpieczeniowym (w formie online) i ogólnych warunkach ubezpieczenia
                        (OWU).
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        2.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W razie zawarcia umowy ubezpieczenia za pośrednictwem Aplikacji, Użytkownik
                        posiada prawo do odstąpienia od umowy w terminie 30 dni od daty otrzymania od
                        zakładu ubezpieczeń potwierdzenia jej zawarcia, chyba że zachodzi jeden z wyjątków
                        wskazanych w ust. 5.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        3.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W przypadku odstąpienia od umowy, umowa jest uważana za niezawartą, a
                        Użytkownik jest zwolniony z wszelkich zobowiązań.

                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        4.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W przypadku rozpoczętego za zgodą Użytkownika świadczenia usług przed upływem
                        terminu, o którym mowa w ust. 1 powyżej, Administrator lub Zakład Ubezpieczeń może
                        żądać zapłaty wynagrodzenia za usługę rzeczywiście wykonaną (proporcjonalnie
                        obliczonej składki ubezpieczeniowej)

                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        5.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Prawo odstąpienia od umowy nie przysługuje Użytkownikowi, jeżeli:
                        <div style={{ marginLeft: "10px" }}>a) umowa została na żądanie Użytkownika całkowicie wykonana przed upływem
                        terminu, o którym mowa w ust. 1 powyżej;</div>
                        <div style={{ marginLeft: "10px" }}>b) zawarł on umowę ubezpieczenia dotyczącą podróży i bagażu lub innych
                        podobnych, a czas trwania ochrony ubezpieczeniowej jest krótszy niż 30 dni.</div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        6.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Jeżeli czas trwania umowy ubezpieczenia nie jest oznaczony, każda ze stron może ją
                        wypowiedzieć bez wskazania przyczyn, z zachowaniem miesięcznego terminu
                        wypowiedzenia, chyba że strony zastrzegły krótszy termin wypowiedzenia
                    </div>
                </div>
                <h4>§ 6</h4>
                <h4>Procedura reklamacyjna</h4>
                <div style={{ display: "flex" }}>
                    <div>
                        1.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Reklamacje przez Użytkownika składane mogą być elektronicznie na adres:
                        reklamacje@sportim.pl
                        lub pisemnie na adres: SPORTIM sp. z o.o., ul. Kopernika 11, 87-100 Toruń
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        2.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Administrator zobowiązany jest odpowiedzieć na reklamację w terminie maksymalnie 30
                        dni od chwili otrzymania reklamacji.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        3.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W razie nieuwzględnienia reklamacji, Użytkownikowi przysługiwać będzie prawo
                        skierowania sprawy do właściwego sądu jak również złożenie wniosku o polubowne
                        rozwiązanie sporu konsumenckiego do uprawnionej instytucji. Administrator może
                        odmówić udziału w postępowaniu w przedmiocie polubownego rozwiązania sporu
                        konsumenckiego bez podania przyczyny.
                    </div>
                </div>
                <h4>§ 7</h4>
                <h4>Postanowienia końcowe</h4>
                <div style={{ display: "flex" }}>
                    <div>
                        1.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Wszystkie prezentowane przez Administratora dane dotyczące usług dodatkowych
                        realizowanych w porozumieniu z podmiotami trzecimi (Współadministratorami) jak
                        również nazwy tych usług są używane wyłącznie w celach identyfikacyjnych i mogą być
                        zastrzeżonymi znakami towarowymi.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        2.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Założenie konta w Aplikacji jest równoznaczne ze zgodą na przechowywanie
                        i przetwarzanie danych osobowych – na warunkach i zasadach szczegółowo wskazanych w
                        Polityce Prywatności.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        4.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Administrator informuje, że dane osobowe Kupującego, który dokonał płatności
                        za nabywane towary, są przekazywane spółce PayU S.A. z siedzibą w Poznaniu, jako
                        administratora danych (60-324 Poznań, ul. Marcelińska 90), wpisanej do rejestru
                        przedsiębiorców prowadzonego przez Sąd Rejonowy Poznań Nowe Miasto i Wilda
                        w Poznaniu, Wydział VIII Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS
                        0000274399. Przekazanie dotyczy danych osobowych niezbędnych do zrealizowania
                        płatności przez PayU S.A.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        5.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Administrator szanuje prawa Kupujących do prywatności. Zasady Polityki Prywatności
                        dostępne pod adresem internetowym [ADRES] wskazują, jakie informacje umożliwiające
                        osobistą identyfikację Administrator może gromadzić i w jaki sposób z takich informacji
                        korzystać.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        6.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mieć będą
                        odpowiednie przepisy Kodeksu cywilnego oraz ustawy z 30.5.2014 r. – o prawach
                        konsumenta (t.j. Dz.U. z 2017 r. poz. 683).
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        7.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Zgodnie z art. 8 ust. 3 pkt 2 lit. b ustawy z 18.7.2002 r. o świadczeniu usług drogą
                        elektroniczną (t.j. Dz.U. z 2017 r. poz. 1219) podmiot korzystający ze Aplikacji zobowiązany
                        jest do nieumieszczania treści o charakterze bezprawnym
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        8.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Administrator i podmioty z nim współpracujące nie ponoszą odpowiedzialności za szkody
                        i krzywdy wynikające z niewłaściwego korzystania z Aplikacji przez osoby trzecie i innych
                        Użytkowników.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        9.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        . Administrator nie ponosi odpowiedzialności za szkody i krzywdy spowodowane jego
                        działaniem lub zaniechaniem wynikającym z otrzymanych przez niego od Użytkownika
                        nieprawidłowych dany.
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        10.
                    </div>
                    <div style={{ marginLeft: "10px", textAlign: 'justify' }}>
                        Niniejszy Regulamin jest dostępny pod adresem internetowym [ADRES].
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Politics;