import React from "react"
import "../style.scss"

const  PageLun = () => {
    return (
        <div className="main">
            <article className="cartochka_tovara">
                <div className="img_cartochka">
                    <img src= "../../../images/чайБ4.png" alt="" className="img_site" />
                </div>
                <div className = "tovar">
                    <h2 className="h2_name">Лун Цзин</h2>
                        <p className="p_name">
                        Чаепитие с ним — истинное наслаждение, начиная от ощущения легкого 
                        шоколадного аромата сухой заварки в чайнике, заканчивая его ярким, 
                        солнечным вкусом и сладким послевкусием.
                        </p>
                    <h3 className="h3_tovar">Объем</h3>
                        <p className="p_name">
                            150 мл
                        </p>
                    <h3 className="h3_tovar">Цена</h3>
                        <p className="p_name">
                            60 Р
                        </p>
                </div>
            </article>
        </div>
    )
}
export default PageLun



