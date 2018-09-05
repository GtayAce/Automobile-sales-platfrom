<%@ page import="com.neu.bean.MessageWord" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta charset="utf-8" />
		<title>汽车销售</title>
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.css">
		<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
		<link rel="stylesheet" href="../css/ShopUI.css">
		<style type="text/css">
			#shu
			{

				margin-top:383px;
				color: red;
				margin-left: 160px;
				position: absolute;
			}
			.advantage
			{

				width:748px;
				height:481px;
				margin-left:480px;
				background-image: url(../img/admin/home2.jpg);
				background-size:748px 481px;
				background-repeat: no-repeat;
				position: absolute;
			}
			#inventory
			{
				font-weight: 600;
				font-size:20px;
				margin-top:270px;
				margin-left:22px;
				color:green;
				position: absolute;
			}
			#price
			{
				font-weight: 600;
				font-size:20px;
				margin-top:100px;
				margin-left:20px;
				color:green;
				position: absolute;
			}
			#property
			{
				font-weight: 600;
				font-size: 20px;
				margin-left: 20px;
				margin-top: 190px;
				color: green;
				position: absolute;
			}
			#QuanTity
			{
				font-weight: 600;
				font-size: 20px;
				margin-left: 20px;
				margin-top: 340px;
				color: green;
				position: absolute;
			}
			#buttomone
			{
				margin-top:430px;
				margin-left:20px;
				width:200px;
				height:40px;
				position: absolute;
			}
			#CarName
			{
				font-weight: 600;
				font-size:20px;
				margin-left:15px;
				margin-top:25px;
				color:green;
				position: absolute;
			}
            #number
            {
                width:80px;
                margin-top:340px;
                margin-left:70px;
                background-color: inherit;
                position: absolute;
            }
		</style>
	</head>
	
<body>
<div class="navbar navbar-inverse" role="navigation" id="navigation">
	<div class="navbar-header">
		<a href="##" class="navbar-brand">Shopping</a>
	</div>
	<ul class="nav navbar-nav">
		<li><a href=""></a></li>
		<li><a href=""></a></li>
	</ul>
</div>

<!--商品天猫图标-->
<div class="shoppc">
</div>
	<div class="BuyUI">
		<!--显示车辆大图-->
		<div class="ShowCarUI" id="ShowCarUI">
		</div>
		
		<!--显示车的不同方向-->
		<div class="ShowCarDifferentWay">
			
		
			<div class="PCOne">
				
			</div>
			<div class="PCTwo">
				
			</div>
			<div class="PCThree">
				
			</div>
			<div class="PCFour">
				
			</div>
			
		</div>
		<!--产品优势-->
		<div class="advantage">

		</div>
		
		<div class="ShopInformation">

			<span id="CarName">汽车类型:${sessionScope.Car.carName}</span>
			<span id="price">价格:${sessionScope.Car.carPrice}万<span id="pricenumber"></span></span>
			<span id="QuanTity">数量:</span>
			<span id="property">累计评价:${sessionScope.n}</span>
			<input type="text"  id="number" name="number" value="1" onblur="checkkucun()"><span id="shu"></span>
			<span id="inventory">库存:${sessionScope.Car.carNum}</span>
			<button class="btn btn-primary" type="button" id="buttomone" onclick="getorder()">立即购买</button>
			<!--"window.location.href='/getorder.do?id={sessionScope.Customer.id}&carId={sessionScope.Car.id}'"-->

		</div>
		
	</div>
<%
	/*String name=request.getParameter("carId");
	String list="";
	//从客户端获得Cookies集合
	Cookie[] cookies=request.getCookies();
	//遍历这个Cookies集合
	if(cookies!=null&&cookies.length>0){
		for(Cookie c:cookies){
			if(c.getName().equals(name)){
				list=c.getValue();
			}
		}
	}

    list=list+request.getParameter("id")+"#";
	//如果浏览记录超过了1000条，清零。
	String[] arr=list.split("#");
	if(arr!=null&&arr.length>0){
		if(arr.length>=1000){
			list="";
		}
	}
	Cookie cookie = new Cookie(name,list);
	response.addCookie(cookie);*/




	String list ="";
	//从客户端获得Cookies集合
	Cookie[] cookies = request.getCookies();
	//遍历这个Cookies集合
	String name=request.getParameter("id");
	if(cookies!=null&&cookies.length>0)
	{
		for(Cookie c:cookies)
		{
			if(c.getName().equals(name))
			{
				list = c.getValue();
			}
		}
	}
	list = list.replace(request.getParameter("carId")+"#","");
	list =list+request.getParameter("carId")+"#" ;

//      String a=URLEncoder.encode(list, "UTF-8");
	//如果浏览记录超过1000条，清零.
	String[] arr = list.split("#");
	if(arr!=null&&arr.length>0)
	{
		if(arr.length>=1000)
		{
			list="";
		}
	}
	Cookie cookie = new Cookie(name,list);
	cookie.setMaxAge(60 * 60 * 24 * 7);//7天
	cookie.setPath("/");
	response.addCookie(cookie);
%>

	<!-- 选项卡组件（菜单项nav-tabs）-->
	<ul class="nav nav-tabs" role="tablist" id="feature-tab">
		<li class="active">
			<a href="#CarDetailpane" role="tab" data-toggle="tab" id="CarDetail">汽车介绍</a>
		</li>
		<li>
			<a href="#estimatepane" role="tab" data-toggle="tab" id="estimate">评价</a>
		</li>
	</ul>
	
	<!--选项卡面板-->
	<div class="tab-content">
		<!--汽车详情-->
		<div class="tab-pane active" id="CarDetailpane">
			<span class="CarDetailpanenote">${sessionScope.Car.carNote}</span>
		</div>

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
								    int id=messageWords.get(i).getMcusId();
									String messageword=messageWords.get(i).getMnote();
									Date date=messageWords.get(i).getNoteCreatTime();
									SimpleDateFormat formatter=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
									String datestring=formatter.format(date);%>
							<div class="commentone">
								<p class="text"><%= messageword %></p>
								<br/>
								<p class="Time"><%= datestring %></p>
								<p class="author">用户ID:<%= id%></p>
							</div>
							<% }%>
						</div>
					</div><!-- /example -->
		
			</div>
			
			<hr>
				
		</div><!--评价-->
		<script>
			function getorder() {
				var a=document.getElementById("number").value;
				window.location.href='/getorder.do?id=${sessionScope.Customer.id}&carId=${sessionScope.Car.id}&num='+a;
            }
            function checkkucun() {
                var a=document.getElementById("number").value;
                if(isNaN(a)){
                    $("#shu").html('你输入的啥玩意');
                    $("#buttomone").attr("disabled","disabled");
				}
				else if(a<=0){
                    $("#shu").html('亲，你输入的数字有错哦');
                    $("#buttomone").attr("disabled","disabled");
				}
                else if(a>${sessionScope.Car.carNum}){
                    //alert("库存不足")
                    $("#shu").html('库存不足');
                    $("#buttomone").attr("disabled","disabled");
                }
                else {
                    $("#buttomone").removeAttr("disabled");
                    $("#shu").html('');
                }
            }

		</script>
	
	
</body>



	<script type="text/javascript" src="../jQuery/jquery-3.0.0.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/ShopUI.js"></script> 
</html>