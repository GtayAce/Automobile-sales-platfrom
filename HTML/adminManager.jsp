<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html charset=utf-8"/>
		<script type="text/javascript" src="../jQuery/jquery-3.0.0.js"></script>
		<title>管理员</title>
		<style type="text/css">
			body {
				margin: 0;
				padding: 0;
				background-color: #ccc;
			}
			#container:after {
				content: "";
				display: block;
				clear: both;
			}
			#container {
				width: 1300px;
				margin: 0 auto;

			}
			#container .img-box {
				cursor: pointer;
				position: relative;
			}
			#container .img-box {
				float: left;
				padding: 5px;
				position: relative;
			}
			#container .img-box img {
				width: 250px;
				height: auto;
				position: relative;
			}
		</style>
	</head>
	<body>
		<div id="container">
		</div>
			
	<script>
		var falls = {
			topArry:[0,0,0,0,0],
			leftArry:[],
			imgArray:[],
			num:0,
			dataNum:5
		}
		
		$(function(){
			getData();
			getMinHeight();
			
		});
		
		function getData(){
			$.getJSON(
				"../json/falls.json",
				function(data){
					if(data.success){
						var row = data.row,
							len = row.length,
							html = "";
						for(var i = 0;i < len;i++){
						    if(i==0)
							{
                                html += "<div class='img-box'>"
                                    +"<a href='/listCar.do'>"//具体在改jsp
                                    + "<img src='"+row[i].src+"'/>"+"</a>"
                                    +"</div>";
							}
							else if(i==1)
							{
                                html += "<div class='img-box'>"
                                    +"<a href='/listCarType.do'>"//具体在改jsp
                                    + "<img src='"+row[i].src+"'/>"+"</a>"
                                    +"</div>";
							}
                            else if(i==2)
                            {
                                html += "<div class='img-box'>"
                                    +"<a href='/HTML/admin.jsp'>"//具体在改jsp
                                    + "<img src='"+row[i].src+"'/>"+"</a>"
                                    +"</div>";
                            }
                            else if(i==3)
                            {
                                html += "<div class='img-box'>"
                                    +"<a href='/listCustomer.do'>"//具体在改jsp
                                    + "<img src='"+row[i].src+"'/>"+"</a>"
                                    +"</div>";
                            }
                            else if(i==4)
                            {
                                html += "<div class='img-box'>"
                                    +"<a href='/listorder.do'>"//具体在改jsp
                                    + "<img src='"+row[i].src+"'/>"+"</a>"
                                    +"</div>";
                            }
						}
						$("#container").append(html);	
						getLeft();
						if(getMinHeight()<window.screen.height){
							getData();
						}
		
						falls.imgArray = [];
						
						$("#container .img-box").each(function(i){
							if(i >= falls.num){
								falls.imgArray.push(this);
							}
						})
						falls.num += falls.dataNum;
						//修改位置
						reset();
					}
				}
			)	
		}
		
		function getMinHeight(){
			var minHeight = Math.min.apply(null,falls.topArry);
			return(minHeight);
		}
		
		function getLeft(){
			for(var i = 0; i < 5; i++){
				var left = $("#container .img-box").eq(i).offset().left;
				falls.leftArry.push(left);
			}
		}
		
		function reset(){
			var img = falls.imgArray;
			for (var i = 0,len = img.length; i < len; i++) {
				var	minHeight = getMinHeight(),
					index = 0;
		
				for(var x = 0;x < falls.dataNum; x++){
					if(minHeight == falls.topArry[x]){
						index = x;
						break;
					}			
				}
				$(img[i]).css({
					"position":"absolute",
					"top":minHeight,
					"left":falls.leftArry[index]
				});
		
				falls.topArry[index] += $(img[i]).height();
			}
		}
		
		window.onscroll = function(){
			var minHeight = getMinHeight();
			if(window.scrollY>minHeight/2){
				getData();
			}
		}
		
	</script>
	</body>
</html>