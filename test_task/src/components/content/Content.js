import React from "react"
import {photo_rendering, movePhotoSelection} from "../jq-modules/jq-modules"



class Content extends React.Component{
    componentDidMount(){
        photo_rendering()
    }
    render(){


        return(
            <div className={"content-parent"}>
                <div className={"content-wrapper"}>
                    <div className={"content-gallery"}>
                        <albel>Галерея фотографий</albel>`
                        <div className={"gallery"}>
                            <div className={"photo-current"}>
                                <div className={"zoom-panel"}>
                                    <button> <i className={"fa fa-plus"}></i> </button>
                                    <button> <i className={"fa fa-minus"}></i> </button>
                                    <button> <i className={"fa fa-window-restore"}></i> </button>
                                </div>
                                <div className={"wrapper-dp"}>
                                    <div className={"direction-panel"}>
                                        <button><i className={"fa fa-angle-left dp"}></i></button>
                                        <button><i className={"fa fa-angle-right dp"}></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className={"wrapper-np"}>
                                <div className={"navigation-panel"}>
                                    <i className={"fa fa-caret-left np"}></i>
                                    <div className={"wrapper-ps"}
                                         onMouseMove={(e)=>movePhotoSelection(e)}>
                                        <div className={"wrapper-w-ps"}>
                                            <div className={"photo-selection"}> </div>
                                        </div>

                                    </div>

                                    <i className={"fa fa-caret-right np"}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;