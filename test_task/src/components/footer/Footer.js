import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className={"Footer Wrapper-Footer"}>
                <div className={"Footer-Background"}>
                    <div className={"Footer-Info"}>
                        <div className={"First Footer-Info-First"}>
                            <div className={"First-AboutCompany"}>О компании</div>
                            <div className={"First-ForBuyers"}>Для покупателей</div>
                            <div className={"First-Products"}>Продукты</div>
                            <div className={"First-CallUs"}>Связаться с нами</div>
                        </div>
                        <div className={"Second Footer-Info-Second"}>
                            <div className={"Second-Wrapper"}>Мы в соцсетях:
                                <div className={"Socials Second-Socials"}>
                                    <div className={"Social Socials-VK VK"}>
                                        <a href={"http://localhost:8080/"}><i className="fa fa-vk"> </i></a>
                                    </div>
                                    <div className={"Social Socials-FB FB"}>
                                        <a href={"http://localhost:8080/"}><i className="fa fa-facebook"> </i></a>
                                    </div>
                                    <div className={"Social Socials-Inst Inst"}>
                                        <a href={"http://localhost:8080/"}><i className="fa fa-instagram"> </i></a>
                                    </div>
                                    <div className={"Social Socials-Youtube Youtube"}>
                                        <a href={"http://localhost:8080/"}><i className="fa fa-youtube-play"> </i></a>
                                    </div>
                                </div>
                            </div>
                            <div className={"Second_Subscribe"}>
                                <form>
                                    <label>Вы можете подписаться на рассылку</label>
                                    <input className={"Second-Subscribe-Email"} type={"email"}/>
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