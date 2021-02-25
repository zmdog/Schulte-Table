export let $ = require('jquery');

export let side_bar_hidden = ()=> {

    $('.side-bar').css({left: "-22vw"})
    $('.wrapper-content').css({left: "0%"})
    $('body').css({overflow:"scroll"})
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
        $photo_selection.append("<img  src='/public/photos/pic_"+i+".jpg'/>")
    }

    $photo_selection.children('img').on('click', (e)=>{
       let $photo_current = $('.photo-current')
        let src = e.target.src

        $photo_current.css({background: "url("+src+") center no-repeat", backgroundSize:"100%"})
        console.log(src)
    })

}

export let movePhotoSelection = (e)=>{

        let width = $('.wrapper-ps').width()
        let x = e.pageX, $wrapperPS = $('.wrapper-ps');
        let result = Math.round(-100 / (width/x)) +59;
        if(result >= -20 || result <= -80) return;

        $('.photo-selection').css({left: result + 21 + '%'})
}
