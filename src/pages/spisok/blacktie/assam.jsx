import React from "react"
import "../style.scss"

const PageAssam = () => {
    return (
        <div className="main">
            <article class="cartochka_tovara">
                <div className="img_cartochka">
                    <img src= "../../../images/чайБ2.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Ассам</h2>
                    <p className="p_name">
                    Черный крупнолистовой Ассам довольно крепкий и насыщенный. 
                    В дополнение к этим качествам он одаривает приятным ароматом, 
                    напоминающим цветочный мед и пряности. 
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        250 мл
                    </p>
                    <h3 className="h3_tovar">Цена</h3>
                    <p className="p_name">
                        160 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageAssam



