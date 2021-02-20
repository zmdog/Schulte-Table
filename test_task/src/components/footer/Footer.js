import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className={"footer-parent"}>
                <div className={"footer-parent_background"}>
                    <div className={"footer-parent_container"}>
                        <div className={"container_first"}>
                            <div className={"first_about-company"}>О компании</div>
                            <div className={"first_for-buyers"}>Для покупателей</div>
                            <div className={"first_products"}>Продукты</div>
                            <div className={"first_call-us"}>Связаться с нами</div>
                        </div>
                        <div className={"container_second"}>
                            <div className={"second_socials-wrapper"}>Мы в соцсетях:
                                <div className={"second_socials"}>
                                    <div className={"socials VK"}>
                                        <a href={"http://localhost:3000/"}><i className="fa fa-vk fa-2x"> </i></a>
                                    </div>
                                    <div className={"socials FB"}>
                                        <a href={"http://localhost:3000/"}><i className="fa fa-facebook fa-2x"> </i></a>
                                    </div>
                                    <div className={"socials Inst"}>
                                        <a href={"http://localhost:3000/"}><i
                                            className="fa fa-instagram fa-2x"> </i></a>
                                    </div>
                                    <div className={"socials Youtube"}>
                                        <a href={"http://localhost:3000/"}><i className="fa fa-youtube-play fa-2x"> </i></a>
                                    </div>
                                </div>
                            </div>
                            <div className={"second_subscribe"}>
                                <form>
                                    <label>Вы можете подписаться на рассылку</label>
                                    <input className={"subscribe_email"} type={"email"}/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div>Другая информация</div>
                </div>
            </div>
        )
    }
}

export default Footer;