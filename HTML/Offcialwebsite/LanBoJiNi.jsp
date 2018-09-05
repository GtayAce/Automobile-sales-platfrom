<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta charset="utf-8" />
		<title>兰博基尼汽车官方网站</title>
		
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome-ie7.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome-ie7.min.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="../../css/OfficalWebsite/LanBiJiNi.css">
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
		 
		   
			<div class="LanURUS">
				 <span id="URUS">兰博基尼&nbsp;&nbsp;URUS</span>
				 <span id="URUSPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="URUSPricenumber">302.25万元</span></span>
				 <button  class="btn btn-success" type="button" id="buttomone" >立即购买</button>
			</div>
			
			
			
			<div class="LanHuracan">
				<span id="Huracan">兰博基尼&nbsp;&nbsp;Huracan</span>
				<span id="HuracanPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="HuracanPricenumber">380.88万元</span></span>
			<button  class="btn btn-success" type="button" id="buttomtwo" >立即购买</button>
			</div>
			
			
			<div class="LanAventAdor">
				<span id="AventAdor">兰博基尼&nbsp;&nbsp;AventAdor</span>
				<span id="AventAdorPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="AventAdorPricenumber">700.39万元</span></span>
			<button  class="btn btn-success" type="button" id="buttomthree" >立即购买</button>
			</div>
			
			
			<div class="LanCenten">
				<span id="Centen">兰博基尼&nbsp;&nbsp;Centenario</span>
				<span id="CentenPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="Centennumber">1100.12万元</span></span>
			<button  class="btn btn-success" type="button" id="buttomfour" >立即购买</button>
			</div>
			
	 </div>

	<script>
		$URUS=$("#buttomone");
		$Huracan=$("#buttomtwo");
		$Avent=$("#buttomthree");
		$cen=$("#buttomfour");
		
		/*点击URUS立即购买按钮*/
		$URUS.click(function()
		{
			var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=37');
			setTimeout(function()
			{
				popup.postMessage('URUS', '*');
			},0);
		});
		
		
		/*点击Huracan立即购买按钮*/
		$Huracan.click(function()
		{
			var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=38');
			setTimeout(function()
			{
				popup.postMessage('huracan', '*');
			},0);
		});
		
		/*点击Avent立即购买按钮*/
		$Avent.click(function()
		{
			var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=39');
			setTimeout(function()
			{
				popup.postMessage('avent', '*');
			},0);
		});
		
		
		
		/*点击cen立即购买按钮*/
		$cen.click(function()
		{
			var popup = window.open('/getshopCusId.do?id=${sessionScope.Customer.id}&carId=40');
			setTimeout(function()
			{
				popup.postMessage('cen', '*');
			},0);
		});
		
		
		
		
	</script>

</body>



	<script type="text/javascript" src="../../jQuery/jquery-3.0.0.js"></script>
	<script src="../../bootstrap/js/bootstrap.min.js"></script>

</html>