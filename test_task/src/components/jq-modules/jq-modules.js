export let $ = require('jquery');

export let side_bar_hidden = ()=> {

    $('.side-bar').css({left: "-22vw"})
    $('.wrapper-content').css({left: "0%"})
    $('body').css({overflow:"overlay"})
    $('.wrapper-shadow').css({visibility:"hidden",background: "#01010000"})
}

export let side_bar_visible = () => {

    $('.side-bar').css({left: "0"})
    $('.wrapper-content').css({left: "22vw"})
    $('body').css({overflow:"hidden"})
    $('.wrapper-shadow').css({visibility:"visible", background: "#0101006e"})
}

export let photo_rendering = ()=>{
    let $photo_selection = $('.photo-selection');
    for(let i = 1; i < 12; i++){
        $photo_selection.append("<img  src='../public/photos/pic_"+i+".jpg'/>")
    }

    $photo_selection.children('img').on('click', (e)=>{
       let $photo_current = $('.photo-current').children('.wrapper-p').children('.photo'),
           src = e.target.src
        $photo_current.attr('src', src)
    })

}

export let zoom_manipulate = (elem)=>{
    let $photo_current = $('.photo-current').children('.wrapper-p').children('.photo'),
        sizeH = $photo_current.css('height').split('px')[0],
        sizeW = $photo_current.css('width').split('px')[0];

    let width = ($photo_current.css('width').split('px')[0] / 100) * 5,
        height = ($photo_current.css('height').split('px')[0] / 100) * 5;


    switch (elem){
        case 'plus':
            $photo_current.css({height:+sizeH + height + 'px'});
            $photo_current.css({width:+sizeW + width + 'px'})
            break;

        case 'minus':
            $photo_current.css({height:sizeH - height + 'px'});
            $photo_current.css({width:sizeW - width + 'px'})
            break;

        default:
            $photo_current.css({height: '100%'});
            $photo_current.css({width: 'auto'})
            break;
    }
}

export let movePhotoSelection = (e)=>{

        let $wrapperPS = $('.wrapper-ps'),
            width = $wrapperPS.width(),
            x = e.pageX,
            result = Math.round(-100 / (width/x)) +59;

        if(result >= -20 || result <= -80) return;
        $('.photo-selection').css({left: result + 21 + '%'})
}

export let binding_events =()=>{
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

export let change_photo =(direction)=>{
    let $photo_current = $('.photo-current').children('.wrapper-p').children('.photo'),
        numb_photo = +$photo_current.attr('src').split('_')[1].split('.')[0];

    if(direction === 'left' && numb_photo - 1 > 0) $photo_current.attr('src', '../public/photos/pic_'+ (numb_photo - 1) +'.jpg');

    if(direction === 'right' && numb_photo + 1 < 12) $photo_current.attr('src', '../public/photos/pic_'+ (numb_photo + 1) +'.jpg')
}