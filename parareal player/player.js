var bofang=document.getElementById("bofang");//播放器切换变量
var nexts=document.getElementById("butn");//下一个按钮
var befores=document.getElementById("butb");//上一个按钮
var audio=document.getElementById("aud");//audio节点
var playlist=document.getElementById("playlist");//界面显示右边列表
var dl=document.getElementById("download")//下载功能按钮
var arrposition=0;//数组定位变量

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
function  ObjGuqu(name,dizhi){
	this.Name=name;
	this.DiZhi=dizhi;
}

var gequlist=new Array();
gequlist.push(new ObjGuqu('我杯茶','wbc.mp3'));
gequlist.push(new ObjGuqu('standbyme','standbyme.mp3'));
gequlist.push(new ObjGuqu('串烧金曲','chuanshao.mp3'));
gequlist.push(new ObjGuqu('必杀技','bishaji.mp3'));
gequlist.push(new ObjGuqu('爱与诚','ayc.mp3'));

// 删除某个一个对象
// gequlist=gequlist.slice(0,2).concat(gequlist.slice(3,gequlist.length));


var zy=document.getElementById("ziyuan");

// 切歌功能简陋实现
// 下一首
function nextsong(){
	if (arrposition!=gequlist.length) {
	arrposition++;
var aaa=gequlist[arrposition].DiZhi;
zy.setAttribute("src",aaa);
audio.load();
audio.play();
}else alert("已经是最后一首歌曲啦！");}


// 上一首
function beforesong(){
if (arrposition!=0) {
arrposition--;
var bbb=gequlist[arrposition].DiZhi;
zy.setAttribute("src", bbb)
audio.load();
audio.play();
}else alert("已经是第一首歌曲啦！");
}

//添加下载本首歌曲功能
function  downloadthis(){
	
	var x=gequlist[arrposition].DiZhi;

   dl.href=x;

}







// var listchild=playlist.children;

// listchild[1].style.cssText="background-color:red";


// 添加按钮集中处理位置
nexts.addEventListener("click",nextsong);
befores.addEventListener("click",beforesong);
dl.addEventListener("click",downloadthis);
audio.addEventListener("ended",function(){
	if(arrposition==gequlist.length-1)
		{arrposition=-1; nextsong();}
 else nextsong();});
// 注意addeventlisner的函数会先放在那里，因此要放在匿名函数中
// 不然就是在全局作用域执行

