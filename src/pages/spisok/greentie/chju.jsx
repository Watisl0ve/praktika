import React from "react"
import "../style.scss"

const  PageChju = () => {
    return (
        <div className="main">
            <article className="cartochka_tovara">
                <div className="img_cartochka">
                    <img src= "../../../images/чайБ5.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Чжу Е Цин</h2>
                        <p className="p_name">
                        Уникальный дикорастущий сильноферментированный прожаренный красный 
                        чай с ярким хлебно-фруктово-ягодным вкусом и долгим послевкусием.
                         Настоящее удовольствие для чайного гурмана. 
                        </p>
                    <h3 className="h3_tovar">Объем</h3>
                        <p className="p_name">
                            450 мл
                        </p>
                    <h3 className="h3_tovar">Цена</h3>
                        <p className="p_name">
                            450 Р
                        </p>
                </div>
            </article>
        </div>
    )
}
export default PageChju



