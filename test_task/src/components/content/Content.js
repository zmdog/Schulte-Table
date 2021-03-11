import React from "react"
import {photo_rendering, movePhotoSelection, zoom_manipulate, binding_events, change_photo} from "../jq-modules/jq-modules"
import Gallery from "../gellery/Gallery"



class Content extends React.Component{

    componentDidMount(){
        photo_rendering()
        binding_events()
    }
    render(){


        return(
            <div className={"content-parent"}>
                <div className={"content-wrapper"}>
                    <Gallery></Gallery>
                </div>
            </div>
        )
    }
}

export default Content;