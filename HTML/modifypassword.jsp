<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

	<head>
		<meta charset="utf-8">
		<title>修改密码</title>
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
		body
		{
			background:url(../img/admin/lanbojini1.jpg);
			background-repeat: no-repeat;
			background-size:1380px 662px;
		}
		.modifypassword
		{
			width:400px;
			height:410px;
			color:blue;
			margin-left:918px;
			margin-top: 100px;
			position: absolute;
		}
		.previouspassword
		{
			margin-top:50px;
			font-size: 20px;
			margin-left:20px;
			position: absolute;
		}
		#previouspassword
		{
			width:200px;
			height:40px;
			margin-top:44px;
			margin-left:150px;
			position: absolute;
		}
		.newpassword
		{
			margin-top:140px;
			font-size:20px;
			margin-left:20px;

			position: absolute;
		}
		#newpassword
		{
			width:200px;
			height:40px;
			margin-top:135px;
			margin-left:150px;
			position: absolute;
			
		}
		.verifypassword
		{
			margin-top:243px;
			font-size:20px;
			margin-left:20px;

			position: absolute;
		}
		#verifypassword
		{
			width:200px;
			height:40px;
			margin-top:235px;
			margin-left:150px;
			position: absolute;
		}
		.btn
		{
			width:200px;
			height:40px;
			margin-top:340px;
			margin-left:90px;
			position: absolute;
		}
		</style>
	</head>

	<body>
		<div class="navbar navbar-inverse" role="navigation" id="navigation">
			<div class="navbar-header">
				<a href="##" class="navbar-brand">修改密码</a>
			</div>
			<ul class="nav navbar-nav">
				<li><a href=""></a></li>
				<li><a href=""></a></li>
			</ul>
		</div>
	 <div class="modifypassword">
		 <span class="previouspassword">输入原始密码:</span>
		 <input type="text" class="form-control" placeholder="输入密码" id="previouspassword">
		 <span class="newpassword">输入新密码:</span>
		 <input type="text" class="form-control" placeholder="输入密码" id="newpassword">
		 <span class="verifypassword">确认新密码:</span>
		 <input type="text" class="form-control" placeholder="再次输入密码" id="verifypassword">
         <input type="password"size="1"value="${cuss.cusPassword}"  id="password">
         <button class="btn btn-success" id="button"onclick="x(${cuss.id})">提交按钮</button>
        </div>


<script>
    function x(arg4) {
        var oldpassword=document.getElementById("previouspassword").value ;
        var newpassword1=document.getElementById("newpassword").value ;
        var sure=document.getElementById("verifypassword").value ;
        var  d=document.getElementById("password").value;
        if(oldpassword==d)
            if(newpassword1==sure)
            {
                window.location.href="/changepassword.do?arg1="+sure+"&arg0="+arg4;
            }
            else{alert("两次输入不匹配");}
        else{
            alert("原始密码输入错误");
        }
    }
</script>
    </body>
</html>
