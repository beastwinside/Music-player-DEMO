var bofang=document.getElementById("bofang");//播放器切换变量
var nexts=document.getElementById("butn");//下一个按钮
var befores=document.getElementById("butb");//上一个按钮
var audio=document.getElementById("aud");//audio节点
var playlist=document.getElementById("playlist").children;//界面显示右边列表
var dl=document.getElementById("download")//下载功能按钮
var geshou=document.getElementById("author");//获取歌手名
var gequmingzi=document.getElementById("songname");
var arrposition=0;//数组定位变量

geshou.innerText="陈奕迅";
gequmingzi.innerText="我杯茶";


audio.volume=0.3;/初始音量小一些/

// 播放暂停切换功能
function  swit(){
	if(audio.paused)
		{audio.play();
			bofang.style.backgroundImage="url(on.png)"}
	else {audio.pause();
         bofang.style.backgroundImage="url(pause.png)"
}
}
// 暂停播放切换
bofang.addEventListener("click",swit);

	
// 获取audio

// 定义歌曲信息对象
function  ObjGuqu(sname,dizhi,aname){
	this.Sname=sname;
	this.DiZhi=dizhi;
	this.Aname=aname;
}

var gequlist=new Array();
gequlist.push(new ObjGuqu('我杯茶','wbc.mp3','陈奕迅'));
gequlist.push(new ObjGuqu('standbyme','standbyme.mp3','shinee'));
gequlist.push(new ObjGuqu('串烧金曲','chuanshao.mp3','陈奕迅'));
gequlist.push(new ObjGuqu('必杀技','bishaji.mp3','古巨基'));
gequlist.push(new ObjGuqu('爱与诚','ayc.mp3','古巨基'));

// 删除某个一个对象
// gequlist=gequlist.slice(0,2).concat(gequlist.slice(3,gequlist.length));


var zy=document.getElementById("ziyuan");

// 切歌功能简陋实现
// 下一首
function nextsong(){
	if (arrposition!=gequlist.length-1) {
	arrposition++;
var aaa=gequlist[arrposition].DiZhi;
zy.setAttribute("src",aaa);
bofang.style.backgroundImage="url(on.png)"
audio.load();
audio.play();
}else alert("已经是最后一首歌曲啦！");
}


// 上一首
function beforesong(){
if (arrposition!=0) {
arrposition--;
var bbb=gequlist[arrposition].DiZhi;
zy.setAttribute("src", bbb)
bofang.style.backgroundImage="url(on.png)"
audio.load();
audio.play();
}else alert("已经是第一首歌曲啦！");
}

//添加下载本首歌曲功能
function  downloadthis(){
	
	var x=gequlist[arrposition].DiZhi;

   dl.href=x;

}



// 音量条控件
document.getElementsByClassName('slider')[0].onclick =
 function(e){
  audio.volume = e.offsetX/645.11;
  document.getElementById('slidbar').style.width = e.offsetX+'px' ;
}





// 显示播放时间
setInterval(function(){
var all=audio.currentTime;
all=Math.floor(all);
var minute=Math.floor(all/60);
var second=all%60;

var aall=audio.duration;
all=Math.floor(aall);
var aminute=Math.floor(aall/60);
var asecond=all%60;
var showtime=minute+":"+second+"/"+aminute+":"+asecond;
document.getElementById("time").innerText=showtime;

}, 500);


// 列表显示当前播放,以及歌手歌名
function now(){

playlist[arrposition].style.cssText="background-color:red";
if(arrposition==gequlist.length-1)
{	playlist[arrposition-1].style.cssText=
	"background-color:black";
	geshou.innerText=gequlist[arrposition].Aname;
gequmingzi.innerText=gequlist[arrposition].Sname;
}



else if(arrposition==0)
	;
else playlist[arrposition-1].style.cssText=
	"background-color:black";
 playlist[arrposition+1].style.cssText=
	"background-color:black";
	geshou.innerText=gequlist[arrposition].Aname;
gequmingzi.innerText=gequlist[arrposition].Sname;


}

setInterval(now, 100);


// var listchild=playlist.children;

// listchild[1].style.cssText="background-color:red";


// 添加按钮集中处理位置
nexts.addEventListener("click",nextsong);
befores.addEventListener("click",beforesong);
dl.addEventListener("click",downloadthis);



//顺序播放
audio.addEventListener("ended",function(){
	if(arrposition==gequlist.length-1)
		{arrposition=-1; nextsong();}
 else nextsong();});
// 注意addeventlisner的函数会先放在那里，因此要放在匿名函数中
// 不然就是在全局作用域执行

