<%@ page import="com.neu.bean.Customer" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta charset="utf-8" />
		<title>丰田汽车官方网站</title>
		
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome-ie7.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome-ie7.min.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome.css">
		<link rel="stylesheet" href="../../bootstrap/Font-Awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="../../css/OfficalWebsite/FengTian.css">
		<link rel="stylesheet" href="../../css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
		<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
		
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
			<li><a href="../main.html">BackTo</a>
			</li>
		</ul>
	</nav>
  <% Customer cus=(Customer) session.getAttribute("Customer");%>
		 
		 
		<div class="ListOfCar">
			<div class="FengTianCarmary">
				<span class="CAMRY">CAMRY HYBRID&nbsp;&nbsp;凯美瑞双擎&nbsp;&nbsp;2018款
				&nbsp;&nbsp;2.5HG&nbsp;&nbsp;豪华版<br/>
				<span class="Camryprice">官方指导价:&nbsp;&nbsp;<span class="pricenumber">23.98万元</span></span>
				</span>
				<a class="buttonone" href="/getshopCusId.do?id=${sessionScope.Customer.id}&carId=2" target="_blank"><button  class="btn btn-success" type="button" id="buttomone" >立即购买</button></a>
			</div>
			
			<div class="FengTianLuLaDuo">
				<span class="PRADO">PRADO&nbsp;&nbsp;普拉多&nbsp;&nbsp;&nbsp;2018新款&nbsp;&nbsp;&nbsp;3.5L&nbsp;&nbsp;TX</span>
				<span class="FengTianLuLaDuoprice">官方指导价:&nbsp;&nbsp;<span class="FengTianLuLaDuopricenumber">44.38万元</span></span>
				<button class="btn btn-success" type="button" id="buttomtwo">立即购买</button> 
			</div>
			
			<div class="FengHanLanDa">
				<span class="HIGHLANDER">HIGHLANDER&nbsp;&nbsp;汉兰达&nbsp;&nbsp;2018新款&nbsp;&nbsp;2.0T&nbsp;&nbsp;&nbsp;四驱至尊版</span>
				<span class="FengHanLanDaprice">官方指导价:&nbsp;&nbsp;<span class="FengHanLanDapricenumber">35.38万元</span></span>
				<button class="btn btn-success" type="button" id="buttomthree">立即购买</button> 
			</div>
			
			
			<div class="FengLeiLing">
				<span class="LEILING">LEVIN&nbsp;&nbsp;HYBRID&nbsp;&nbsp;雷凌双擎&nbsp;&nbsp;2018新款&nbsp;&nbsp;1.8H&nbsp;&nbsp;GS-L&nbsp;&nbsp;领先版</span>
				<span class="FengLeiLingprice">官方指导价:&nbsp;&nbsp;<span class="FengLeiLingpricenumber">15.48万元</span></span>
				<button class="btn btn-success" type="button" id="buttomfour">立即购买</button> 
			</div>
      
			<div class="FengYiZe">
				<span class="YiZe">IZOA&nbsp;&nbsp;奕泽&nbsp;&nbsp;2018新款&nbsp;&nbsp;2.0L</span>
				<span class="FengYiZeprice">官方指导价:<span class="FengYiZepricenumber">15.23万元</span></span>
				<button class="btn btn-success" type="button" id="buttomfive">立即购买</button> 
			</div>
			
			
			<div class="FengZhiXuan">
				<span class="ZhiXuan">YARIS&nbsp;L&nbsp;&nbsp;致炫&nbsp;&nbsp;1.5G&nbsp;&nbsp;&nbsp;&nbsp;炫动天窗版</span>
				<span class="ZhiXuanprice">官方指导价:<span class="ZhiXuanpricenumber">10.13万元</span></span>
				<button class="btn btn-success" type="button" id="buttom">立即购买</button> 
			</div>
  </div>


</body>
	<script type="text/javascript" src="../../jQuery/jquery-3.0.0.js"></script>
	<script type="text/javascript" src="../../js/ShopUI.js"></script>
	<script src="../../bootstrap/js/bootstrap.min.js"></script>
</html>