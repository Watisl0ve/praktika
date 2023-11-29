import React from "react"
import "./style.scss"
const PageNovinki = () => {
    return (
        <div className="main">

            <div className = "logo_novosti">
                <h3 className = "logo_logo">Новинки</h3>
            </div>
            <article>
                <div className="abzac_novosti">
                    <h3>Акция на чёрный чай</h3>
                    <p className="time">12.06.2023  12:55</p>
                    <p className="name_abzac3">
                    Чайная  “TeaSea” в центре города приглашает всех любителей 
                    хорошего чая на новую акцию! Теперь к каждым двум купленным
                     чашкам Кимуна или Ассама получите в подарок третью чашку любого чая бесплатно.
                    </p>
                </div>
            </article>
            <article>
                <div className="abzac_novosti">
                    <h3>Конкурс</h3>
                    <p className="time">07.06.2023  14:32</p>
                    <p className="name_abzac3">
                    Чайная “TeaSea” предлагает поучавствовать каждого в захватывающем 
                    конкурсе! Сможете выпить 5 литров чая за 5 минут - получите именную кружку объёмом 1 литр!
                    </p>
                </div>
            </article>
            <article className="bezOtstupov">
                <div className="abzac_novosti">
                    <h3>Акция на зелёный чай</h3>
                    <p className="time">02.06.2023  16:05</p>
                    <p className="name_abzac3">
                    Чайная  “TeaSea” в центре города приглашает всех любителей хорошего
                     чая на новую акцию! На этой неделе каждый может получить бесплатную 
                     чашку любого зелёного чая.
                    </p>
                </div>
            </article>
        </div>
    )
}
export default PageNovinki



