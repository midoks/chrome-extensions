(function(){
//
//console.log('ooo');


function utf16to8(str) {
    var out, i, len, c;  
    out = "";  
    len = str.length;  
    for(i = 0; i < len; i++) {  
    c = str.charCodeAt(i);  
    if ((c >= 0x0001) && (c <= 0x007F)) {  
        out += str.charAt(i);  
    } else if (c > 0x07FF) {  
        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
        out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));  
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));  
    } else {  
        out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));  
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));  
    }  
    }  
    return out;  
} 

function resizePos(){

    var height = $(window).height();
    var width = $(window).width();

    //console.log(height,width);

    $('#midoks_rand_page_qrcode').css({
        'position':'fixed',
        'left':0,
        'top':0,
        'z-index':100,
        'width':width,
        'height':height,
        'background':'#fff',
        //'opacity':'0.4',
    });

    $('#midoks_rand_page_qrcode .qrcode').css({
        'position':'fixed',
        'top': ( height - 200 ) / 2,
        'left' : ( width -  200 ) / 2,
        'z-index':101,
    });

    $('#midoks_rand_page_qrcode .close').css({
        'position':'fixed',
        'border-radius':15,
        'font-size':12,
        'padding-top':15,
        'width':40,
        'height':35,
        'text-align':'center',
        'top': ( height - 35 ) / 2,
        'left' : ( width -  40 ) / 2,
        'z-index':102,
        'color':'#fff',
        'background':'#000',
        'cursor':'pointer',
    });
}

function makeQrcode(content){
    $('body').append('<div id="midoks_rand_page_qrcode"><div class="qrcode"></div><div class="close">close</div></div>');

    resizePos();
    $(window).resize(function(){
        resizePos();
    });
    
    var v = utf16to8(content);
    $('#midoks_rand_page_qrcode .qrcode').qrcode({width:200,height:200,correctLevel:0,text:v});

    $('#midoks_rand_page_qrcode .close').bind('click', function(){
        $('#midoks_rand_page_qrcode').remove();
    });
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    console.log(request);
    if (typeof request.v != "undefined"){
        makeQrcode(request.v);
        sendResponse({response: "ok"});
    } else {
        sendResponse({}); // snub them.
    }
});
//
})();


