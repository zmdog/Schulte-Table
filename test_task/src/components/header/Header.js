import React from "react";
import anim from "./anim.svg";
import {side_bar_visible} from "../jq-modules/jq-modules"

class Header extends React.Component {

    render() {
        return (
            <div className={"header-parent"}>
                <a onClick={()=>side_bar_visible()} className={"btn-menu"}>
                    <i className="fa fa-bars"> </i>Меню
                </a>
                <div className={"header-parent_logo"}>
                    <object type="image/svg+xml" data={anim} width="100px"></object>
                </div>
                <a className={"header-parent_log-reg"}>Войти/Зарегестрироваться</a>
            </div>
        )
    }
}

export default Header;