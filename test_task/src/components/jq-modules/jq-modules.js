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
