import './Body.css';
import { RegWindow } from './Reg-window';
import './Reg-window.css';

export interface IBodyProps {
}

export function Body(props: IBodyProps) {

    return (

        <div>
            <header className="page-header">
                <div className="container">
                    <a className="header-email" href="mailto:help@altaiTehAs.ru">help@altaiTehAs.ru</a>
                    <a className="header-phone" href="tel:+7(999)999-99-99" id="verh">+7(999)999-99-99</a>
                </div>
            </header>

            <div className="hero-image">
                <div className="container">
                    <h1 className="heading">АлтайТехАс</h1>
                    <p> Нам доверяют кормильцев </p>
                    <hr color="black" />
                </div>
            </div>
            <div>
                <div className="container" id="buttons">
                    <div className='buttons-container'>
                        <a className="button" href="#onas"> О нас </a>
                        <a className="button" href="#pochemu"> Почему именно мы? </a>
                        <a className="button" href="#price"> Прайс </a>
                        <a className="button" href="#naiti"> Как нас найти? </a>
                    </div>
                </div>
            </div>
            <div className="otstup"></div>
            <div className="container">
                <h2 className="subheading" id="onas">О Нас</h2>
                <img src={require('../img/8caa507a1aae95d214577e45aaaa5e3f.jpg')} height="300" alt="лого" className="rightpic" style={{ alignContent: "right" }} />
                <p>
                    Мы - компания, которая любит технику и которая знает, как с ней обращаться. Пользуясь нашими услугами, вы можете быть уверены, что ваши машины прослужат вам долго и качественно, что вы получите гарантию и выездную помощь в случае поломки. Мы базируемся в Барнауле, работаем по всему Алтайскому краю и за его пределами.
                </p>
                <div>Мы предоставляем следующие услуги:
                    <div className="columns">
                        <ul>
                            <li>Капитальный ремонт двигателей</li>
                            <li>Ремонт КПП</li>
                            <li>Кузовной ремонт</li>
                            <li>Ремонт ходовой части</li>
                            <li>Замена расходников</li>
                            <li>Техническое обслуживание</li>
                            <li>планово-предупредительный ремонт</li>
                            <li>установка дополнительного оборудования и аксессуаров</li>
                            <li>электротехнические работы</li>
                            <li>предпродажная подготовка техники</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container" >
                <h2 className="subheading" id="pochemu"> Почему именно мы? </h2>
                <img src={require('../img/DSC_0108.jpeg')} width="300" alt="трактор" className="rightpic" style={{ alignContent: "right" }} />
                <p>
                    Наша фирма предоставляет качественные услуги за справедливую цену и продолжает поддерживать клиента в дальнейшем, приходя на помощь прямо в поле, если этого потребует ситуация. Мы честно соблюдаем условия гарантии, дорожим своими клиентами. Каждая починенная машина становится словно родной.
                </p>

            </div>

            <div className="container" >
                <h2 className="subheading" id="price"> Прайс </h2>
                <img src={require('../img/1200px-Massey_Ferguson_6490_Dynashift.jpg')} width="300" alt="лого" className="rightpic" style={{ alignContent: "right" }} />
                <p>
                    Наши цены обусловлены высоким качеством работы и материалов. Мы стараемся подерживать оптимальную цену по рынку, соответствующую уровню подготовки наших мастеров.
                </p>
                <div>Цены:
                    <ul>
                        <li>Капитальный ремонт двигателей: от 85 тыс. руб.</li>
                        <li>Ремонт КПП: от 70 тыс. руб.</li>
                        <li>Кузовной ремонт: цена договорная</li>
                        <li>Ремонт ходовой части: от 40 тыс. руб.</li>
                        <li>Замена расходников: от 20 тыс. руб.</li>
                        <li>Техническое обслуживание: от 15 тыс. руб.</li>
                        <li>планово-предупредительный ремонт: от 20 тыс. руб.</li>
                        <li>установка дополнительного оборудования и аксессуаров: цена договорная</li>
                        <li>электротехнические работы: от 45 тыс. руб.</li>
                        <li>предпродажная подготовка техники: цена договорная</li>
                    </ul>
                </div>
            </div>



            <div className="container">
                <h2 className="subheading" id="naiti"> Как нас найти </h2>
                <p>
                    Наш цех располагается по адресу г. Барнаул, ул. Новосибирская, 44е. О доставке и приёме техники, а также о более подробных условиях следует договариваться по телефону: 8-963-505-6898.
                </p>
                <p> В нашем цеху присутствует качественное освещение, отопление, профессиональное оборудование и инструменты.</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.180143311548!2d83.60491261603373!3d53.30421998556663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dd9f4b640fffff%3A0x8fe863a7590a338c!2z0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0YPQuy4sIDQ00LIsINCR0LDRgNC90LDRg9C7LCDQkNC70YLQsNC50YHQutC40Lkg0LrRgNCw0LksIDY1NjkyMg!5e0!3m2!1sru!2sru!4v1680437270933!5m2!1sru!2sru"
                    width="600"
                    height="450"
                    style={{ "border": "0" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <RegWindow isShow={false} />

            </div>
            <footer className="page-footer">
                <div className="container">
                    <a className="header-email" href="mailto:help@altaiTehAs.ru">help@altaiTehAs.ru</a>
                    <a className="header-phone" href="tel:+7(999)999-99-99" id="verh">+7(999)999-99-99</a>
                </div>
            </footer>
        </div >
    );
}