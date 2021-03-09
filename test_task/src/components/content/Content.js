import React from "react"
import {photo_rendering, movePhotoSelection, zoom_manipulate, $} from "../jq-modules/jq-modules"



class Content extends React.Component{

    componentDidMount(){
        photo_rendering()
        $(document).ready(function(){
            let $photo_current = $('.photo-current'),
                $photo = $photo_current.children('.wrapper-p').children('.photo');

            $photo_current.bind('mousewheel', function(e){
                let sizeH = $photo.css('height').split('px')[0],
                    sizeW = $photo.css('width').split('px')[0];

                let width = ($photo.css('width').split('px')[0] / 100) * 2,
                    height = ($photo.css('height').split('px')[0] / 100) * 2;
                if(e.originalEvent.wheelDelta /120 > 0) {
                    $photo.css({height:+sizeH + height + 'px'});
                    $photo.css({width:+sizeW + width + 'px'})
                }
                else{
                    $photo.css({height:sizeH - height + 'px'});
                    $photo.css({width:sizeW - width + 'px'})
                }
            });

            $photo_current.bind('mouseover', function(e){

                $('body').css({overflow:'hidden'})
                $(this).css({transition: 'none'})
            });

            $photo_current.bind('mouseout', function(e){
                $('body').css({overflow:'overlay'})
                $(this).css({transition: '1s ease'})
            });

            $photo_current.bind('mousedown', function(e){
                let spaceX = e.clientX - $photo.css('left').split('px')[0],
                    spaceY = e.clientY - $photo.css('top').split('px')[0];

                $photo_current.bind('mousemove', function(e){
                    let pageX = e.pageX,
                        pageY = e.pageY,
                        resultX = pageX - spaceX + 'px',
                        resultY = pageY - spaceY + 'px';
                    $photo.css({'left': resultX, 'top':resultY})
                });


            });
            $photo_current.bind('mouseup', function(e){
                $('.photo-current').unbind('mousemove');
            });
            
        });
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
                                            <button><i className={"fa fa-angle-left dp"}></i></button>
                                            <button><i className={"fa fa-angle-right dp"}></i></button>
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