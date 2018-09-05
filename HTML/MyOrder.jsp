<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<html>

	<head>
		<meta charset="utf-8">
		<title>个人订单查看</title>

		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome-ie7.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome-ie7.min.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome.min.css">
		<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
		<style type="text/css">
			#menu-nav
			{
				
				position: absolute;
			}
			.container
			{
				 width:100%;
				 position:fixed;
			}
			#Order
			{
				margin-left:140px;
				margin-top:15px;
				position: absolute;
			}
			#ProPerty
			{
				margin-left:500px;
				margin-top:15px;
				position: absolute;
			}
			#Price
			{
				margin-left:850px;
				margin-top:15px;
				position: absolute;
			}
			#Quantity
			{
				margin-left:1200px;
				margin-top:15px;
				position: absolute;
			}
			.list-group-item
			{
				width:100%;
				height:120px;
			}
			/*汽车类型*/
			.CarTy
			{
				width:100px;
				margin-left:470px;
				margin-top:35px;
				position: absolute;
			}
			/*数量*/
			.amount
			{
				margin-left:840px;
				margin-top:35px;
			
				position: absolute;
			}
			/*价格*/
			.price
			{
				
				margin-left:1180px;
				margin-top:25px;
				font-size:30px;
				color: red;
				position: absolute;
			}
			.OrderID
			{
				width:100px;
				margin-left:130px;
				margin-top:35px;
				position: absolute;
			}
			.OrderIDfour
			{
				width:100px;
				margin-left:130px;
				margin-top:35px;
				position: absolute;
			}
		</style>
	</head>

	<body>
	<div class="navbar navbar-inverse" role="navigation" id="navigation">
		<div class="navbar-header">
			<a href="##" class="navbar-brand">我的订单</a>
		</div>
		<ul class="nav navbar-nav">
			<li><a href=""></a></li>
			<li><a href=""></a></li>
		</ul>
	</div>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-hover">
                <tr>
                    <th>订单号</th>
                    <th>昵称</th>
                    <th>姓名</th>
                    <th>地址</th>
                    <th>手机号</th>
                    <th>车型</th>
                    <th>车价</th>
                    <th>数量</th>
                </tr>
                <c:forEach items="${pageInfo.list}" var="mapper">
                    <tr>
                        <td>${mapper.numbers}</td>
                        <td>${mapper.cusName}</td>
                        <td>${mapper.cusRealName}</td>
                        <td>${mapper.cusAddress}</td>
                        <td>${mapper.cusTelephone}</td>
                        <td>${mapper.carName}</td>
                        <td>${mapper.carPrice}</td>
                        <td>${mapper.carNum}</td>
                    </tr>
                </c:forEach>
            </table>
        </div>
    </div>
	<%--<!--表格依次列出信息-->--%>
	<%--<ul class="list-group">--%>
		<%--<!--第一行-->--%>
		<%--<span class="list-group-item" id="LineOne">--%>
			<%--<span class="OrderID"></span>--%>
			<%--<!--车型-->--%>
			<%--<span class="CarTy"></span>--%>
			<%--<!--数量-->--%>
			<%--<span class="amount"></span>--%>
			<%--<!--价格-->--%>
			<%--<span class="price"></span>--%>
		<%--</span>--%>
		<%----%>
		<%--<!--第二行-->--%>
		<%--<span class="list-group-item" id="LineTwo">--%>
			<%--<span class="OrderID"></span>--%>
			<%--<!--车型-->--%>
			<%--<span class="CarTy"></span>--%>
			<%--<!--数量-->--%>
			<%--<span class="amount"></span>--%>
			<%--<!--价格-->--%>
			<%--<span class="price"></span>--%>
		<%--</span>--%>
		<%----%>
		<%--<!--第三行-->--%>
		<%--<span class="list-group-item" id="linethree">--%>
			<%--<span class="OrderID"></span>--%>
			<%--<!--车型-->--%>
			<%--<span class="CarTy"></span>--%>
			<%--<!--数量-->--%>
			<%--<span class="amount"></span>--%>
			<%--<!--价格-->--%>
			<%--<span class="price"></span>--%>
		<%--</span>--%>
		<%----%>
		<%--<!--第四行-->--%>
		<%--<span class="list-group-item" id="line-four">--%>
		<%--<span class="OrderID"></span>--%>
		<%--<!--车型-->--%>
		<%--<span class="CarTy"></span>--%>
		<%--<!--数量-->--%>
		<%--<span class="amount"></span>--%>
		<%--<!--价格-->--%>
		<%--<span class="price"></span>--%>
		<%--</span>--%>
		<%----%>
	<%--</ul>	--%>
	<%--<script>--%>
		<%----%>
		<%--function addItem()--%>
		<%--{--%>
			<%--/*判断最后一个元素是否有值，有的话在加一行*/--%>
			<%--$listgroup=$(".list-group");--%>
			<%--for(var i=0;i<$(".list-group-item").length;i++)--%>
			<%--{--%>
			<%--if($('span').last().html()!="")--%>
			<%--{--%>
				<%--/*加一行*/--%>
				<%--$listgroup.append("<span class='list-group-item'>"+--%>
				<%--"<span class='OrderID'></span>"+--%>
				<%--"<span class='CatTy'></span>"+--%>
				<%--"<span class='amount'></span>"+--%>
				<%--"<span class='price'></span>"+--%>
				<%--"</span>");--%>
				<%----%>
			<%--}--%>
			<%--}--%>
		<%--}--%>
		 <%--addItem();--%>
	<%--</script>--%>
	<%----%>
			<%----%>
	</body>
	<script type="text/javascript" src="../jQuery/jquery-3.0.0.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
</html>
