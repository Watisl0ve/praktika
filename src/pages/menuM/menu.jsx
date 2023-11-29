import React from "react"
import "./style.scss"

const PageMenuM = () => {
    return (
        <div className="main">
            <div className = "logo_main"> 
                <h3 className = "question">Кто хочет чашечку<br />вкусного чая?</h3>
                <p className = "priglashenie">Заходите к нам! И насладитесь его вкусом и ароматом.</p>
            </div>

            <article className="article">
            <h2 className="tie">Черный чай</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/kimun" className="a_spisok">
                        <img src="../../../images/чай 1.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Кимун</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/assam" className="a_spisok">
                        <img src="../../../images/чай2.png" alt="" className = "img_main" />
                        <p class = "card_opisanie">Ассам</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/darujiling" className="a_spisok">
                        <img src="../../../images/чай3.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Дарджилинг</p>
                    </a>
                </div>
            </div>
        </article>
        
        <article className="article">
            <h2 className="tie">Зеленый чай</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/lun" className="a_spisok">
                        <img src="../../../images/чай4.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Лун Цзин</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/chju" className="a_spisok">
                        <img src="../../../images/чай5.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Чжу Е Цин</p>
                    </a>
                </div>
                <div className="card">
                    <a href="/bolu" className="a_spisok">
                        <img src="../../../images/чай6.png" alt="" className = "img_main" />
                        <p className = "card_opisanie">Би Ло Чунь </p>
                    </a>
                </div>
            </div>
        </article>
       
        </div>
    )
}
export default PageMenuM



