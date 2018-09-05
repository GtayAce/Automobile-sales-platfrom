var ShowCarUI=$('#ShowCarUI');
var ShowPCOneCarmary=$('.PCOne');
var ShowPCTwoCarmary=$('.PCTwo');
var ShowPCThreeCarmary=$('.PCThree');
var ShowPCFourCarmary=$('.PCFour');

/*增加监听器*/
window.addEventListener('message', receiveMessage, false);

/*获取数据，用来判断是哪辆车哪个按钮被按下*/
function receiveMessage(event) {

	if(event.data=="Carmary")
	{
		ShowCarmyPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="PaLaDuo")
	{
		ShowPaLaDuoPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="HanLanDa")
	{
		ShowHanLanDaPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="LeiLing")
	{
		ShowLeiLingPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="YiZe")
	{
		ShowYiZePicture();
		message=event.data;//全局变量message
	}
	if(event.data=="ZhiXuan")
	{
		ShowZhiXuanPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="CRV")
	{
		ShowBenCRVPicture();
		console.log("sdfsdfsdfsdfsdfsdf");
		message=event.data;//全局变量message
	}
	if(event.data=="LingPai")
	{
		ShowLeiLingPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="SiYu")
	{
		ShowSiYuPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="YaGe")
	{
		ShowYaGePicture();
		message=event.data;//全局变量message
	}
	if(event.data=="GeShiTu")
	{
		ShowGeShiTuPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="AoDeiSai")
	{
		ShowAoDeSaiPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="HuiYang")
	{
		ShowHuiYangPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="CC")
	{
		ShowCCPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="cross")
	{
		ShowCrossPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="inset")
	{
		ShowinsetPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="TuRui")
	{
		ShowTuRuiPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="MaiTeng")
	{
		ShowMaiTengPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="tian")
	{
		ShowTianPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="guishi")
	{
		ShowGuiShiPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="qijun")
	{
		ShowqijunPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="xuanyi")
	{
		ShowxuanyiPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="loulan")
	{
		ShowloulanPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="GTR")
	{
		ShowGTRPicture();
		message=event.data;//全局变量message
	}
	
	
	if(event.data=="zhisheng")
	{
		ShowzhishengPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="fukesi")
	{
		ShowfukesiPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="jianianhua")
	{
		ShowjianianhuaPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="mengdiou")
	{
		ShowmengdiouPicture();
		message=event.data;//全局变量message
	}
	if(event.data=="tanxianzhe")
	{
		ShowtianxianzhePicture();
		message=event.data;//全局变量message
	}
	if(event.data=="furuisi")
	{
		ShowfuruisiPicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="BMW525i")
	{
		Show525iPicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="M6")
	{
		ShowM6Picture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="X6")
	{
		ShowX6Picture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="i8")
	{
		Showi8Picture();
		message=event.data;//全局变量message
	}
	if(event.data=="BMW2")
	{
		ShowBMW2Picture();
		message=event.data;//全局变量message
	}
	if(event.data=="BMW7")
	{
		ShowBMW7Picture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="URUS")
	{
		ShowURUSPicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="huracan")
	{
		ShowHurcanPicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="avent")
	{
		ShowAventPicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="cen")
	{
		ShowCenPicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="kayan")
	{
		
		ShowkayanPicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="Bao911")
	{
		Show911Picture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="Bao718")
	{
		Show718Picture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="missionE")
	{
		ShowMissionEPicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="Cayenne")
	{
		ShowCayennePicture();
		message=event.data;//全局变量message
	}
	
	if(event.data=="Pan")
	{
		ShowPanPicture();
		message=event.data;//全局变量message
	}
}



/*进去丰田凯美瑞汽车购买界面*/
function ShowCarmyPicture()
{
	/*大图的显示*/

	ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengCarmary001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
	
	
	//第一张显示原图
	
	ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengCarmary001.jpg)");
	ShowPCOneCarmary.css("background-repeat","no-repeat");
	ShowPCOneCarmary.css("background-size","118px 80px");
	
	
	//第二张小图

	ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/Carmary01.jpg)");
	ShowPCTwoCarmary.css("background-repeat","no-repeat");
	ShowPCTwoCarmary.css("background-size","120px 80px");
	
	
	//第三章小图
	
	ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/Carmary02.jpg)");
	ShowPCThreeCarmary.css("background-repeat","no-repeat");
	ShowPCThreeCarmary.css("background-size","120px 80px");
	
	//第四章小图
	
	ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/Carmary03.jpg)");
	ShowPCFourCarmary.css("background-repeat","no-repeat");
	ShowPCFourCarmary.css("background-size","120px 80px");
	
}
/*进去丰田凯美瑞汽车购买界面*/





/*进去丰田普拉多汽车购买界面*/
function ShowPaLaDuoPicture()
{
		/*大图的显示*/
	
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengPuLaDuo002.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengPuLaDuo002.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/PuLaDuo01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/PuLaDuo02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/PuLaDuo03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去丰田普拉多汽车购买界面*/


/*进去丰田汉兰达购买界面*/
function ShowHanLanDaPicture()
{
		/*大图的显示*/
	
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengHanLanDa003.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengHanLanDa003.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/HanLanDa01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/HanLanDa02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/HanLanDa03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去丰田汉兰达购买界面*/


/*进去丰田雷凌购买界面*/
function ShowLeiLingPicture()
{
		/*大图的显示*/
	
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengLeiLing004.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengLeiLing004.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/LeiLing01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/LeiLing02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/LeiLing03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去丰田雷凌购买界面*/



/*进去丰田奕泽购买界面*/
function ShowYiZePicture()
{
		/*大图的显示*/
	
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengYiZe005.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengYiZe005.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/YiZe01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/YiZe02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/YiZe03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去丰田奕泽购买界面*/

/*进去丰田致炫购买界面*/
function ShowZhiXuanPicture()
{
		/*大图的显示*/
	
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengZhiXuan006.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengZhiXuan006.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/ZhiXuan01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/ZhiXuan02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldTOYOTA/ZhiXuan03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}

/*进去丰田致炫购买界面*/


/*进去CRV购买界面*/
function ShowBenCRVPicture()
{
		/*大图的显示*/
	
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenCRV001.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenCRV001.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/CRV01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/CRV02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/CRV03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去CRV购买界面*/

/*进去凌派购买界面*/
function ShowLingPaiPicture()
{
		/*大图的显示*/
	
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenLingPai002.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenLingPai002.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","120px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/LingPai01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/LingPai02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/LingPai03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去本田凌派购买界面*/



/*进去本田思域购买界面*/
function ShowSiYuPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenSiYu003.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenSiYu003.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/SiYu01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/SiYu02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/SiYu03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去本田思域购买界面*/


/*进去本田雅阁购买界面*/
function ShowYaGePicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenYAGe004.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenYAGe004.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/YaGe.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/YaGe01.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/YaGe02.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去本田雅阁购买界面*/

/*进去本田歌诗图购买界面*/
function ShowGeShiTuPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenGeShiTu005.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenGeShiTu005.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/GeShiTu01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/GeShiTu02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/GeShiTu03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去本田歌诗图购买界面*/

/*进去本田奥德赛购买界面*/
function ShowAoDeSaiPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenAoDeSai006.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenAoDeSai006.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/AoDeSai01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/AoDeSai02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBenTian/AoDeSai03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去本田奥德赛购买界面*/


/*进去大众辉扬购买界面*/
function ShowHuiYangPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongHuiYang001.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongHuiYang001.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/HuiYang01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/HuiYang02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/HuiYang03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去大众辉扬购买界面*/

/*进去大众CC购买界面*/
function ShowCCPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongCC002.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongCC002.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/CC01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/CC02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/CC03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去大众CC购买界面*/


/*进去大众Cross购买界面*/
function ShowCrossPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongCrossCoupe003.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongCrossCoupe003.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/Cross01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/Cross02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/Cross03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去大众Cross购买界面*/

/*进去大众甲壳虫购买界面*/
function ShowinsetPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongInset004.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongInset004.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/inset01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/inset02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/inset03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去大众甲壳虫购买界面*/


/*进去大众途锐购买界面*/
function ShowTuRuiPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongTuRui005.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongTuRui005.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/TuRui01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/TuRui02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/TuRui03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去大众途锐购买界面*/

/*进去大众迈腾购买界面*/
function ShowMaiTengPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongMaiTeng006.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongMaiTeng006.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/MaiTeng01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/MaiTeng02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldDaZhong/MaiTeng03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去大众迈腾购买界面*/

/*进去日产天籁购买界面*/
function ShowTianPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanTianLai001.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanTianLai001.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/Tian01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/Tian02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/Tian03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去日产天籁购买界面*/

/*进去日产贵士购买界面*/
function ShowGuiShiPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanGuiShi002.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanGuiShi002.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/GuiShi01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/GuiShi02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/GuiShi03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去日产贵士购买界面*/

/*进去日产奇骏购买界面*/
function ShowqijunPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanQiJun004.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanQiJun004.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/QiJun01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/QiJun02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/QiJun03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去日产奇骏购买界面*/

/*进去日产轩逸购买界面*/
function ShowxuanyiPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanXuanYi005.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanXuanYi005.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/XuanYi01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/XuanYi02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/XuanYi03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去日产轩逸购买界面*/

/*进去日产楼兰购买界面*/
function ShowloulanPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanLouLan006.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanLouLan006.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/LouLan01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/LouLan02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/LouLan03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去日产楼兰购买界面*/


/*进去日产GTR购买界面*/
function ShowGTRPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanGTR003.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanGTR003.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/GTR01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/GTR02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldRiChan/GTR03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去日产GTR购买界面*/


/*进去福特致胜购买界面*/
function ShowzhishengPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeZhiSheng001.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeZhiSheng001.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Sheng01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Sheng02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Sheng03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去福特致胜购买界面*/



/*进去福特福克斯购买界面*/
function ShowfukesiPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeFocus002.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeFocus002.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/FuKeSi01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/FuKeSi02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/FuKeSi03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去福特福克斯购买界面*/

/*进去福特嘉年华购买界面*/
function ShowjianianhuaPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeJiaNianHua003.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeJiaNianHua003.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Jia01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Jia02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Jia03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去福特嘉年华购买界面*/



/*进去福特蒙迪欧购买界面*/
function ShowmengdiouPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeMengDiOu004.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeMengDiOu004.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Meng01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Meng02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Meng03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去福特蒙迪欧购买界面*/


/*进去探险者购买界面*/
function ShowtianxianzhePicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeTanXianZhe005.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeTanXianZhe005.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Tan01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Tan02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/Tan03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去探险者购买界面*/

/*进去福睿斯购买界面*/
function ShowfuruisiPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeFuRuiSi006.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeFuRuiSi006.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/FuRuiSi01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/FuRuiSi02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldFuTE/FuRuiSi03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去福睿斯购买界面*/

/*进去宝马525i购买界面*/
function Show525iPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW525i001.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW525i001.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW525i01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW525i02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW525i03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去宝马525i购买界面*/


/*进去宝马M6购买界面*/
function ShowM6Picture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWM6002.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWM6002.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMWM601.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMWM602.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMWM603.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去宝马M6购买界面*/

/*进去宝马X6购买界面*/
function ShowX6Picture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWX6003.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWX6003.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBMW/X601.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBMW/X602.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBMW/X603.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去宝马X6购买界面*/

/*进去宝马i8购买界面*/
function Showi8Picture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWi8004.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWi8004.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBMW/i801.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBMW/i802.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBMW/i803.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去宝马i8购买界面*/

/*进去宝马BMW2购买界面*/
function ShowBMW2Picture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW2005.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW2005.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW201.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW203.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去宝马BMW2购买界面*/


/*进去宝马BMW7购买界面*/
function ShowBMW7Picture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW7006.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW7006.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW701.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW702.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBMW/BMW703.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去宝马BMW7购买界面*/



/*进去兰博基尼URUS购买界面*/
function ShowURUSPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanURUS001.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanURUS001.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/URUS01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/URUS02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/URUS03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去兰博基尼URUS购买界面*/


/*进去兰博基尼Huracan购买界面*/
function ShowHurcanPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanHuracan002.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanHuracan002.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Hur01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Hur02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Hur03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去兰博基尼Huracan购买界面*/

/*进去兰博基尼Avent购买界面*/
function ShowAventPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanAventAdor003.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanAventAdor003.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Avent01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Avent02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Avent03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去兰博基尼Avent购买界面*/

/*进去兰博基尼Cen购买界面*/
function ShowCenPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanCentenario004.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanCentenario004.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Cen01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Cen02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Cen03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去兰博基尼Cen购买界面*/







/*进去保时捷卡宴购买界面*/
function ShowkayanPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoKaYan001.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoKaYan001.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/KaYan01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/KaYan02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/KaYan03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去保时捷卡宴购买界面*/

/*进去保时捷911购买界面*/
function Show911Picture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/Baotarget911002.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/Baotarget911002.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao91101.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao91102.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao91103.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去保时捷911购买界面*/


/*进去保时捷Pan购买界面*/
function ShowPanPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoPanamera003.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoPanamera003.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/pan01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/pan02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/pan03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去保时捷Pan购买界面*/

/*进去保时捷718购买界面*/
function Show718Picture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/Bao718004.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/Bao718004.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao71801.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao71802.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao71803.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去保时捷718购买界面*/

/*进去保时捷MissionE购买界面*/
function ShowMissionEPicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoMissionE005.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoMissionE005.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Mission01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Mission02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Mission03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去保时捷MissionE购买界面*/



/*进去保时捷Cayenne购买界面*/
function ShowCayennePicture()
{
		/*大图的显示*/
		ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoCayenne006.jpg)");
		ShowCarUI.css("background-repeat","no-repeat");
		ShowCarUI.css("background-size","480px 400px");
		
		
		//第一张显示原图
		
		ShowPCOneCarmary.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoCayenne006.jpg)");
		ShowPCOneCarmary.css("background-repeat","no-repeat");
		ShowPCOneCarmary.css("background-size","118px 80px");
		
		
		//第二张小图
	
		ShowPCTwoCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Cay01.jpg)");
		ShowPCTwoCarmary.css("background-repeat","no-repeat");
		ShowPCTwoCarmary.css("background-size","120px 80px");
		
		
		//第三章小图
		
		ShowPCThreeCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Cay02.jpg)");
		ShowPCThreeCarmary.css("background-repeat","no-repeat");
		ShowPCThreeCarmary.css("background-size","120px 80px");
		
		//第四章小图
		
		ShowPCFourCarmary.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Cay03.jpg)");
		ShowPCFourCarmary.css("background-repeat","no-repeat");
		ShowPCFourCarmary.css("background-size","120px 80px");
}
/*进去保时捷Cayenne购买界面*/




















/*丰田凯美瑞图片切换效果*/
function ShowCarmaryPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengCarmary001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCarmaryPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/Carmary01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCarmaryPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/Carmary02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCarmaryPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/Carmary03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function clickexchange()
{
	var $exchange=$('#exchange');
	$exchange.css("border","2px solid red");
}
/*丰田凯美瑞图片切换效果*/


/*显示普拉多的切换页面效果*/
function ShowPuLaDuoPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengPuLaDuo002.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowPuLaDuoPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/PuLaDuo01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowPuLaDuoPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/PuLaDuo02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowPuLaDuoPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/PuLaDuo03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示普拉多的切换页面效果*/


/*显示汉兰达的切换页面效果*/
function ShowHanLanDaPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengHanLanDa003.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHanLanDaPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/HanLanDa01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHanLanDaPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/HanLanDa02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHanLanDaPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/HanLanDa03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}


/*显示雷凌的切换页面效果*/
function ShowLeiLingPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengLeiLing004.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowLeiLingPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/LeiLing01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowLeiLingPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/LeiLing02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowLeiLingPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/LeiLing03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示雷凌的切换页面效果*/

/*显示奕泽的切换页面效果*/
function ShowYiZePictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengYiZe005.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowYiZePictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/YiZe01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowYiZePictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/YiZe02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowYiZePictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/YiZe03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示奕泽的切换页面效果*/



/*显示致炫的切换页面效果*/
function ShowZhiXuanPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/ToYoTaOfficialWebsite/FengZhiXuan006.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowZhiXuanPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/ZhiXuan01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowZhiXuanPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/ZhiXuan02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowZhiXuanPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldTOYOTA/ZhiXuan03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示致炫的切换页面效果*/


/*显示本田CRV的切换页面效果*/
function ShowCRVPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenCRV001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCRVPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/CRV01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCRVPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/CRV02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCRVPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/CRV03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示本田CRV的切换页面效果*/


/*显示凌派的切换页面效果*/
function ShowLingPaiPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenLingPai002.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowLingPaiPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/LingPai01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowLingPaiPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/LingPai02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowLingPaiPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/LingPai03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示凌派的切换页面效果*/



/*显示思域的切换页面效果*/
function ShowSiYuPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenSiYu003.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowSiYuPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/SiYu01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowSiYuPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/SiYu02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowSiYuPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/SiYu03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示思域的切换页面效果*/


/*显示雅阁的切换页面效果*/
function ShowYaGePictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenYAGe004.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowYaGePictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/YaGe.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowYaGePictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/YaGe01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowYaGePictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/YaGe02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示雅阁的切换页面效果*/


/*显示歌诗图的切换页面效果*/
function ShowGeShiTuPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenGeShiTu005.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowGeShiTuPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/GeShiTu01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowGeShiTuPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/GeShiTu02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowGeShiTuPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/GeShiTu03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示歌诗图的切换页面效果*/


/*显示奥德赛的切换页面效果*/
function ShowAoDeSaiPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BenTianOfficalWebsite/BenAoDeSai006.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowAoDeSaiPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/AoDeSai01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowAoDeSaiPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/AoDeSai02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowAoDeSaiPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBenTian/AoDeSai03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示奥德赛的切换页面效果*/




/*显示辉扬的切换页面效果*/
function ShowHuiYangPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DazhongHuiYang001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHuiYangPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/HuiYang01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHuiYangPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/HuiYang02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHuiYangPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/HuiYang03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示辉扬的切换页面效果*/



/*显示CC的切换页面效果*/
function ShowCCPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongHuiYang001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCCPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/CC01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCCPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/CC02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCCPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/CC03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示CC的切换页面效果*/



/*显示Cross的切换页面效果*/
function ShowCrossPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongCrossCoupe003.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCrossPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/Cross01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCrossPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/Cross02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCrossPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/Cross03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示Cross的切换页面效果*/



/*显示inset的切换页面效果*/
function ShowinsetPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongInset004.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowinsetPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/inset01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowinsetPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/inset02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowinsetPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/inset03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示inset的切换页面效果*/



/*显示TuRui的切换页面效果*/
function ShowTuRuiPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DazhongTuRui005.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowTuRuiPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/TuRui01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowTuRuiPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/TuRui02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowTuRuiPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/TuRui03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示TuRui的切换页面效果*/


/*显示maiteng的切换页面效果*/
function ShowmaitengPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/DaZhongOfficalWebsite/DaZhongMaiTeng006.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowmaitengPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/MaiTeng01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowmaitengPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/MaiTeng02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowmaitengPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldDaZhong/MaiTeng03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示maiteng的切换页面效果*/



/*显示天籁的切换页面效果*/
function ShowtianlaiPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanTianLai001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowtianlaiPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/Tian01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowtianlaiPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/Tian02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowtianlaiPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/Tian03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示天籁的切换页面效果*/



/*显示贵士的切换页面效果*/
function ShowguishiPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanGuiShi002.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowguishiPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/GuiShi01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowguishiPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/GuiShi02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowguishiPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/GuiShi03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示贵士的切换页面效果*/

/*显示奇骏的切换页面效果*/
function ShowqijunPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanQiJun004.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowqijunPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/QiJun01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowqijunPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/QiJun02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowqijunPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/QiJun03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示奇骏的切换页面效果*/



/*显示轩逸的切换页面效果*/
function ShowxuanyiPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanXuanYi005.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowxuanyiPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/XuanYi01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowxuanyiPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/XuanYi02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowxuanyiPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/XuanYi03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示轩逸的切换页面效果*/


/*显示楼兰的切换页面效果*/
function ShowloulanPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanLouLan006.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowloulanPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/LouLan01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowloulanPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/LouLan02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowloulanPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/LouLan03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示楼兰的切换页面效果*/


/*显示GTR的切换页面效果*/
function ShowGTRPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/RiChanOfficalWebsite/RiChanGTR003.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowGTRPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/GTR01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowGTRPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/GTR02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowGTRPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldRiChan/GTR03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示GTR的切换页面效果*/



/*显示福特致胜切换效果*/
function ShowzhishengPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeZhiSheng001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowzhishengPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Sheng01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowzhishengPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Sheng02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowzhishengPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Sheng03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示福特致胜切换效果*/


/*显示福特福克斯切换效果*/
function ShowfukesiPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeFocus002.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowfukesiPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/FuKeSi01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowfukesiPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/FuKeSi02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowfukesiPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/FuKeSi03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示福特福克斯切换效果*/

/*显示福特嘉年华切换效果*/
function ShowjianianhuaPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeJiaNianHua003.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowjianianhuaPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Jia01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowjianianhuaPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Jia02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowjianianhuaPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Jia03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示福特嘉年华切换效果*/


/*显示福特蒙迪欧切换效果*/
function ShowmengdiouPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeMengDiOu004.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowmengdiouPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Meng01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowmengdiouPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Meng02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowmengdiouPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Meng03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示福特蒙迪欧切换效果*/

/*显示福特探险者切换效果*/
function ShowtanxianzhePictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeTanXianZhe005.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowtanxianzhePictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Tan01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowtanxianzhePictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Tan02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowtanxianzhePictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/Tan03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示福特探险者切换效果*/


/*显示福特福睿斯切换效果*/
function ShowfuruisiPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/FuTeOfficalWebsite/FuTeFuRuiSi006.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowfuruisiPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/FuRuiSi01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowfuruisiPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/FuRuiSi02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowfuruisiPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldFuTE/FuRuiSi03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示福特福睿斯切换效果*/



/*显示宝马525i切换效果*/
function Show525iPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW525i001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show525iPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW525i01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show525iPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW525i02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show525iPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW525i03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示宝马525i切换效果*/


/*显示宝马M6切换效果*/
function ShowM6PictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWM6002.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowM6PictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMWM601.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowM6PictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMWM602.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowM6Pictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMWM603.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示宝马M6切换效果*/

/*显示宝马X6切换效果*/
function ShowX6PictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWX6003.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowX6PictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/X601.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowX6PictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/X602.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowX6Pictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/X603.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示宝马X6切换效果*/


/*显示宝马i8切换效果*/
function Showi8PictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMWi8004.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Showi8PictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/i801.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Showi8PictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/i802.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Showi8Pictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/i803.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示宝马i8切换效果*/

/*显示宝马BMW2切换效果*/
function ShowBMW2PictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW2005.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowBMW2PictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW201.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowBMW2PictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW203.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowBMW2Pictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示宝马BMW2切换效果*/


/*显示宝马BMW7切换效果*/
function ShowBMW7PictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BMWOfficalWebsite/BMW7006.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowBMW7PictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW701.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowBMW7PictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW702.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowBMW7Pictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBMW/BMW703.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示宝马BMW7切换效果*/


/*显示兰博基尼URUS切换效果*/
function ShowURUSPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanURUS001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowURUSPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/URUS01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowURUSPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/URUS02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowURUSPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/URUS03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示兰博基尼URUS切换效果*/




/*显示兰博基尼Hur切换效果*/
function ShowHurPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanHuracan002.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHurPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Hur01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHurPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Hur02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowHurPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Hur03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示兰博基尼Hur切换效果*/



/*显示兰博基尼Avent切换效果*/
function ShowAventPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanAventAdor003.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowAventPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Avent01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowAventPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Avent02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowAventPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Avent03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示兰博基尼Avent切换效果*/


/*显示兰博基尼Cen切换效果*/
function ShowCenPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/LanOfficalWebsite/LanCentenario004.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCenPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Cen01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCenPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Cen02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCenPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldLanBoJiNi/Cen03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示兰博基尼Cen切换效果*/


/*显示保时捷卡宴切换效果*/
function ShowkayanPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoKaYan001.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowkayanPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/BaoKaYan01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowkayanPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/BaoKaYan02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowkayanPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/BaoKaYan03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示保时捷卡宴切换效果*/


/*显示保时捷911切换效果*/
function Show911PictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/Baotarget911002.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show911PictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao91101.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show911PictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao91102.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show911Pictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao91103.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示保时捷911切换效果*/


/*显示保时捷Pan切换效果*/
function ShowPanPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoPanamera003.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowPanPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/pan01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowPanPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/pan02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowPanPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/pan03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示保时捷Pan切换效果*/

/*显示保时捷718切换效果*/
function Show718PictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/Bao718004.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show718PictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao71801.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show718PictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao71802.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function Show718Pictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Bao71803.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示保时捷718切换效果*/


/*显示保时捷MissionE切换效果*/
function ShowMissionEPictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoMissionE005.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowMissionEPictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Mission01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowMissionEPictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Mission02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowMissionEPictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Mission03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示保时捷MissionE切换效果*/

/*显示保时捷Cayenne 切换效果*/
function ShowCayennePictureOne()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/OfficalWebsite/BaoShiJieOfficalWebsite/BaoCayenne006.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCayennePictureTwo()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Cay01.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCayennePictureThree()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Cay02.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
function ShowCayennePictureforth()
{
	var ShowCarUI=$('#ShowCarUI');
	ShowCarUI.css("background-image","url(../img/ShopCar/SoldBaoShiJie/Cay03.jpg)");
	ShowCarUI.css("background-repeat","no-repeat");
	ShowCarUI.css("background-size","480px 400px");
}
/*显示保时捷Cayenne 切换效果*/








/*点击每一张图片的显示结果*/
ShowCarUI.hover(function()
{
	if(message=="Carmary")
	ShowCarmaryPictureOne();
	else if(message=="PaLaDuo")
	ShowPuLaDuoPictureOne();
	else if(message=="HanLanDa")
	 ShowHanLanDaPictureOne();
	else if(message=="LeiLing")
	ShowLeiLingPictureOne();
	else if(message=="YiZe")
	ShowYiZePictureOne();
	else if(message=="ZhiXuan")
	ShowZhiXuanPictureOne();
	else if(message=="CRV")
	ShowCRVPictureOne();
	else if(message=="LingPai")
	ShowLingPaiPictureOne();
	else if(message=="SiYu")
	ShowSiYuPictureOne();
	else if(message=="YaGe")
	ShowYaGePictureOne();
	else if(message=="GeShiTu")
	ShowGeShiTuPictureOne();
	else if(message=="AoDeiSai")
	ShowAoDeSaiPictureOne();
	else if(message=="HuiYang")
	ShowHuiYangPictureOne();
	else if(message=="CC")
	ShowCCPictureOne();
	else if(message=="cross")
	ShowCrossPictureOne();
	else if(message=="inset")
	ShowinsetPictureOne();
	else if(message=="TuRui")
	ShowTuRuiPictureOne();
	else if(message=="MaiTeng")
	ShowmaitengPictureOne();
	else if(message=="tian")
	ShowtianlaiPictureOne();
	else if(message=="guishi")
	ShowguishiPictureOne();
	else if(message=="qijun")
	ShowqijunPictureOne();
	else if(message=="xuanyi")
	ShowxuanyiPictureOne();
	else if(message=="loulan")
	ShowloulanPictureOne();
	else if(message=="GTR")
	ShowGTRPictureOne();
	else if(message=="zhisheng")
	ShowZhiXuanPictureOne();
	else if(message=="fukesi")
	ShowfukesiPictureOne();
	else if(message=="jianianhua")
	ShowjianianhuaPictureOne();
	else if(message=="mengdiou")
	ShowmengdiouPictureOne();
	else if(message=="tanxianzhe")
	ShowtanxianzhePictureOne();
	else if(message=="furuisi")
	ShowfuruisiPictureOne();
	else if(message=="BMW525i")
	Show525iPictureOne();
	else if(message=="M6")
	ShowM6PictureOne();
	else if(message=="X6")
	ShowX6PictureOne();
	else if(message=="i8")
	Showi8PictureOne();
	else if(message=="BMW2")
	ShowBMW2PictureOne();
	else if(message=="BMW7")
	ShowBMW7PictureOne();
	else if(message=="URUS")
	ShowURUSPictureOne();
	else if(message=="huracan")
	ShowHurPictureOne();
	else if(message=="avent")
	ShowAventPictureOne();
	else if(message=="cen")
	ShowCenPictureOne();
	else if(message=="kayan")
	ShowkayanPictureOne();
	else if(message=="Bao911")
	Show911PictureOne();
	else if(message=="Bao718")
	Show718PictureOne();
	else if(message=="missionE")
	ShowMissionEPictureOne();
	else if(message=="Cayenne")
	ShowCayennePictureOne()
	else if(message=="Pan")
	ShowPanPictureOne();
});
ShowPCOneCarmary.hover(function()
{
	if(message=="Carmary")
	ShowCarmaryPictureOne();
	if(message=="PaLaDuo")
	ShowPuLaDuoPictureOne();
	else if(message=="HanLanDa")
	ShowHanLanDaPictureOne();
	else if(message=="LeiLing")
	ShowLeiLingPictureOne();
	else if(message=="YiZe")
	ShowYiZePictureOne();
	else if(message=="ZhiXuan")
	ShowZhiXuanPictureOne();
	else if(message=="CRV")
	ShowCRVPictureOne();
	else if(message=="LingPai")
	ShowLingPaiPictureOne();
	else if(message=="SiYu")
	ShowSiYuPictureOne();
	else if(message=="YaGe")
	ShowYaGePictureOne();
	else if(message=="GeShiTu")
	ShowGeShiTuPictureOne();
	else if(message=="AoDeiSai")
	ShowAoDeSaiPictureOne();
	else if(message=="HuiYang")
	ShowHuiYangPictureOne();
	else if(message=="CC")
	ShowCCPictureOne();
	else if(message=="cross")
	ShowCrossPictureOne();
	else if(message=="inset")
	ShowinsetPictureOne();
	else if(message=="TuRui")
	ShowTuRuiPictureOne();
	else if(message=="MaiTeng")
	ShowmaitengPictureOne();
	else if(message=="tian")
	ShowtianlaiPictureOne();
	else if(message=="guishi")
	ShowguishiPictureOne();
	else if(message=="qijun")
	ShowqijunPictureOne();
	else if(message=="xuanyi")
	ShowxuanyiPictureOne();
	else if(message=="loulan")
	ShowloulanPictureOne();
	else if(message=="GTR")
	ShowGTRPictureOne();
	else if(message=="zhisheng")
	ShowZhiXuanPictureOne();
	else if(message=="fukesi")
	ShowfukesiPictureOne();
	else if(message=="jianianhua")
	ShowjianianhuaPictureOne();
	else if(message=="mengdiou")
	ShowmengdiouPictureOne();
	else if(message=="tanxianzhe")
	ShowtanxianzhePictureOne();
	else if(message=="furuisi")
	ShowfuruisiPictureOne();
	else if(message=="BMW525i")
	Show525iPictureOne();
	else if(message=="M6")
	ShowM6PictureOne();
	else if(message=="X6")
	ShowX6PictureOne();
	else if(message=="i8")
	Showi8PictureOne();
	else if(message=="BMW2")
	ShowBMW2PictureOne();
	else if(message=="BMW7")
	ShowBMW7PictureOne();
	else if(message=="URUS")
	ShowURUSPictureOne();
	else if(message=="huracan")
	ShowHurPictureOne();
	else if(message=="avent")
	ShowAventPictureOne();
	else if(message=="cen")
	ShowCenPictureOne();
	else if(message=="kayan")
	ShowkayanPictureOne();
	else if(message=="Bao911")
	Show911PictureOne();
	else if(message=="Bao718")
	Show718PictureOne();
	else if(message=="missionE")
	ShowMissionEPictureOne();
	else if(message=="Cayenne")
	ShowCayennePictureOne()
	else if(message=="Pan")
	ShowPanPictureOne();
});
ShowPCTwoCarmary.hover(function()
{
	if(message=="Carmary")
	ShowCarmaryPictureTwo();
	else if(message=="PaLaDuo")
	ShowPuLaDuoPictureTwo();
	else if(message=="HanLanDa")
	ShowHanLanDaPictureTwo();
	else if(message=="LeiLing")
	ShowLeiLingPictureTwo();
	else if(message=="YiZe")
	ShowYiZePictureTwo();
	else if(message=="ZhiXuan")
	ShowZhiXuanPictureTwo();
	else if(message=="CRV")
	ShowCRVPictureTwo();
	else if(message=="LingPai")
	ShowPictureTwo();
	else if(message=="SiYu")
	ShowSiYuPictureTwo();
	else if(message=="YaGe")
	ShowYaGePictureTwo();
	else if(message=="GeShiTu")
	ShowGeShiTuPictureTwo();
	else if(message=="AoDeiSai")
	ShowAoDeSaiPictureTwo();
	else if(message=="HuiYang")
	ShowHuiYangPictureTwo();
	else if(message=="CC")
	ShowCCPictureTwo();
	else if(message=="cross")
	ShowCrossPictureTwo();
	else if(message=="inset")
	ShowinsetPictureTwo();
	else if(message=="TuRui")
	ShowTuRuiPictureTwo();
	else if(message=="MaiTeng")
	ShowmaitengPictureTwo();
	else if(message=="tian")
	ShowtianlaiPictureTwo();
	else if(message=="guishi")
	ShowguishiPictureTwo();
	else if(message=="qijun")
	ShowqijunPictureTwo();
	else if(message=="xuanyi")
	ShowxuanyiPictureTwo();
	else if(message=="loulan")
	ShowloulanPictureTwo();
	else if(message=="GTR")
	ShowGTRPictureTwo();
	else if(message=="zhisheng")
	ShowZhiXuanPictureTwo();
	else if(message=="fukesi")
	ShowfukesiPictureTwo();
	else if(message=="jianianhua")
	ShowjianianhuaPictureTwo();
	else if(message=="mengdiou")
	ShowmengdiouPictureTwo();
	else if(message=="tanxianzhe")
	ShowtanxianzhePictureTwo();
	else if(message=="furuisi")
	ShowfuruisiPictureTwo();
	else if(message=="BMW525i")
	Show525iPictureTwo();
	else if(message=="M6")
	ShowM6PictureTwo();
	else if(message=="X6")
	ShowX6PictureTwo();
	else if(message=="i8")
	Showi8PictureTwo();
	else if(message=="BMW2")
	ShowBMW2PictureTwo();
	else if(message=="BMW7")
	ShowBMW7PictureTwo();
	else if(message=="URUS")
	ShowURUSPictureTwo();
	else if(message=="huracan")
	ShowHurPictureTwo();
	else if(message=="avent")
	ShowAventPictureTwo();
	else if(message=="cen")
	ShowCenPictureTwo();
	else if(message=="kayan")
	ShowkayanPictureTwo();
	else if(message=="Bao911")
	Show911PictureTwo();
	else if(message=="Bao718")
	Show718PictureTwo();
	else if(message=="missionE")
	ShowMissionEPictureTwo();
	else if(message=="Cayenne")
	ShowCayennePictureTwo()
	else if(message=="Pan")
	ShowPanPictureTwo();
});
ShowPCThreeCarmary.hover(function()
{
	if(message=="Carmary")
	ShowCarmaryPictureThree();
	else if(message=="PaLaDuo")
	ShowPuLaDuoPictureThree();
	else if(message=="HanLanDa")
	ShowHanLanDaPictureThree();
	else if(message=="LeiLing")
	ShowLeiLingPictureThree();
	else if(message=="YiZe")
	ShowYiZePictureThree();
	else if(message=="ZhiXuan")
	ShowZhiXuanPictureThree();
	else if(message=="CRV")
	ShowCRVPictureThree();
	else if(message=="LingPai")
	ShowLingPaiPictureThree();
	else if(message=="SiYu")
	ShowSiYuPictureThree();
	else if(message=="YaGe")
	ShowYaGePictureThree();
	else if(message=="GeShiTu")
	ShowGeShiTuPictureThree();
	else if(message=="AoDeiSai")
	ShowAoDeSaiPictureThree();
	else if(message=="HuiYang")
	ShowHuiYangPictureThree();
	else if(message=="CC")
	ShowCCPictureThree();
	else if(message=="cross")
	ShowCrossPictureThree();
	else if(message=="inset")
	ShowinsetPictureThree();
	else if(message=="TuRui")
	ShowTuRuiPictureThree();
	else if(message=="MaiTeng")
	ShowmaitengPictureThree();
	else if(message=="tian")
	ShowtianlaiPictureThree();
	else if(message=="guishi")
	ShowguishiPictureThree();
	else if(message=="qijun")
	ShowqijunPictureThree();
	else if(message=="xuanyi")
	ShowxuanyiPictureThree();
	else if(message=="loulan")
	ShowloulanPictureThree();
	else if(message=="GTR")
	ShowGTRPictureThree();
	else if(message=="zhisheng")
	ShowZhiXuanPictureThree();
	else if(message=="fukesi")
	ShowfukesiPictureThree();
	else if(message=="jianianhua")
	ShowjianianhuaPictureThree();
	else if(message=="mengdiou")
	ShowmengdiouPictureThree();
	else if(message=="tanxianzhe")
	ShowtanxianzhePictureThree();
	else if(message=="furuisi")
	ShowfuruisiPictureThree();
	else if(message=="BMW525i")
	Show525iPictureThree();
	else if(message=="M6")
	ShowM6PictureThree();
	else if(message=="X6")
	ShowX6PictureThree();
	else if(message=="i8")
	Showi8PictureThree();
	else if(message=="BMW2")
	ShowBMW2PictureThree();
	else if(message=="BMW7")
	ShowBMW7PictureThree();
	else if(message=="URUS")
	ShowURUSPictureThree();
	else if(message=="huracan")
	ShowHurPictureThree();
	else if(message=="avent")
	ShowAventPictureThree();
	else if(message=="cen")
	ShowCenPictureThree();
	else if(message=="kayan")
	ShowkayanPictureThree();
	else if(message=="Bao911")
	Show911PictureThree();
	else if(message=="Bao718")
	Show718PictureThree();
	else if(message=="missionE")
	ShowMissionEPictureThree();
	else if(message=="Cayenne")
	ShowCayennePictureThree();
	else if(message=="Pan")
	ShowPanPictureThree();
});
ShowPCFourCarmary.hover(function()
{
	if(message=="Carmary")
	ShowCarmaryPictureforth();
	else if(message=="PaLaDuo")
	ShowPuLaDuoPictureforth();
	else if(message=="HanLanDa")
	ShowHanLanDaPictureforth();
	else if(message=="LeiLing")
	ShowLeiLingPictureforth();
	else if(message=="YiZe")
	ShowYiZePictureforth();
	else if(message=="ZhiXuan")
	ShowZhiXuanPictureforth();
	else if(message=="CRV")
	ShowCRVPictureforth();
	else if(message=="LingPai")
	ShowLingPaiPictureforth();
	else if(message=="SiYu")
	ShowSiYuPictureforth();
	else if(message=="YaGe")
	ShowYaGePictureforth();
	else if(message=="GeShiTu")
	ShowGeShiTuPictureforth();
	else if(message=="AoDeiSai")
	ShowAoDeSaiPictureforth();
	else if(message=="HuiYang")
	ShowHuiYangPictureforth();
	else if(message=="CC")
	ShowCCPictureforth();
	else if(message=="cross")
	ShowCrossPictureforth();
	else if(message=="inset")
	ShowinsetPictureforth();
	else if(message=="TuRui")
	ShowTuRuiPictureforth();
	else if(message=="MaiTeng")
	ShowmaitengPictureforth();
	else if(message=="tian")
	ShowtianlaiPictureforth();
	else if(message=="guishi")
	ShowguishiPictureforth();
	else if(message=="qijun")
	ShowqijunPictureforth();
	else if(message=="xuanyi")
	ShowxuanyiPictureforth();
	else if(message=="loulan")
	ShowloulanPictureforth();
	else if(message=="GTR")
	ShowGTRPictureforth();
	else if(message=="zhisheng")
	ShowZhiXuanPictureforth();
	else if(message=="fukesi")
	ShowfukesiPictureforth();
	else if(message=="jianianhua")
	ShowjianianhuaPictureforth();
	else if(message=="mengdiou")
	ShowmengdiouPictureforth();
	else if(message=="tanxianzhe")
	ShowtanxianzhePictureforth();
	else if(message=="furuisi")
	ShowfuruisiPictureforth();
	else if(message=="BMW525i")
	Show525iPictureforth();
	else if(message=="M6")
	ShowM6Pictureforth();
	else if(message=="X6")
	ShowX6Pictureforth();
	else if(message=="i8")
	Showi8Pictureforth();
	else if(message=="BMW2")
	ShowBMW2Pictureforth();
	else if(message=="BMW7")
	ShowBMW7Pictureforth();
	else if(message=="URUS")
	ShowURUSPictureforth();
	else if(message=="huracan")
	ShowHurPictureforth();
	else if(message=="avent")
	ShowAventPictureforth();
	else if(message=="cen")
	ShowCenPictureforth();
	else if(message=="kayan")
	ShowkayanPictureforth();
	else if(message=="Bao911")
	Show911Pictureforth();
	else if(message=="Bao718")
	Show718Pictureforth();
	else if(message=="missionE")
	ShowMissionEPictureforth();
	else if(message=="Cayenne")
	ShowCayennePictureforth();
	else if(message=="Pan")
	ShowPanPictureforth();
});
/*点击每一张图片的显示结果*/

