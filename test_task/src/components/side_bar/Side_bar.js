import React from "react";
import {side_bar_hidden} from "../jq-modules/jq-modules"



class SideBar extends React.Component {

    render() {

        return (
            <div className={"SideBar Wrapper-SideBar"}>
                <a onClick={()=>side_bar_hidden()} className={"SideBar-Btn_hide"}>
                    <label>Закрыть</label>
                    <i className="fa fa-times fa-2x"> </i>
                </a>
                <hr/>
                <a>Домой</a>
                <a>Домой</a>
                <a>Домой</a>
                <a>Домой</a>
                <a>Домой</a>
                <a>Домой</a> {/*//Доработать*/}
            </div>
        )
    }
}

export default SideBar;