<%@ page import="com.neu.bean.MessageWord" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta charset="utf-8" />
		<title>凯美瑞汽车</title>
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome-ie7.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome-ie7.min.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="../css/ShopUI.css">
		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
		<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
	</head>
	
<body>
	
	<div class="BuyUI">
		<!--显示车辆大图-->
		<div class="ShowCarUI" id="ShowCarUI">
		</div>
		
		<!--显示车的不同方向-->
		<div class="ShowCarDifferentWay">
			
		
			<div class="PCOne" onclick="ShowPictureOne()">
				
			</div>
			<div class="PCTwo" onclick="ShowPictureTwo()">
				
			</div>
			<div class="PCThree" onclick="ShowPictureThree()">
				
			</div>
			<div class="PCFour" onclick="ShowPictureforth()">
				
			</div>
			
		</div>

		
		<div class="ShopInformation">
			<div class="title">
				
			</div>
			<span id="price">价格:${sessionScope.Car.carPrice}万<span id="pricenumber"></span></span>
			<span id="discount">折后价:<span id="discountnumber"></span></span>
			<span id="MonthlySales">月销量:<span id="MonthlySalesNumber"></span></span>
			<span id="Totalassessment">累计评价:<span id="Totalassessment"></span></span>
			<span id="PickUpGoods">提货方式:<span id="exchange" onclick="clickexchange()">电子兑换券</span></span>
			<span id="SelectShop">选择门店:</span>
			<span id="DeadLine">有效期:<span id="DeadLineNumber"></span></span>
			<span id="QuanTity">数量:</span>
			<span id="inventory">库存:${sessionScope.Car.carNum}</span>
			 <button class="btn btn-danger" type="button" id="buttom">加入购物车</button> 
			<button class="btn btn-success" type="button" id="buttomone" onclick="window.location.href='/getorder.do?id=${sessionScope.Customer.id}&carId=${sessionScope.Car.id}'">立即购买</button>

		</div>
	</div>
	<!-- 选项卡组件（菜单项nav-tabs）-->
	<ul class="nav nav-tabs" role="tablist" id="feature-tab">
		<li>
			<a href="#estimatepane" role="tab" data-toggle="tab" id="estimate">评价</a>
		</li>
	</ul>

	<!--选项卡面板-->
	<div class="tab-content">

		<!--评价-->
		<div class="tab-pane" id="estimatepane">
			<!--滚动监视器-->
			<div class="bs-docs-section">
				<h1 class="page-header" id="scrollspy">全部评价</h1>
				<div class="bs-example">
					<!--内容-->
					<div class="scrollspy-example">
						<% List<MessageWord> messageWords=(List<MessageWord>)session.getAttribute("MessageWord");
						for(int i=0;i<messageWords.size();i++){
							String messageword=messageWords.get(i).getMnote();
							Date date=messageWords.get(i).getNoteCreatTime();
							SimpleDateFormat formatter=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
							String datestring=formatter.format(date);
						%>
						<div class="commentone">
							<p class="text"> <%= messageword %></p>
							<br/>
							<p class="Time"><%= datestring %></p>
							<p class="author"></p>
						</div>
						<% }%>
					</div>

				</div><!-- /example -->

			</div>

			<hr>


		</div><!--评价-->
	
	
</body>
	<script type="text/javascript" src="../jQuery/jquery-3.0.0.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/ShopUI.js"></script>
</html>