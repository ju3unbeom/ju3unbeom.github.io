function swf(src,w,h){
	html = '';
	html += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="param" width="'+w+'" height="'+h+'">';
	html += '<param name="movie" value="'+src+'">';
	html += '<param name="quality" value="high">';
	html += '<param name="menu" value="false">';
	html += '<embed src="'+src+'" quality="high" menu="false" width="'+w+'" height="'+h+'" swliveconnect="true" id="param" name="param" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed>';
	html += '<\/object>';
	document.write(html);
}

function swf1(src,w,h){
	html = '';
	html += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="param" width="'+w+'" height="'+h+'">';
	html += '<param name="movie" value="'+src+'">';
	html += '<param name="wmode" value="transparent">';
	html += '<param name="quality" value="high">';
	html += '<param name="menu" value="false">';
	html += '<embed src="'+src+'" quality="high" wmode="transparent" menu="false" width="'+w+'" height="'+h+'" swliveconnect="true" id="param" name="param" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed>';
	html += '<\/object>';
	document.write(html);
}

function swf2(src,w,h){
	html = '';
	html += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="param" width="'+w+'%" height="'+h+'">';
	html += '<param name="movie" value="'+src+'">';
	html += '<param name="wmode" value="transparent">';
	html += '<param name="quality" value="high">';
	html += '<param name="menu" value="false">';
	html += '<embed src="'+src+'" quality="high" wmode="transparent" menu="false" width="'+w+'%" height="'+h+'" swliveconnect="true" id="param" name="param" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed>';
	html += '<\/object>';
	document.write(html);
}