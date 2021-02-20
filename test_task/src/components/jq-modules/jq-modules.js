import {$} from "../../index";

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