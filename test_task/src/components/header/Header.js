import React from "react";
import anim from "./anim.svg";
import {side_bar_visible} from "../jq-modules/jq-modules"

class Header extends React.Component {

    render() {
        return (
            <div className={"Header Wrapper-Header"}>
                <a onClick={()=>side_bar_visible()} className={"Btn Header-Btn_openMenu"}>
                    <i className="fa fa-bars"> </i><label>Меню</label>
                </a>
                <div className={"Header-Logo"}>
                    <object type="image/svg+xml" data={anim} width="100px"></object>
                </div>
                <a className={"Btn Header-Btn_openUser"}>
                    <i className="fa fa-user"></i><label>Войти/Зарегестрироваться</label>
                </a>
            </div>
        )
    }
}

export default Header;