import React from "react"
import "../style.scss"

const  PageKimun = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div className="img_cartochka">
                    <img src= "../../../images/чайБ1.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Кимун</h2>
                    <p className="p_name">
                    Высококачественный сорт, производимый в провинции Аньхой, Китай. 
                    Известен своим свежим и деликатным ароматом, напоминающим цветы и фрукты.
                    </p>
                    <h1 className="h3_tovar">Объем</h1>
                    <p className="p_name">
                        250 мл
                    </p>
                    <h1 className="h3_tovar">Цена</h1>
                    <p className="p_name">
                        80 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageKimun



