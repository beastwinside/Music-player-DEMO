var bofang=document.getElementById("bofang");

var audio=document.getElementById("aud");
// 播放暂停切换功能
function  swit(){
	if(audio.paused)
		{audio.play();
			bofang.style.backgroundImage="url(on.png)"}
	else {audio.pause();
         bofang.style.backgroundImage="url(pause.png)"
}
}


bofang.addEventListener("click",swit);

