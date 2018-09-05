<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta charset="utf-8" />
		<title>本田汽车官方网站</title>
		
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome-ie7.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome-ie7.min.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="../../css/OfficalWebsite/BenTian.css">
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
			<div class="BenCRV">
				 <span id="CRV">本田CRV&nbsp;&nbsp;&nbsp;2.0L 净致版</span>
				 <span id="CRVPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="CRVPricenumber">25.98万元</span></span>
				 <button  class="btn btn-success" type="button" id="buttomone" >立即购买</button>
			</div>
			
			
			<div class="BenLingPai">
				<span id="LingPai">本田凌派&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;豪华版</span>
				<span id="LingPaiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="LingPaiPricenumber">12.48万元</span></span>
				<button  class="btn btn-success" type="button" id="buttomTwo" >立即购买</button>
			</div>
			
			<div class="BenSiYu">
				<span id="SiYu">本田思域&nbsp;&nbsp;&nbsp;180TURBO&nbsp;&nbsp;舒适版</span>
				<span id="SiYuPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="SiYuPricenumber">13.89万元</span></span>
				<button  class="btn btn-success" type="button" id="buttomThree" >立即购买</button>
			</div>
			
			
			<div class="BenYaGe">
				<span id="YaGe">本田雅阁&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;锐尊版</span>
				<span id="YaGePrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="YaGePricenumber">27.89万元</span></span>
			<button  class="btn btn-success" type="button" id="buttomfour" >立即购买</button>
			</div>
			
			
			<div class="BenGeShiTu">
				<span id="GeShiTu">本田歌诗图&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;至享版</span>
				<span id="GeShiTuPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="GeShiTuPricenumber">30.89万元</span></span>
				<button  class="btn btn-success" type="button" id="buttomfive" >立即购买</button>
			</div>
			
			<div class="BenAODeSai">
				<span id="AODeSai">本田奥德赛&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;至享版</span>
				<span id="AODeSaiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="AODeSaiPricenumber">30.89万元</span></span>
				<button  class="btn btn-success" type="button" id="buttomsix" >立即购买</button>
			</div>
			
			
	 </div>

<script>
	$BenCRV=$("#buttomone");
	$BenLingPai=$("#buttomTwo");
	$BenSiYu=$("#buttomThree");
	$BenYaGe=$("#buttomfour");
	$BenGeShiTu=$("#buttomfive");
	$BenAoDeiSai=$("#buttomsix");
	
	
	
	/*点击本田CRV立即购买按钮*/
	$BenCRV.click(function()
	{
		var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=7');
		setTimeout(function()
		{
			popup.postMessage('CRV', '*');
		},0);
	});
	
	/*点击凌派立即购买按钮*/
	$BenLingPai.click(function()
	{
		var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=8');
		setTimeout(function()
		{
			popup.postMessage('LingPai', '*');
		},0);
	});
	
	/*点击思域立即购买按钮*/
	$BenSiYu.click(function()
	{
		var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=9');
		setTimeout(function()
		{
			popup.postMessage('SiYu', '*');
		},0);
	});
	
	/*点击雅阁立即购买按钮*/
	$BenYaGe.click(function()
	{
		var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=10');
		setTimeout(function()
		{
			popup.postMessage('YaGe', '*');
		},0);
	});
	
	/*点击歌诗图立即购买按钮*/
	$BenGeShiTu.click(function()
	{
		var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=11');
		setTimeout(function()
		{
			popup.postMessage('GeShiTu', '*');
		},0);
	});
	
	/*点击奥德赛立即购买按钮*/
	$BenAoDeiSai.click(function()
	{
		var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=12');
		setTimeout(function()
		{
			popup.postMessage('AoDeiSai', '*');
		},0);
	});
	
</script>
	 
	 

</body>



	<script type="text/javascript" src="../../jQuery/jquery-3.0.0.js"></script>
	<script src="../../bootstrap/js/bootstrap.min.js"></script>
</html>