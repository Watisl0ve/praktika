import React from "react"
import "./style.scss"

import { Link } from 'react-router-dom'
import classNames from 'classnames'

const PageKontakty = () => {
    return (
        <div className="main">
            <div className = "logo_kontakty">
            <div className = "map">
                    <a className="map_one" href="https://yandex.ru/maps/197/barnaul/?utm_medium=mapframe&utm_source=maps" 
                   ></a>
                    <a className="map_two" href="https://yandex.ru/maps/197/barnaul/house/prospekt_lenina_55/bEoYcQBoS0EOQFtpfX91dHpjYw==/?ll=83.778249%2C53.345608&utm_medium=mapframe&utm_source=maps&z=16.73" 
                    ></a>
                    <iframe className="map_three" src="https://yandex.ru/map-widget/v1/?ll=83.778249%2C53.345608&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NTk3Mjk0NhJc0KDQvtGB0YHQuNGPLCDQkNC70YLQsNC50YHQutC40Lkg0LrRgNCw0LksINCR0LDRgNC90LDRg9C7LCDQv9GA0L7RgdC_0LXQutGCINCb0LXQvdC40L3QsCwgNTUiCg13jqdCFedhVUI%2C&z=16.73" 
                     frameborder="1" allowfullscreen="true"></iframe>
                </div>
            </div>

            <article className="kontakty_map">
                <div className = "abzac_spisok">
                    <div className = "abzac">
                        <h3>Адрес</h3>
                        <p className = "name_abzac2">г.Барнаул, ул. Ленина, 55</p>
                    </div>
                </div>
                <div className = "abzac_spisok">
                    <div class = "abzac">
                        <h3>Телефон</h3>
                        <p className = "name_abzac2">+7 385 123 45 67</p>
                    </div>
                </div>
                <div className = "abzac_spisok">
                    <div class = "abzac">
                        <h3>Почта</h3>
                        <p className = "name_abzac2">hot_coffe@mail.ru</p>
                    </div>
                </div>
               
            </article>
        </div>
    )
}
export default PageKontakty



