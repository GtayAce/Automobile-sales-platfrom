<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta charset="utf-8" />
		<title>订单界面</title>
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome-ie7.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome-ie7.min.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="../css/Order.css">
		<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
		<style type="text/css">
			#SuccessPurchaseModal
			{
				margin-top:200px;
				position: absolute;
			}
			.SuccessModalText
			{
				margin-left:100px;
				font-size: 25px;
				color:lightgreen;
				font-weight: 600;
				position: absolute;
			}
			img
			{
				margin-top:70px;
				margin-left:80px;
				position: absolute;
			}
		</style>
	</head>
	
<body>
	
		<div class="navbar navbar-inverse" role="navigation" id="navigation">
			<div class="navbar-header">
				<a href="##" class="navbar-brand">确认订单信息</a>
			</div>
			<ul class="nav navbar-nav">
				<li><a href=""></a></li>
				<li><a href=""></a></li>
			</ul>
		</div>
		<div class="navbar navbar-default" role="navigation">
			<ul class="nav navbar-nav">
				<li id="Goods">用户名</li>
				<li id="ProPerty">汽车类型</li>
				<li id="Price">数量</li>
				<li id="Quantity">单价</li>
			</ul>
		</div>	
		
		<!--表格依次列出信息-->
		<ul class="list-group">
			<span class="list-group-item" id="GoodInformation">
			<span class="user">${sessionScope.cus.cusName}</span>
				<span class="CarTy">${sessionScope.car.carName}</span>
				<span class="amount">${sessionScope.count}</span>
				<span class="price">${sessionScope.car.carPrice}万</span>
			</span>
			<!--第二行-->

			<form action="/addorder.do">
			<span class="list-group-item" id="LineTwo">
				<div id="textSolder">
					<span>给卖家留言:</span>
					<input type="hidden" id="id" name="id" value="${sessionScope.cus.id}">
					<input type="hidden" id="carId" name="carId" value="${sessionScope.car.id}">
					<input type="hidden" id="carnum" name="carnum" value="${sessionScope.count}">
					<textarea class="form-control" rows="3" placeholder="选填:填写内容已和卖家协商确认" id="textarea" name="textarea"></textarea>

				</div>
			</span>
			
			<div class="checkcount">
				<span id="realcount">实付款:${sessionScope.car.carPrice*sessionScope.count}万</span>
				<span id="User">User:${sessionScope.cus.cusName}</span>
				<span id="Tel">IdCard:${sessionScope.cus.cusIdCard}</span>
			</div>
			<!--<button class="btn btn-danger" type="button" id="button" onclick="window.location.href='/addorder.do?id='">提交订单</button>onclick="this.form.submit()"-->
				<!--<a href="#SuccessPurchaseModal" data-toggle="modal" data-target="#SuccessPurchaseModal"><input type="button" class="btn btn-danger" value="提交订单" id="button"></a>-->
				<a href="#SuccessPurchaseModal" data-toggle="modal" data-target="#SuccessPurchaseModal"><input type="button" class="btn btn-danger" value="提交订单" id="button" onclick="this.form.submit()"></a>
			</form>
		</ul>


		<!--模态框购买成功的制作-->
		<div class="modal fade" id="SuccessPurchaseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog" style="width:350px">
					<div class="modal-content" style="height:300px">
					<div class="modal-body"><!--中间部分-->
						<span class="SuccessModalText">购买成功</span>
						<img src="../img/admin/nice.png" width="150px" height="150px" >
					</div>

					</div>
			</div>
		</div>


			
</body>
	<script type="text/javascript" src="../jQuery/jquery-3.0.0.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
</html>