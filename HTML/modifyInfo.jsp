<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
 <html>
 	<head>
 		<meta charset="utf-8" />
 		<title>修改个人信息</title>
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.css">
		<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
		<style type="text/css">
			body
			{
				background-image:url("../img/admin/lanbojini.jpg");
				background-repeat: no-repeat;
				background-size:1380px 670px;
			}
			
			.modify
			{
				width:320px;
				height:500px;
				margin-left:900px;
				margin-top:140px;
				background-color: #FFEFD5;
				opacity: 1;
				position: absolute;
				
			}
			.form-control
			{
				width:250px;
				margin-left:20px;
				margin-top:6px;
			}
			span
			{
				margin-top:20px;
				margin-left:20px;
				position: relative;
			}
			#RealModify
			{
				margin-top:20px;
				margin-left:80px;
				width:150px;
				height:35px;
				position: absolute;
			}
			.ModifyText
			{
				text-align:center;
		        color:lightseagreen;;
			}
			#Modifypc
			{
				margin-left:30px;
				position: absolute;
			}
			#Modifydialog
			{
				margin-top:150px;
				margin-left:20px;
				position: absolute;
			}
		</style>
 	</head>
 	
	
	
 	<body>
 		<!--导航栏-->
 		<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="menu-nav">
 		    <div class="container">
 				<div class="navbar-header">
 					<a class="navbar-brand" href="#">修改个人信息</a>
				</div>		
 			</div>
 		</div>
		<div class="modify">

			<div class="modifyInformation">
                <form action="updateselfCus1.do?id=${cusself.id}" method="post">
				<span class="text">用户名:</span><input type="text"name="cusName" value="${cusself.cusName}" class="form-control" placeholder="">
				<span class="Age">出生年月:</span><input type="text"name="cusBirthday" value="${cusself.cusBirthday}" class="form-control" placeholder="">
                    <span class="Password">密码:</span><input type="password"name="cusPassword" readonly="readonly" value="${cusself.cusPassword}" class="form-control" placeholder="">
				<span class="RealName">真实姓名:</span><input type="text" name="cusRealName" value="${cusself.cusRealName}"class="form-control" placeholder="">
				<span class="IDcard">身份证号码:</span><input type="text" name="cusIdCard" value="${cusself.cusIdCard}" class="form-control" placeholder="">
				<span class="Address">地址:</span><input type="text"name="cusAddress" value="${cusself.cusAddress}" class="form-control" placeholder="">
				<span class="TelePhone">电话:</span><input type="text" name="cusTelephone" value="${cusself.cusTelephone}"class="form-control" placeholder="">
                    <button type="submit" class="btn btn-success" id="RealModify">确认修改</button>
               </form>
				<a href="#Modifydialog" class="Register"data-toggle="modal" data-target="#Modifydialog"></a>

			</div>





		<%--</div>--%>
		
		
		<!--修改成功模态框-->
		<div class="modal fade" id="Modifydialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog" style="width:400px">
						
					<div class="modal-content" style="height:400px">
						<!--
						<div class="modal-header"><!--头部-->
						<!--				
						<h4 class="modal-title" id="myModalLabel">						
						</h4>					
						</div>	-->
						<div class="modal-body" id="modal-body"><!--中间部分-->
							<h2 align="center" class="ModifyText">修改成功</h2>
							<img src="../img/admin/nice.png" width="300" height="300" id="Modifypc">
									
						</div>
						<!--底部-->
						<!--
						<div class="modal-footer">			
						</div>-->
					</div>
				</div>
			</div>
		
		
		
 	</body>
	<script type="text/javascript" src="../jQuery/jquery-3.0.0.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
 </html>
 