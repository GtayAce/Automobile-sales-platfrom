<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta charset="utf-8" />
		<title>日产汽车官方网站</title>
		
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome-ie7.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome-ie7.min.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="../../css/OfficalWebsite/RiChan.css">
		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
		<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
		<link rel="stylesheet" href="../../css/style.css">
	</head>
	
<body>
	<div class="Logo">
	</div>

	<nav>
		<ul class="main">
			<li><a href="#">Home</a>
			</li>
			<li><a href="#">contact</a>
			</li>
			<li><a href="#">works</a>
			</li>
			<li><a href="#">team</a>
			</li>
			<li><a href="../HTML/main.jsp">BackTo</a>
			</li>
		</ul>
	</nav>
   
	 
	 
	 
	 <div class="ListOfCar">
		 
			<div class="RiTianLai">
				 <span id="TianLai">日产&nbsp;&nbsp;天籁</span>
				 <span id="TianLaiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="TianLaiPricenumber">17.45万元</span></span>
				<button  class="btn btn-success" type="button" id="buttomone" >立即购买</button>
			</div>
			
			
			<div class="RiGuiShi">
				<span id="GuiShi">日产&nbsp;&nbsp;贵士</span>
				<span id="GuiShiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="GuiShiPricenumber">43.21万元</span></span>
				<button  class="btn btn-success" type="button" id="buttomTwo" >立即购买</button>
			</div>
			
			
			<div class="RiQiJun">
				<span id="QiJun">日产&nbsp;&nbsp;奇骏</span>
				<span id="QiJunPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="QiJunPricenumber">17.59万元</span></span>
			<button  class="btn btn-success" type="button" id="buttomThree" >立即购买</button>
			</div>
			
			
			<div class="RiXuanYi">
				<span id="XuanYi">日产&nbsp;&nbsp;轩逸</span>
				<span id="XuanYiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="XuanYiPricenumber">12.56万元</span></span>
				<button  class="btn btn-success" type="button" id="buttomfour" >立即购买</button>
			</div>
			
			
			<div class="RiLouLan">
				<span id="LouLan">日产&nbsp;&nbsp;楼兰</span>
				<span id="LouLanPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="LouLanPricenumber">25.48万元</span></span>
			<button  class="btn btn-success" type="button" id="buttomfive" >立即购买</button>
			</div>
			
			
			
			<div class="RiGTR">
				<span id="GTR">日产&nbsp;&nbsp;GTR</span>
				<span id="GTRPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="GTRPricenumber">170.23万元</span></span>
			<button  class="btn btn-success" type="button" id="buttomsix" >立即购买</button>
			</div>
			
			
	 </div>

		<script>
			$Tian=$("#buttomone");
			$GuiShi=$("#buttomTwo");
			$QiJun=$("#buttomThree");
			$XuanYi=$("#buttomfour");
			$LouLan=$("#buttomfive");
			$GTR=$("#buttomsix");
			
			/*点击天籁立即购买按钮*/
			$Tian.click(function()
			{
				var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=19');
				setTimeout(function()
				{
					popup.postMessage('tian', '*');
				},0);
			});
			
			
			/*点击贵士立即购买按钮*/
			$GuiShi.click(function()
			{
				var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=20');
				setTimeout(function()
				{
					popup.postMessage('guishi', '*');
				},0);
			});
			
			/*点击奇骏立即购买按钮*/
			$QiJun.click(function()
			{
				var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=21');
				setTimeout(function()
				{
					popup.postMessage('qijun', '*');
				},0);
			});
			
			
			
			/*点击轩逸立即购买按钮*/
			$XuanYi.click(function()
			{
				var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=22');
				setTimeout(function()
				{
					popup.postMessage('xuanyi', '*');
				},0);
			});
			
			
			
			/*点击楼兰立即购买按钮*/
			$LouLan.click(function()
			{
				var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=23');
				setTimeout(function()
				{
					popup.postMessage('loulan', '*');
				},0);
			});
			
			
			
			/*点击GTR立即购买按钮*/
			$GTR.click(function()
			{
				var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=24');
				setTimeout(function()
				{
					popup.postMessage('GTR', '*');
				},0);
			});
			
		</script>

</body>



	<script type="text/javascript" src="../../jQuery/jquery-3.0.0.js"></script>
	<script src="../../bootstrap/js/bootstrap.min.js"></script>
</html>