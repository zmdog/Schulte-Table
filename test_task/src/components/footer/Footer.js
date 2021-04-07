import React from "react";

class Footer extends React.Component {

    render() {
        let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
            ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
            ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
            ' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa' +
            ' qui officia deserunt mollit anim id est laborum.'
        return (
            <div className={"Footer Wrapper-Footer"}>
                <div className={"Footer-Background"}>
                    <div className={"Footer-Info"}>
                        <div className={"First Main-Info Footer-Info-First"}>
                            <div className={"Left First-Content"}>
                                <div className={"Info Left-AboutCompany"}>
                                    <div className={"Info-wrapper"}>
                                        <h>О компании</h>
                                    </div>
                                    <p>{text}</p>
                                </div>
                                <div className={"Info Left-ForBuyers"}>
                                    <div className={"Info-wrapper"}>
                                        <h>Для покупателей</h>
                                    </div>
                                    <p>{text}</p>
                                </div>
                            </div>
                            <div className={"Right First-Content"}>
                                <div className={"Info Right-Products"}>
                                    <div className={"Info-wrapper"}><
                                        h>Продукты</h>
                                    </div>
                                    <p>{text}</p>
                                </div>
                                <div className={"Info Right-CallUs"}>
                                    <div className={"Info-wrapper"}>
                                        <h>Связаться с нами</h>
                                    </div>
                                    <p>{text}</p>
                                </div>
                            </div>
                        </div>
                        <div className={"Second Main-Info Footer-Info-Second"}>
                            <div className={"Second-Wrapper"}>
                                <label>Мы в соцсетях:</label>
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
                                    <input placeholder={'Abc@gmail.com'} className={"Second-Subscribe-Email"} type={"email"}/>
                                </form>
                            </div>
                        </div>
                        <hr/>
                        <div className={"Thirst Main-Info Footer-Info-Thirst"}>Другая информация</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer;