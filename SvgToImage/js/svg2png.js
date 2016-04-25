

function saveFile(data, filename){
  	var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  	save_link.href = data;
    save_link.download = filename;

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
}

function svg2canvs(content){

    var canvasEle = document.createElement("canvas");
    canvg(canvasEle, content,{ ignoreMouse: true, ignoreAnimation: true });
    var context = canvasEle.getContext('2d');
    //3. 图片导出为 png 格式
    var imgData = canvasEle.toDataURL("image/png");
    //.replace("image/png", "image/octet-stream");
    return imgData;
}

//'<svg version="1.1" viewBox="0 0 14 16" >' + content + "</svg>"