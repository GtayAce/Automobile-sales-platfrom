<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta charset="utf-8" />
		<title>管理员登录界面</title>
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.css">
		<link rel="stylesheet" href="../css/admin.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome-ie7.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome-ie7.min.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome.css">
		<link rel="stylesheet" href="../bootstrap/Font-Awesome/css/font-awesome.min.css">
		<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
	</head>
	
<body>
		<div class="navbar navbar-inverse" role="navigation" id="navigation">
			<div class="navbar-header">
				<a href="##" class="navbar-brand">admin</a>
			</div>
			<ul class="nav navbar-nav">
				<li><a href=""></a></li>
				<li><a href=""></a></li>
			</ul>
		</div>
			
			
			<div class="adminLogin">
				<div class="Login">
					<div class="LoginText">
					
						<span class="admin">admin</span>
							<br/><br/><br/>
						<form action="/adminlogin.do" method="post">
						<span class="glyphicon glyphicon-user" id="user"></span><input type="text" class="form-control" name="adminName" placeholder="请输入用户名"id="textOne">
						<span class="glyphicon glyphicon-lock" id="lock"></span><input type="password" class="form-control" name="adminPassword" placeholder="请输入密码" id="textTwo">
						<input type="button" class="btn btn-danger" value="登录" id="LoginButtom" onclick="this.form.submit()">
						</form>
					</div>
			
				</div>
			</div>
			
</body>
	<script type="text/javascript" src="../jQuery/jquery-3.0.0.js"></script>
	<script type="text/javascript"src="../js/admin.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
</html>