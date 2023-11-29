import React from "react"
import "../style.scss"

const  PageBolu = () => {
    return (
        <div className="main">
            <article className="cartochka_tovara">
                <div className="img_cartochka">
                    <img src= "../../../images/чайБ6.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Би Ло Чунь </h2>
                    <p className="p_name">
                    Это настоящий зеленый чай улун без добавок. Китайский чай имеет фруктовый вкус.
                     Особый микроклимат делает вкус чая заварочного неповторимым, ароматным. Чай зеленый 
                     имеет сладкое и медовое послевкусие. 
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        300 мл
                    </p>
                    <h3 className="h3_tovar">Цена</h3>
                    <p className="p_name">
                        250 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageBolu



