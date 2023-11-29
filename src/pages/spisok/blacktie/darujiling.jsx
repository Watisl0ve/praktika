import React from "react"
import "../style.scss"

const PageDarujiling = () => {
    return (
        <div className="main">
            <article class="cartochka_tovara">
                <div className="img_cartochka">
                    <img src= "../../../images/чайБ3.png" alt="" className="img_site" />
                </div>
                <div className = "tovar"s>
                    <h2 className="h2_name">Дарджилинг</h2>
                    <p className="p_name">
                    Это широко известный чай из знаменитого сада Margret's Hope
                     собирается в апреле. Чай Дарджилинг с его уникальным мускатным
                      вкусом и изысканным букетом часто называют "чайным шампанским".
                    </p>
                    <h3 className="h3_tovar">Объем</h3>
                    <p className="p_name">
                        200 мл
                    </p>
                    <h3 className="h3_tovar">Цена</h3>
                    <p className="p_name">
                        120 Р
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageDarujiling



