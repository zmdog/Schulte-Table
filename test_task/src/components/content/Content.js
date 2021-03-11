import React from "react"
import {photo_rendering, movePhotoSelection, zoom_manipulate, binding_events, change_photo} from "../jq-modules/jq-modules"



class Content extends React.Component{

    componentDidMount(){
        photo_rendering()
        binding_events()
    }
    render(){


        return(
            <div className={"content-parent"}>
                <div className={"content-wrapper"}>
                    <div className={"content-gallery"}>
                        <label>Галерея фотографий</label>
                        <div className={"gallery"}>
                            <div className={"photo-current"}>
                                <div className={"wrapper-p"}>
                                    <img className={"photo"} src={"../public/photos/pic_1.jpg"}/>
                                </div>
                                <div className={"wrapper-panel"}>
                                    <div className={"zoom-panel"}>
                                        <button onClick={(e)=> zoom_manipulate('plus')}
                                                className={"z-p-b plus"}>
                                            <i className={"fa fa-plus"}></i>
                                        </button>
                                        <button onClick={(e)=> zoom_manipulate('minus')} className={"z-p-b minus"}> <i className={"fa fa-minus"}></i> </button>
                                        <button onClick={(e)=> zoom_manipulate('restore')} className={"z-p-b restore"}> <i className={"fa fa-window-restore"}></i> </button>
                                    </div>
                                    <div className={"wrapper-dp"}>
                                        <div className={"direction-panel"}>
                                            <button onClick={(e)=>change_photo('left')}><i className={"fa fa-angle-left dp"}></i></button>
                                            <button onClick={(e)=>change_photo('right')}><i className={"fa fa-angle-right dp"}></i></button>
                                        </div>
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