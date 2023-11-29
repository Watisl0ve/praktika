import React from "react"
import "./style.scss"
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const PageFooter = () => {
    return (
        <div className="mainFooter">
            <footer>
                <div className = "text_footer">
                    <div className="ppp_footer">
                        <p>Кофейня Hot Coffee</p>
                        <p>г. Барнаул, ул. Ленина, 55</p>
                    </div>
                    <div className = "networks_footer">
                        <a href=""><img src="images/vk.png" alt="" className = "img_nav" /></a>
                        <a href=""><img src="images/inst.png" alt="" className = "img_nav" /></a>
                    </div>
                </div>
                <p className = "prava">© 2023 «Хат Кофи». Все права защищены.</p>
            </footer>
        </div>
    )
}
export default PageFooter



