<%@ page import="com.neu.bean.Customer" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.neu.bean.Car" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,width=device-width">
    <title>汽车销售</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap-theme.css">
    <link rel="stylesheet" href="../css/OfficalWebsite/BenTian.css">
    <link rel="stylesheet" href="../css/OfficalWebsite/FengTian.css">
    <link rel="stylesheet" href="../css/OfficalWebsite/DaZhong.css">
    <link rel="stylesheet" href="../css/OfficalWebsite/RiChan.css">
    <link rel="stylesheet" href="../css/OfficalWebsite/BMW.css">
    <link rel="stylesheet" href="../css/OfficalWebsite/FuTe.css">
    <link rel="stylesheet" href="../css/OfficalWebsite/BaoShiJie.css">
    <link rel="stylesheet" href="../css/OfficalWebsite/LanBiJiNi.css">
    <script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/MovePicture.css">
    <link rel="stylesheet" href="../css/Modal.css">


    <link rel="stylesheet" href="https://cache.amap.com/lbs/static/main1119.css"/>
    <script src="https://cache.amap.com/lbs/static/es5.min.js"></script>
    <script src="https://webapi.amap.com/maps?v=1.4.8&key=5de61c6cf673b9183f7b4a14afda9d46"></script>
    <script type="text/javascript" src="https://cache.amap.com/lbs/static/addToolbar.js"></script>
    <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
	<script type="text/javascript">
        $(document).ready(function(){
            $("#cusName").blur(function(){
                $.ajax({//发送ajax请求
                    url : "/myajax.do",
                    type: "POST",
                    <!--dataType:"json",-->
                    data:{"cusName":$("#cusName").val()},
                    success:function(data){
                        //alert("ajax");//测试代码
                        //console.log(data);
                        //var str = data.result;
                        if(data == "success"){
                            //alert('该用户名可用！')
                            $("#repeat").html('该用户名可注册');
                            $("#zhuce").removeAttr("disabled");
                        }
                        else if(data == "notsuccess"){
                            //alert('该用户名不可用！')
                            $("#repeat").html('该用户名已注册');
                            $("#zhuce").attr("disabled","disabled");
                        }
                        else {
                            $("#repeat").html('用户名不能为空');
                            $("#zhuce").attr("disabled","disabled");
                        }
                    },
                    error:function (data) {
                        //alert("ajax");
                        $("#remind").html('');
                        $("#zhuce").attr("disabled","disabled");
                    }
                });

            });
        });
        function SendForm() {
			if(checkpost()){
			    document.addForm.submit();
			}
        }
        function checkpost() {
			if(addForm.cname.value==""||addForm.pwd.value==""){
                alert("用户名和密码不能为空");
                return false;
			}
			return true;
        }
        function RegistForm() {
			if(checkregist()){
			    document.registForm.submit();
			}
        }
        function checkregist() {
			if(registForm.cusName.value==""||registForm.cusPassword.value==""){
                alert("用户名和密码不能为空");
			    return false;
			}
			return true;
        }

	</script>
    <style type="text/css">
        .SuccessModalText
        {
        margin-left:100px;
        font-size: 25px;
        color:lightgreen;
        font-weight: 600;
        position: absolute;
        }
        #imgone
        {
        margin-top:70px;
        margin-left:80px;
        position: absolute;
        }
    </style>

</head>

<body>

<!--导航栏-->
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="menu-nav">
	<div class="container">
		<div class="navbar-header">
			<a class="navbar-brand" href="#">汽车销售平台</a>
		</div>


		<div class="navbar-collapse collapse" id="collapse">

			<ul class="nav navbar-nav" id="navbar-nav">
				<li class=""><a href="" class="MainMenu">首页</a></li>
				<li><a href="javascript:" class="BuyCar">我要买车</a></li>
                <li><a href="#mylocation" data-toggle="modal" data-target="#mylocation">位置</a></li>
                <li><a href="#myweather" data-toggle="modal" data-target="#myweather">天气</a></li>

                <li><a href="#mygroup" data-toggle="modal" data-target="#mygroup">关于</a></li>
                <%
                    Customer customer = (Customer) session.getAttribute("customer");
                    if (customer != null) {
                %>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">我的管理<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="/getselfCus.do?id=${sessionScope.customer.id}">修改个人信息</a></li>
                        <li><a href="/listordername.do?name=${sessionScope.customer.cusName}">个人订单查看</a></li>
                        <li><a href='/getCus2.do?id=${sessionScope.customer.id}'>密码修改</a></li>
                    </ul>
                </li>
                <% }%>
                <%
                    //                    Customer customer = (Customer) session.getAttribute("customer");
                    if (customer != null) {
                %>
                <!--头像-->
                <div class="touxiang">
                </div>

                <!--头像的随机生成-->
                <script>
                    var imgArr=['../img/HandPhoto/dingdang.jpg','../img/HandPhoto/kenan.jpg','../img/HandPhoto/quanyecha.jpg','../img/HandPhoto/wangqiu.jpg','../img/HandPhoto/zuqiu.jpg','../img/HandPhoto/pig.jpg'];
                    var num=Math.floor(Math.random()*5);
                    $touxiang=$(".touxiang");
                    $touxiang.css("background-image","url("+imgArr[num]+")");
                    $touxiang.css("background-repeat","no-repeat");
                    $touxiang.css("background-size","43px 43px");
                </script>
                <li><a href="" class="Login">欢迎您:${sessionScope.customer.cusName}</a></li>
                <li><a href="/outlogin.do">安全退出</a></li>

                <%} else {%>
                <li><a href="#myModal" class="Login" data-toggle="modal" data-target="#myModal" id="Login">登录</a></li>
                <li><a href="#myModalRigister" class="Register" data-toggle="modal"
                       data-target="#myModalRigister">注册</a></li>
                <% }%>
			</ul>

		</div>
	</div>
</div>

<!--侧边栏-->
<div id="sidebar">
    <div id="wrap">
        <!--我的足迹-->
        <div id="prof" class="item">
                <span>
                    <i class="glyphicon glyphicon-user"></i>
                </span>
            <div>
                我的足迹
            </div>
        </div>

        <!--我的时间-->
        <div id="timer" class="item">
          	<span>
          			<i class="glyphicon glyphicon-time"></i>
          	</span>
            <div>
                时间
            </div>

        </div>


    </div>

    <!--关闭按钮-->
    <div id="closeBar">
        <div>
            <i class="glyphicon glyphicon-remove"></i>
        </div>

    </div>

</div>


<!--内容面板-->
<!--记录面板-->
<div id="prof-content" class="nav-content">
    <div class="nav-con-close">
        <i class="glyphicon glyphicon-chevron-left"></i>
    </div>
    <div>
        <%
           // out.print("123");
            /*if (customer != null) {
                String n = Integer.toString(customer.getId());;
                // 获得当前路径以及"直接父路径"的所有Cookie对象,如果没有任何Cookie的话,则返回null
                Cookie[] cookies = request.getCookies();
               // out.print(n);
                // 遍历数组,获得具体的Cookie
                if(cookies == null) {
                    out.print("没有Cookie信息");
                } else {
                    for(int i=0; i<cookies.length; i++) {

                        // 获得具体的Cookie
                        Cookie cookie = cookies[i];
                        // 获得Cookie的名称
                        String name = cookie.getName();
                        String value = cookie.getValue();
                        //out.print(value);
//                        out.print("Cookie名:" + name + " &nbsp; Cookie值:" + value + "<br>");
                        while(name.equals(n)) {
                            String[] arr=value.split("#");
                            for(int d=arr.length;d>arr.length-5;d--)
                            {
                                out.print("汽车ID"+arr[d] + "<br>");
                            }
                            out.print("Cookie名:" + name + " &nbsp; Cookie值:" + value + "<br>");
                        }
                    }
                }
            }*/

            //out.print("123");
            String carname;
            if (customer != null) {
                String n = Integer.toString(customer.getId());;
                // 获得当前路径以及"直接父路径"的所有Cookie对象,如果没有任何Cookie的话,则返回null
                Cookie[] cookies = request.getCookies();
                // 遍历数组,获得具体的Cookie
                if(cookies == null) {
                    out.print("没有Cookie信息");
                } else {
                    for(int i=0; i<cookies.length; i++) {
                        // 获得具体的Cookie
                        Cookie cookie = cookies[i];
                        // 获得Cookie的名称
                        String name = cookie.getName();
                        String value = cookie.getValue();
                        if (name.equals(n)) {
                            //out.print("Cookie名:" + name + " &nbsp; Cookie值:" + value + "<br>");
                            String[] arr = value.split("#");
//                            int[] a=Arrays.t
                            int len = arr.length;
                            int d=0;
                            out.print("浏览的车id"+ "<br>");
                            for (String c:arr) {
                                out.print("车辆ID:"+c + "<br>");
                                // out.print(d);
                                d=d+1;
                            }
                        }

                    }
                }
            }

        %>
    </div>

</div>
<!--时间面板-->
<div id="timer-content" class="nav-content">
    <div class="nav-con-close">
        <i class="glyphicon glyphicon-chevron-left"></i>
    </div>
    <!--面板具体内容-->
    <div>
        <div id="democlock">
            <canvas id="clock" height="200px" width="200px"></canvas>
            <br/>
            <br/>
            <br/>
            <span class="reallyTime">{{date|formatDate}}</span>
        </div>
    </div>
</div>


<!--图片轮播-->
<div id="ad-carousel" class="carousel slide" data-ride="carousel">

	<div class="carousel-inner">
		<div class="item active">
			<img src="../img/MovePicture/1_1.jpg" alt="1 slide">

			<div class="container">
				<div class="carousel-caption">
				</div>
			</div>
		</div>
		<div class="item">
			<img src="../img/MovePicture/BaoMa_1.jpg" alt="2 slide">

			<div class="container">
				<div class="carousel-caption">
				</div>
			</div>
		</div>
		<div class="item">
			<img src="../img/MovePicture/BaoShiJie_1.jpg" alt="3 slide">

			<div class="container">
				<div class="carousel-caption">
				</div>
			</div>
		</div>
		<div class="item">
			<img src="../img/MovePicture/C8.jpg" alt="4 slide">

			<div class="container">
				<div class="carousel-caption">
				</div>
			</div>
		</div>
		<div class="item">
			<img src="../img/MovePicture/LanBoJiNi_1.jpg" alt="5 slide">

			<div class="container">
				<div class="carousel-caption">
				</div>
			</div>
		</div>
	</div>
	<a class="left carousel-control" href="#ad-carousel" data-slide="prev"><span
			class="glyphicon glyphicon-chevron-left"></span></a>
	<a class="right carousel-control" href="#ad-carousel" data-slide="next"><span
			class="glyphicon glyphicon-chevron-right"></span></a>
</div>



<!--买车框-->
<div class="panel panel-default">
	<div class="panel-heading">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;我要买车</div>
	<div class="panel-body">
        <%if(customer==null) {%>
        <a href="" onclick="javascript:alert('亲，请先登录哦')" class="BenTian">
        <%} else {%>
		<a href="/getCusbentianId.do?id=${sessionScope.customer.id}" class="BenTian">
            <% }%>
			<img src="../img/CarLogo/BenTian.png" width="70" height="70">
			<span class="BenTianText">本田</span>
		</a>
                <%if(customer==null) {%>
            <a href="" onclick="javascript:alert('亲，请先登录哦')" class="FengTian">
                    <%} else {%>
		<a href="/getCusfengtianId.do?id=${sessionScope.customer.id}" class="FengTian">
            <% }%>
			<img src="../img/CarLogo/FengTian.png" width="100" height="70">
			<span class="FengTianText">丰田</span>
		</a>
          <%if(customer==null) {%>
          <a href="" onclick="javascript:alert('亲，请先登录哦')" class="DaZhong">
          <%} else {%>
		<a href="/getCusdazhongId.do?id=${sessionScope.customer.id}" class="DaZhong">
            <% }%>
			<img src="../img/CarLogo/DaZhong.png" width="70" height="70">
			<span class="DaZhongText">大众</span>
		</a>
        <%if(customer==null) {%>
         <a href="" onclick="javascript:alert('亲，请先登录哦')" class="RiChan">
         <%} else {%>
		<a href="/getCusrichanId.do?id=${sessionScope.customer.id}" class="RiChan">
            <% }%>
			<img src="../img/CarLogo/RiChan.png" width="70" height="70">
			<span class="RiChanText">日产</span>
		</a>
        <%if(customer==null) {%>
        <a href="" onclick="javascript:alert('亲，请先登录哦')" class="BMW">
         <%} else {%>
            <!--这里宝马链接错误-->
		<a href="/getCusBWMId.do?id=${sessionScope.customer.id}" class="BMW">
         <% }%>
			<img src="../img/CarLogo/BMW.png" width="70" height="70">
			<span class="BMWText">宝马</span>
		</a>
        <%if(customer==null) {%>
        <a href="" onclick="javascript:alert('亲，请先登录哦')" class="FeTe">
         <%} else {%>
		<a href="/getCusfuteId.do?id=${sessionScope.customer.id}" class="FeTe">
          <% }%>
			<img src="../img/CarLogo/FuTe.png" width="120" height="80">
			<span class="FuTeText">福特</span>
		</a>
        <%if(customer==null) {%>
         <a href="" onclick="javascript:alert('亲，请先登录哦')" class="BaoShiJie">
          <%} else {%>
		<a href="/getCusbaoshijieId.do?id=${sessionScope.customer.id}" class="BaoShiJie">
          <% }%>
			<img src="../img/CarBigLogo/BaoShiJieLogo.png" width="120" height="80">
			<span class="BaoShiJieText">保时捷</span>
		</a>
        <%if(customer==null) {%>
         <a href="" onclick="javascript:alert('亲，请先登录哦')" class="LanBoJiNi">
           <%} else {%>
		<a href="/getCuslanbojiniId.do?id=${sessionScope.customer.id}" class="LanBoJiNi">
           <% }%>
            <img src="../img/CarBigLogo/LanBoJiNi.png" width="90" height="90">
			<span class="LanBoJiNiText">兰博基尼</span>
		</a>



	</div>

</div>



<!--线分隔-->
<hr class="feature-divider">


<!--分栏-->
<ul class="nav nav-tabs" role="tablist" id="featuretab">
    <li class="active"><a href="#BenTian" role="tab" data-toggle="tab" id="one">本田</a></li>
    <li><a href="#FengTian" role="tab" data-toggle="tab" id="two">丰田</a></li>
    <li><a href="#DaZhong" role="tab" data-toggle="tab" id="three">大众</a></li>
    <li><a href="#RiChan" role="tab" data-toggle="tab" id="four">日产</a></li>
    <li><a href="#BaoMa" role="tab" data-toggle="tab"id="five">宝马</a></li>
    <li><a href="#FuTe" role="tab" data-toggle="tab" id="six">福特</a></li>
    <li><a href="#BaoShiJie" role="tab" data-toggle="tab" id="seven">保时捷</a></li>
    <li><a href="#LanBoJiNi" role="tab" data-toggle="tab" id="eight">兰博基尼</a></li>
    <!--点击之后下边有边框显示-->
    <script>

        $one=$("#one");
        $two=$("#two");
        $three=$("#three");
        $four=$("#four");
        $five=$("#five");
        $six=$("#six");
        $seven=$("#seven");
        $eight=$("#eight");
        $one.hover(function()
        {
            $one.css("color","green");
        });
        $one.focus(function()
        {
            $one.css("border-bottom","5px solid green");
        });
        $one.blur(function()
        {
            $one.css("border-bottom","0px solid green");
            $one.css("color","black");
        });
        $one.mouseout(function()
        {
            $one.css("color","#000");

        });


        $two.hover(function()
        {
            $two.css("color","green");
        });
        $two.focus(function()
        {
            $two.css("border-bottom","5px solid green");
        });
        $two.blur(function()
        {
            $two.css("border-bottom","0px solid green");
            $two.css("color","black");
        });
        $two.mouseout(function()
        {
            $two.css("color","#000");
        });






        $three.hover(function()
        {
            $three.css("color","green");
        });
        $three.focus(function()
        {
            $three.css("border-bottom","5px solid green");
        });
        $three.blur(function()
        {
            $three.css("border-bottom","0px solid green");
            $three.css("color","black");
        });
        $three.mouseout(function()
        {
            $three.css("color","#000");
        });






        $four.hover(function()
        {
            $four.css("color","green");
        });
        $four.focus(function()
        {
            $four.css("border-bottom","5px solid green");
        });
        $four.blur(function()
        {
            $four.css("border-bottom","0px solid green");
            $four.css("color","black");
        });
        $four.mouseout(function()
        {
            $four.css("color","#000");
        });







        $five.hover(function()
        {
            $five.css("color","green");
        });
        $five.focus(function()
        {
            $five.css("border-bottom","5px solid green");
        });
        $five.blur(function()
        {
            $five.css("border-bottom","0px solid green");
            $five.css("color","black");
        });
        $five.mouseout(function()
        {
            $five.css("color","#000");
        });





        $six.hover(function()
        {
            $six.css("color","green");
        });
        $six.focus(function()
        {
            $six.css("border-bottom","5px solid green");
        });
        $six.blur(function()
        {
            $six.css("border-bottom","0px solid green");
            $six.css("color","black");
        });
        $six.mouseout(function()
        {
            $six.css("color","#000");
        });






        $seven.hover(function()
        {
            $seven.css("color","green");
        });
        $seven.focus(function()
        {
            $seven.css("border-bottom","5px solid green");
        });
        $seven.blur(function()
        {
            $seven.css("border-bottom","0px solid green");
            $seven.css("color","black");
        });
        $seven.mouseout(function()
        {
            $seven.css("color","#000");
        });







        $eight.hover(function()
        {
            $eight.css("color","green");
        });
        $eight.focus(function()
        {
            $eight.css("border-bottom","5px solid green");
        });
        $eight.blur(function()
        {
            $eight.css("border-bottom","0px solid green");
            $eight.css("color","black");
        });
        $eight.mouseout(function()
        {
            $eight.css("color","#000");
        });

    </script>

<div class="tab-content" id="tabcontent">
    <!--本田车-->

    <div class="tab-pane active" id="BenTian">
        <div class="ListOfCar">
            <div class="BenCRV">
                <span id="CRV">本田CRV&nbsp;&nbsp;&nbsp;2.0L 净致版</span>
                <span id="CRVPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="CRVPricenumber">25.98万元</span></span>
                <button  class="btn btn-success" type="button" id="BenTianbuttom1" >立即购买</button>
            </div>


            <div class="BenLingPai">
                <span id="LingPai">本田凌派&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;豪华版</span>
                <span id="LingPaiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="LingPaiPricenumber">12.48万元</span></span>
                <button  class="btn btn-success" type="button" id="BenTianbuttom2" >立即购买</button>
            </div>

            <div class="BenSiYu">
                <span id="SiYu">本田思域&nbsp;&nbsp;&nbsp;180TURBO&nbsp;&nbsp;舒适版</span>
                <span id="SiYuPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="SiYuPricenumber">13.89万元</span></span>
                <button  class="btn btn-success" type="button" id="BenTianbuttom3" >立即购买</button>
            </div>


            <div class="BenYaGe">
                <span id="YaGe">本田雅阁&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;锐尊版</span>
                <span id="YaGePrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="YaGePricenumber">27.89万元</span></span>
                <button  class="btn btn-success" type="button" id="BenTianbuttom4" >立即购买</button>
            </div>


            <div class="BenGeShiTu">
                <span id="GeShiTu">本田歌诗图&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;至享版</span>
                <span id="GeShiTuPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="GeShiTuPricenumber">30.89万元</span></span>
                <button  class="btn btn-success" type="button" id="BenTianbuttom5" >立即购买</button>
            </div>

            <div class="BenAODeSai">
                <span id="AODeSai">本田奥德赛&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;至享版</span>
                <span id="AODeSaiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="AODeSaiPricenumber">30.89万元</span></span>
                <button  class="btn btn-success" type="button" id="BenTianbuttom6" >立即购买</button>
            </div>


        </div>
    </div>


    <!--丰田车-->
    <div class="tab-pane" id="FengTian">
        <div class="ListOfCar">
            <div class="FengTianCarmary">
						<span class="CAMRY">CAMRY HYBRID&nbsp;&nbsp;凯美瑞双擎&nbsp;&nbsp;2018款
						&nbsp;&nbsp;2.5HG&nbsp;&nbsp;豪华版<br/>
						<span class="Camryprice">官方指导价:&nbsp;&nbsp;<span class="pricenumber">23.98万元</span></span>
						</span>
                <!--<a class="buttonone" href="../ShopUI.html" target="_blank">--><button  class="btn btn-success" type="button" id="buttomone" >立即购买</button><!--</a>-->
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
                <button class="btn btn-success" type="button" id="buttomsix">立即购买</button>
            </div>
        </div>
    </div>

    <!--大众-->
    <div class="tab-pane" id="DaZhong">
        <div class="ListOfCar">


            <div class="ZhongHuiYang">
                <span id="HuiYang">大众&nbsp;&nbsp;辉昂&nbsp;&nbsp;380&nbsp;&nbsp;TSI&nbsp;&nbsp;御尊版</span>
                <span id="HuiYangPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="HuiYangPricenumber">13.25万元</span></span>
                <button  class="btn btn-success" type="button" id="dazhongbuttom1" >立即购买</button>
            </div>


            <div class="ZhongCC">
                <span id="CC">大众&nbsp;&nbsp;CC&nbsp;&nbsp;1.8&nbsp;&nbsp;TSI&nbsp;&nbsp;尊贵型</span>
                <span id="CCPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="CCPricenumber">30.54万元</span></span>
                <button  class="btn btn-success" type="button" id="dazhongbuttom2" >立即购买</button>
            </div>


            <div class="ZhongCrossCoupe">
                <span id="CrossCoupe">大众&nbsp;&nbsp;CrossCoupe&nbsp;&nbsp;1.8&nbsp;&nbsp;时尚版</span>
                <span id="CrossCoupePrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="CrossCoupePricenumber">20.74万元</span></span>
                <button  class="btn btn-success" type="button" id="dazhongbuttom3" >立即购买</button>
            </div>


            <div class="ZhongInset">
                <span id="Inset">大众&nbsp;&nbsp;甲壳虫&nbsp;&nbsp;沙丘越野版</span>
                <span id="InsetPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="InsetPricenumber">30.89万元</span></span>
                <button  class="btn btn-success" type="button" id="dazhongbuttom4" >立即购买</button>
            </div>


            <div class="ZhongTuRui">
                <span id="TuRui">大众&nbsp;&nbsp;途锐&nbsp;&nbsp;TSI&nbsp;&nbsp;拓界版</span>
                <span id="TuRuiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="TuRuiPricenumber">70.54万元</span></span>
                <button  class="btn btn-success" type="button" id="dazhongbutttom5" >立即购买</button>
            </div>



            <div class="ZhongMaiTeng">
                <span id="MaiTeng">大众&nbsp;&nbsp;迈腾&nbsp;&nbsp;280&nbsp;&nbsp;TSI&nbsp;&nbsp;DSG&nbsp;&nbsp;舒适性</span>
                <span id="MaiTengPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="MaiTengPricenumber">20.25万元</span></span>
                <button  class="btn btn-success" type="button" id="dazhongbuttom6" >立即购买</button>
            </div>

        </div>

    </div>

    <!--日产-->
    <div class="tab-pane" id="RiChan">
        <div class="ListOfCar">

            <div class="RiTianLai">
                <span id="TianLai">日产&nbsp;&nbsp;天籁&nbsp;&nbsp;2.5XL&nbsp;&nbsp;Upper&nbsp;&nbsp;智尊版</span>
                <span id="TianLaiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="TianLaiPricenumber">17.45万元</span></span>
                <button  class="btn btn-success" type="button" id="richanbuttom1" >立即购买</button>
            </div>


            <div class="RiGuiShi">
                <span id="GuiShi">日产&nbsp;&nbsp;贵士&nbsp;&nbsp;2.0&nbsp;&nbsp;SL</span>
                <span id="GuiShiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="GuiShiPricenumber">43.21万元</span></span>
                <button  class="btn btn-success" type="button" id="richanbuttom2" >立即购买</button>
            </div>


            <div class="RiQiJun">
                <span id="QiJun">日产&nbsp;&nbsp;奇骏&nbsp;&nbsp;2.5L&nbsp;&nbsp;XE</span>
                <span id="QiJunPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="QiJunPricenumber">17.59万元</span></span>
                <button  class="btn btn-success" type="button" id="richanbuttom3" >立即购买</button>
            </div>


            <div class="RiXuanYi">
                <span id="XuanYi">日产&nbsp;&nbsp;轩逸&nbsp;&nbsp;1.6XL豪华版</span>
                <span id="XuanYiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="XuanYiPricenumber">12.56万元</span></span>
                <button  class="btn btn-success" type="button" id="richanbuttom4" >立即购买</button>
            </div>


            <div class="RiLouLan">
                <span id="LouLan">日产&nbsp;&nbsp;楼兰&nbsp;&nbsp;2.5XE&nbsp;&nbsp;精英版</span>
                <span id="LouLanPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="LouLanPricenumber">25.48万元</span></span>
                <button  class="btn btn-success" type="button" id="richanbuttom5" >立即购买</button>
            </div>



            <div class="RiGTR">
                <span id="GTR">日产&nbsp;&nbsp;GTR&nbsp;&nbsp;R28</span>
                <span id="GTRPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="GTRPricenumber">170.23万元</span></span>
                <button  class="btn btn-success" type="button" id="richanbuttom6" >立即购买</button>
            </div>


        </div>
    </div>

    <!--宝马-->
    <div class="tab-pane" id="BaoMa">
        <div class="ListOfCar">


            <div class="BMW525i">
                <span id="W525i">宝马&nbsp;&nbsp;525i&nbsp;&nbsp;标准轴距版</span>
                <span id="W525iPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="W525iPricenumber">65.48万元</span></span>
                <button  class="btn btn-success" type="button" id="BaoMabuttom1" >立即购买</button>
            </div>



            <div class="BMWM6">
                <span id="M6">宝马&nbsp;&nbsp;M6&nbsp;&nbsp;XDrive</span>
                <span id="M6Price">官方指导价:&nbsp;&nbsp;&nbsp;<span class="M6Pricenumber">160.54万元</span></span>
                <button  class="btn btn-success" type="button" id="BaoMabuttom2" >立即购买</button>
            </div>


            <div class="BMWX6">
                <span id="X6">宝马&nbsp;&nbsp;X6&nbsp;&nbsp;xDrive28i</span>
                <span id="X6Price">官方指导价:&nbsp;&nbsp;&nbsp;<span class="X6Pricenumber">94.56万元</span></span>
                <button  class="btn btn-success" type="button" id="BaoMabuttom3" >立即购买</button>
            </div>


            <div class="BMWi8">
                <span id="i8">宝马&nbsp;&nbsp;i8</span>
                <span id="i8Price">官方指导价:&nbsp;&nbsp;&nbsp;<span class="i8Pricenumber">183.25万元</span></span>
                <button  class="btn btn-success" type="button" id="BaoMabuttom4" >立即购买</button>
            </div>


            <div class="BMW2series">
                <span id="series">BMW2系列旅游车</span>
                <span id="seriesPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="seriesPricenumber">30.58万元</span></span>
                <button  class="btn btn-success" type="button" id="BaoMabuttom5" >立即购买</button>
            </div>



            <div class="BMW7series7">
                <span id="series7">BMW7系列</span>
                <span id="series7Price">官方指导价:&nbsp;&nbsp;&nbsp;<span class="series7Pricenumber">200.41万元</span></span>
                <button  class="btn btn-success" type="button" id="BaoMabuttom6" >立即购买</button>
            </div>

        </div>
    </div>


    <!--福特-->
    <div class="tab-pane" id="FuTe">
        <div class="ListOfCar">
            <div class="FeTeZhiSheng">
                <span id="ZhiSheng">福特&nbsp;&nbsp;致胜2.4L&nbsp;&nbsp;尊享版</span>
                <span id="ZhiShengPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="ZhiShengPricenumber">25.98万元</span></span>
                <button  class="btn btn-success" type="button" id="futebuttom1" >立即购买</button>
            </div>


            <div class="FeTeFocus">
                <span id="Focus">福特&nbsp;&nbsp;福克斯&nbsp;&nbsp;1.6L&nbsp;&nbsp;TI-VCT</span>
                <span id="FocusPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="FocusPricenumber">15.23万元</span></span>
                <button  class="btn btn-success" type="button" id="futebuttom2" >立即购买</button>
            </div>


            <div class="FeTeJiaNianHua">
                <span id="JiaNianHua">福特&nbsp;&nbsp;嘉年华&nbsp;&nbsp;1.8L&nbsp;&nbsp;舒适版</span>
                <span id="JiaNianHuaPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="JiaNianHuaPricenumber">12.45万元</span></span>
                <button  class="btn btn-success" type="button" id="futebuttom3" >立即购买</button>
            </div>


            <div class="FeTeMengDiOu">
                <span id="MengDiOu">福特&nbsp;&nbsp;蒙迪欧&nbsp;&nbsp;2.0L&nbsp;&nbsp;Atkinson</span>
                <span id="MengDiOuPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="MengDiOuPricenumber">28.15万元</span></span>
                <button  class="btn btn-success" type="button" id="futebuttom4" >立即购买</button>
            </div>



            <div class="FengTeTanXianZhe">
                <span id="TanXianZhe">福特&nbsp;&nbsp;探险者&nbsp;&nbsp;3.5L&nbsp;&nbsp;精英版</span>
                <span id="TanXianZhePrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="TanXianZhePricenumber">50.19万元</span></span>
                <button  class="btn btn-success" type="button" id="futebuttom5" >立即购买</button>
            </div>


            <div class="FengFuRuiSi">
                <span id="FuRuiSi">福特&nbsp;&nbsp;福睿斯</span>
                <span id="FuRuiSiPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="FuRuiSiPricenumber">12.85万元</span></span>
                <button  class="btn btn-success" type="button" id="futebuttom6" >立即购买</button>
            </div>
        </div>
    </div>


    <!--保时捷-->
    <div class="tab-pane" id="BaoShiJie">
        <div class="ListOfCar">


            <div class="BaoKaYan" >
                <span id="KaYan">保时捷&nbsp;&nbsp;卡宴&nbsp;&nbsp;Turbo&nbsp;&nbsp;&nbsp;</span>
                <span id="KaYanPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="KaYanPricenumber">94.05万元</span></span>
                <button  class="btn btn-success" type="button" id="baoshijiebuttom1" >立即购买</button>
            </div>

            <div class="BaoTarget911">
                <span id="Target911">保时捷911&nbsp;&nbsp;&nbsp;Carrera</span>
                <span id="Target911Price">官方指导价:&nbsp;&nbsp;&nbsp;<span class="Target911Pricenumber">130.58万元</span></span>
                <button  class="btn btn-success" type="button" id="baoshijiebuttom2">立即购买</button>
            </div>


            <div class="BaoPan">
                <span id="Pan">保时捷&nbsp;&nbsp;Panamera&nbsp;&nbsp;&nbsp;Sport&nbsp;&nbsp;Turismo</span>
                <span id="PanPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="PanPricenumber">119.54万元</span></span>
                <button  class="btn btn-success" type="button" id="baoshijiebuttom3">立即购买</button>
            </div>


            <div class="Bao718series">
                <span id="series718">保时捷&nbsp;718系列&nbsp;&nbsp;&nbsp;</span>
                <span id="series718Price">官方指导价:&nbsp;&nbsp;&nbsp;<span class="series718number">92.58万元</span></span>
                <button  class="btn btn-success" type="button" id="baoshijiebuttom4">立即购买</button>
            </div>


            <div class="BaoMissionE">
                <span id="MissionE">保时捷MissionE概念车&nbsp;&nbsp;&nbsp;1.8L&nbsp;&nbsp;MT&nbsp;&nbsp;至享版</span>
                <span id="MissionEPrice">预测售价:&nbsp;&nbsp;&nbsp;<span class="MissionEPricenumber">600.58万元</span></span>
                <button  class="btn btn-success" type="button" id="baoshijiebuttom5">立即购买</button>
            </div>



            <div class="BaoCayenne">
                <span id="Cayenne">保时捷&nbsp;&nbsp;Cayenne</span>
                <span id="CayennePrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="CayennePricenumber">102.56万元</span></span>
                <button  class="btn btn-success" type="button" id="baoshijiebuttom6">立即购买</button>
            </div>

        </div>
    </div>


    <!--兰博基尼-->
    <div class="tab-pane" id="LanBoJiNi">
        <div class="ListOfCar">


            <div class="LanURUS">
                <span id="URUS">兰博基尼&nbsp;&nbsp;URUS</span>
                <span id="URUSPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="URUSPricenumber">302.25万元</span></span>
                <button  class="btn btn-success" type="button" id="lanbojinibuttom1" >立即购买</button>
            </div>



            <div class="LanHuracan">
                <span id="Huracan">兰博基尼&nbsp;&nbsp;Huracan</span>
                <span id="HuracanPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="HuracanPricenumber">380.88万元</span></span>
                <button  class="btn btn-success" type="button" id="lanbojinibuttom2" >立即购买</button>
            </div>


            <div class="LanAventAdor">
                <span id="AventAdor">兰博基尼&nbsp;&nbsp;AventAdor</span>
                <span id="AventAdorPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="AventAdorPricenumber">700.39万元</span></span>
                <button  class="btn btn-success" type="button" id="lanbojinibuttom3" >立即购买</button>
            </div>


            <div class="LanCenten">
                <span id="Centen">兰博基尼&nbsp;&nbsp;Centenario</span>
                <span id="CentenPrice">官方指导价:&nbsp;&nbsp;&nbsp;<span class="Centennumber">1100.12万元</span></span>
                <button  class="btn btn-success" type="button" id="lanbojinibuttom4" >立即购买</button>
            </div>

        </div>

    </div>

</div>
    </ul>

<!--模态框登录的制作-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog" style="width:350px">

		<div class="modal-content" style="height:300px">
			<div class="modal-header"><!--头部-->

				<h4 class="modal-title" id="myModalLabel">
					登录
				</h4>

			</div>


			<div class="modal-body"><!--中间部分-->
				<form action="/login.do" method="post" name="addForm">
					<span class="text">用户名:</span><input type="text" name="cusName"  id="cname" class="form-control" placeholder="请输入登录用户名">
					<br/>
					<span class="password">密码:</span><input type="password" name="cusPassword" id="pwd" class="form-control" placeholder="请输入密码">

			</div>

			<div class="modal-footer"><!--底部-->
				<input type="button" class="btn btn-success" value="登录" data-dismiss="modal"  id="denglu" onclick="this.form.submit();">
				</form>

			</div>

		</div>
	</div>
</div>


<!--模态框注册的制作-->
<div class="modal fade" id="myModalRigister" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">

		<div class="modal-content">
			<div class="modal-header"><!--头部-->

				<h4 class="modal-title" id="myModalLabel">
					注册
				</h4>

			</div>


			<div class="modal-body"><!--中间部分-->
				<form action="/register.do" method="post" name="registForm">
					<span class="text">用户名:</span><input type="text" class="form-control" id="cusName" name="cusName" placeholder="请输入注册用户名"><br/>
					<span id="repeat"></span>
					<br/>
					<span class="password">密码:</span><input type="password" class="form-control" id="cusPassword" name="cusPassword" placeholder="请输入注册密码" >
					<span class="Age">出生年月:</span><input type="text" class="form-control" name="cusBirthday" placeholder="">
					<span class="RealName">真实姓名:</span><input type="text" class="form-control" name="cusRealName" placeholder="">
					<span class="IDcard">身份证号码:</span><input type="text" class="form-control" name="cusIdCard" placeholder="">
					<span class="Address">地址:</span><input type="text" class="form-control" name="cusAddress" placeholder="">
					<span class="TelePhone">电话:</span><input type="text" class="form-control" name="cusTelephone" placeholder="">

			</div>

			<div class="modal-footer"><!--底部-->

                <a href="#SuccessregisterModal" data-toggle="modal" data-target="#SuccessregisterModal"><input type="button" class="btn btn-success" value="注册" data-dismiss="modal" id="zhuce" onclick="RegistForm()"></a>
				</form>

			</div>

		</div>
	</div>
</div>


<!--模态框注册成功的制作-->
<div class="modal fade" id="SuccessregisterModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:350px">
        <div class="modal-content" style="height:300px">
            <div class="modal-body"><!--中间部分-->
                <span class="SuccessModalText">注册成功</span>
                <img  id="imgone" src="../img/admin/nice.png" width="150px" height="150px"  >
            </div>

        </div>
    </div>
</div>

<!--关于小组的情况制作-->
<div class="modal fade" id="mygroup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:400px">

        <div class="modal-content" style="height:400px">
            <div class="modal-header"><!--头部-->

                <h3 class="modal-title" id="myModalLabel">
                    小组情况
                </h3>

            </div>

            <div class="modal-body" ><!--中间部分-->
                <span id="zhengjielin"><span class="name">郑洁玲</span>&nbsp;&nbsp;项目经理</span>
                <br/>
                <span id="chenqian" ><span class="name">陈茜</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PPT&nbsp;&nbsp;后端</span>
                <br/>
                <span id="wangqihao"><span class="name">王启豪</span>&nbsp;&nbsp;前端</span>
                <br/>
                <span id="huyusheng"><span class="name">胡钰圣</span>&nbsp;&nbsp;数据库&nbsp;&nbsp;后端</span>
                <br/>
                <span id="humianxiong"><span class="name">胡棉雄</span>&nbsp;&nbsp;后端&nbsp;&nbsp;文档</span>
                <br/>
                <span id="liangbiao"><span class="name">梁彪</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后端&nbsp;&nbsp;文档</span>
                <br/>

            </div>
        </div>
    </div>
</div>


<!--天气的制作-->
<div class="modal fade" id="myweather" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:700px">

        <div class="modal-content" style="height:600px">
            <div class="modal-header"><!--头部-->
                <h3 class="modal-title" id="myWeatherModalLabel">
                    天气情况
                </h3>
                <!--搜索框-->
                <textarea class="form-control" id="inputlocation"></textarea>
                <button class="btn btn-success" type="button" id="search">搜索</button>


            </div>

            <div class="modal-body" ><!--中间部分-->

                <!--中山天气信息-->
                <div class="tab-pane active" id="zhongshanweather">

                    <!--显示中山图片信息-->
                    <div class="zhongshanpc">
                    </div>
                    <!--今日天气情况-->
                    <div class="TodayWeather">
                        <img src="../img/WeatherAndMap/location.png" width="50" height="50" id="locationPC">
                        <!--中山文字，通过api获取-->
                        <span id="locationText"></span>
                        <!--天气图片-->
                        <div id="WeatherPC">
                        </div>
                        <!--天气状况-->
                        <span class="Weathersituation"><span id="WeathersituationTxt"></span></span>
                        <!--温差-->
                        <span class="lowHighTemptext"><span id="lowTemp"></span><span id="highTemp"></span></span>
                        <!--当地时间-->
                        <span id="LocalTime"></span>
                        <span id="humidity"><span id="humidityvalue"></span></span>
                    </div>
                    <!--未来两天天气预报-->
                    <div class="ThreeDayWeather">
                        <!--未来一天的天气信息-->
                        <div class="TheFirstDayWeather">

                            <!--未来一天日期-->
                            <span id="futureoneday"></span>
                            <!--未来一天天气图片-->
                            <div class="futureonePC">
                            </div>
                            <!--天气信息字段-->
                            <span id="futureone"></span>
                            <!--温度-->
                            <span id="lowTemponeday"></span>
                            <span id="highTemponeday"></span>
                            <!--未来一天相对湿度-->
                            <span id="futureonehumidity"></span>
                        </div>
                        <!--未来第二天的天气信息-->
                        <div class="TheSecondDayWeather">

                            <!--未来二天日期-->
                            <span id="futureSecondday"></span>
                            <!--未来第二天天气图片-->
                            <div class="futureSecondPC">
                            </div>
                            <!--天气信息字段-->
                            <span id="futureSecond"></span>
                            <!--温度-->
                            <span id="lowTempSecondday"></span>
                            <span id="highTempSecondday"></span>
                            <!--未来第二天相对湿度-->
                            <span id="futureSecondhumidity"></span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer"><!--底部-->
                </div>
            </div>

        </div>
    </div>
</div>


<!--地图的制作-->
<div class="modal fade" id="mylocation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:1150px">

        <div class="modal-content" style="height:630px">
            <div class="modal-header" id="app"><!--头部-->
                <h3 class="modal-title" id="myModalLabelone">
                    位置
                </h3>
                <p class="IPTest">IP测试:14.114.0.0~14.115.79.255</p>
                <p class="NowLocation">当前位置:<span class="mapgetlocation"></span></p>
                <!--搜索框-->
                <textarea class="form-control" id="IPtext" placeholder="请输入IP地址"></textarea>
                <textarea class="form-control" id="mapinputlocation"  placeholder="请输入行政区域"></textarea>
                <button class="btn btn-success" type="button" id="mapsearch">搜索</button>
                <button class="btn btn-primary" type="button" id="IPsearch">查询</button>

            </div>

            <div class="modal-body" ><!--中间部分-->

                <div class="tab-content">
                    <!--整个地图容器-->
                    <div class="tab-pane active" id="zhongshanlocation">
                        <!--地图容器-->
                        <div id="container">

                        </div>

                    </div>
                </div>

                <div class="modal-footer"><!--底部-->
                </div>

            </div>

        </div>

    </div>
</div>





<a href="javascript:;" id="btn" title="回到顶部"></a>










<!--通过和风天气API获取数据-->

<script>

    function loadXMLDoc() {
        var xmlhttp;


        if (window.XMLHttpRequest) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp = new XMLHttpRequest();
        }
        else {
            // IE6, IE5 浏览器执行代码
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        /*回调事件处理器*/
        xmlhttp.onreadystatechange = function () {

            /*请求完成加载并且响应成功*/
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(JSON.parse(xmlhttp.responseText));//将一个json字符串转化为json对象
                var data = JSON.parse(xmlhttp.responseText);

                /*当天天气信息*/
                document.getElementById("locationText").innerHTML=data.HeWeather6[0].basic.location;//位置
                document.getElementById("WeathersituationTxt").innerHTML="天气:&nbsp;"+data.HeWeather6[0].daily_forecast[0].cond_txt_d;//白天天气信息
                document.getElementById("lowTemp").innerHTML="温度:&nbsp;"+data.HeWeather6[0].daily_forecast[0].tmp_min+"&nbsp;~&nbsp;";//最低温度
                document.getElementById("highTemp").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data.HeWeather6[0].daily_forecast[0].tmp_max+"℃";//最高温度
                document.getElementById("LocalTime").innerHTML=data.HeWeather6[0].daily_forecast[0].date;//当地时间
                document.getElementById("humidity").innerHTML="相对湿度:&nbsp;"+data.HeWeather6[0].daily_forecast[0].hum;//相对湿度
                if(data.HeWeather6[0].basic.location=="深圳")/*坐标深圳*/
                {
                    $zhongshanpc=$(".zhongshanpc");
                    $zhongshanpc.css("background-image","url(../img/WeatherAndMap/shenzhen.jpg)");
                    $zhongshanpc.css("background-repeat","no-repeat");
                    $zhongshanpc.css("background-size","400px 330px");

                }
                if(data.HeWeather6[0].basic.location=="拉萨")/*坐标拉萨*/
                {
                    $zhongshanpc=$(".zhongshanpc");
                    $zhongshanpc.css("background-image","url(../img/WeatherAndMap/lasa.jpg)");
                    $zhongshanpc.css("background-repeat","no-repeat");
                    $zhongshanpc.css("background-size","400px 330px");

                }
                if(data.HeWeather6[0].basic.location=="中山")/*坐标拉萨*/
                {
                    $zhongshanpc=$(".zhongshanpc");
                    $zhongshanpc.css("background-image","url(../img/WeatherAndMap/zhongshan.jpg)");
                    $zhongshanpc.css("background-repeat","no-repeat");
                    $zhongshanpc.css("background-size","400px 330px");

                }




                /*当天天气信息*/
                if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="多云")
                {
                    $WeatherPC=$("#WeatherPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/cloudy.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="晴")
                {
                    $WeatherPC=$("#WeatherPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/sunnyPC.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="阴")
                {
                    $WeatherPC=$("#WeatherPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/dark.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="中雨")
                {
                    $WeatherPC=$("#WeatherPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/rain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="小雨")
                {
                    $WeatherPC=$("#WeatherPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/lightrain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="大雨")
                {
                    $WeatherPC=$("#WeatherPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/heavrRain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="阵雨")
                {
                    $WeatherPC=$("#WeatherPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/rain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="雷阵雨")
                {
                    $WeatherPC=$("#WeatherPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/rain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                /*当天天气信息*/



                /*未来一天的天气信息*/
                document.getElementById("futureoneday").innerHTML=data.HeWeather6[0].daily_forecast[1].date;//获取日期
                document.getElementById("futureone").innerHTML=data.HeWeather6[0].daily_forecast[1].cond_txt_d;//获取天气
                document.getElementById("lowTemponeday").innerHTML=data.HeWeather6[0].daily_forecast[1].tmp_min+"&nbsp;&nbsp;&nbsp;~&nbsp;";//最低温度
                document.getElementById("highTemponeday").innerHTML=data.HeWeather6[0].daily_forecast[1].tmp_max+"℃";//最高温度
                document.getElementById("futureonehumidity").innerHTML="相对湿度:&nbsp;"+data.HeWeather6[0].daily_forecast[1].hum;//相对湿度
                <!--加载图片-->
                if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="晴")
                {
                    $futureonePC=$(".futureonePC");
                    $futureonePC.css("background-image","url(../img/WeatherAndMap/sunnyPC.jpg)");
                    $futureonePC.css("background-repeat","no-repeat");
                    $futureonePC.css("background-size","150px 135px")
                }
                if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="多云")
                {
                    $futureonePC=$(".futureonePC");
                    $futureonePC.css("background-image","url(../img/WeatherAndMap/cloudy.jpg)");
                    $futureonePC.css("background-repeat","no-repeat");
                    $futureonePC.css("background-size","150px 135px")
                }
                if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="小雨")
                {
                    $futureonePC=$(".futureonePC");
                    $futureonePC.css("background-image","url(../img/WeatherAndMap/lightrain.jpg)");
                    $futureonePC.css("background-repeat","no-repeat");
                    $futureonePC.css("background-size","150px 135px")
                }
                if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="阴")
                {
                    $futureonePC=$(".futureonePC");
                    $futureonePC.css("background-image","url(../img/WeatherAndMap/dark.jpg)");
                    $futureonePC.css("background-repeat","no-repeat");
                    $futureonePC.css("background-size","150px 135px")
                }
                if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="阵雨")
                {
                    $WeatherPC=$(".futureonePC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/rain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="雷阵雨")
                {
                    $WeatherPC=$(".futureonePC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/rain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                /*未来一天的天气信息*/



                /*未来第二天的天气信息*/
                document.getElementById("futureSecondday").innerHTML=data.HeWeather6[0].daily_forecast[2].date;//获取日期
                document.getElementById("futureSecond").innerHTML=data.HeWeather6[0].daily_forecast[2].cond_txt_d;//获取天气
                document.getElementById("lowTempSecondday").innerHTML=data.HeWeather6[0].daily_forecast[2].tmp_min+"&nbsp;&nbsp;&nbsp;~&nbsp;";//最低温度
                document.getElementById("highTempSecondday").innerHTML=data.HeWeather6[0].daily_forecast[2].tmp_max+"℃";//最高温度
                document.getElementById("futureSecondhumidity").innerHTML="相对湿度:&nbsp;"+data.HeWeather6[0].daily_forecast[2].hum;//相对湿度
                <!--加载图片-->
                if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="晴")
                {
                    $futureSecondPC=$(".futureSecondPC");
                    $futureSecondPC.css("background-image","url(../img/WeatherAndMap/sunnyPC.jpg)");
                    $futureSecondPC.css("background-repeat","no-repeat");
                    $futureSecondPC.css("background-size","150px 135px")
                }
                if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="多云")
                {
                    $futureSecondPC=$(".futureSecondPC");
                    $futureSecondPC.css("background-image","url(../img/WeatherAndMap/cloudy.jpg)");
                    $futureSecondPC.css("background-repeat","no-repeat");
                    $futureSecondPC.css("background-size","150px 135px")
                }
                if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="小雨")
                {
                    $futureSecondPC=$(".futureSecondPC");
                    $futureSecondPC.css("background-image","url(../img/WeatherAndMap/lightrain.jpg)");
                    $futureSecondPC.css("background-repeat","no-repeat");
                    $futureSecondPC.css("background-size","150px 135px")
                }
                if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="阴")
                {
                    $futureSecondPC=$(".futureSecondPC");
                    $futureSecondPC.css("background-image","url(../img/WeatherAndMap/dark.jpg)");
                    $futureSecondPC.css("background-repeat","no-repeat");
                    $futureSecondPC.css("background-size","150px 135px")
                }
                if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="阵雨")
                {
                    $WeatherPC=$(".futureSecondPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/rain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="雷阵雨")
                {
                    $WeatherPC=$(".futureSecondPC");
                    $WeatherPC.css("background-image","url(../img/WeatherAndMap/rain.jpg)");
                    $WeatherPC.css("background-repeat","no-repeat");
                    $WeatherPC.css("background-size","283px 130px");
                }
                /*未来第二天的天气信息*/
            }
        }

        /*输入获得文本框值，可获得该城市的天气信息*/
        $inputlocationweather=$("#inputlocation");
        $searchweather=$("#search");
        $searchweather.click(function()
        {
            var location=$inputlocationweather.val()+"";
            var key="&"+"key"+"="+"dad99f28d0e344ecb45765e293f075c6";
            /*实例化成功之后，发送HTTP请求是异步进行的*/
            xmlhttp.open("GET", "https://free-api.heweather.com/s6/weather/forecast?location="+location+key, true);
            xmlhttp.send();//发送请求
        });

    }
    loadXMLDoc();

</script>


<!--通过高德地图IP自动定位-->
<script>
    function getLocationFromIP()
    {
        var LocationIP;
        if (window.XMLHttpRequest) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            LocationIP = new XMLHttpRequest();
        }
        else {
            // IE6, IE5 浏览器执行代码
            LocationIP = new ActiveXObject("Microsoft.XMLHTTP");
        }

        LocationIP.onreadystatechange = function ()
        {
            if (LocationIP.readyState == 4 && LocationIP.status == 200)
            {
                console.log(JSON.parse(LocationIP.responseText));
                var data = JSON.parse(LocationIP.responseText);

                $inputlocation=$("#mapinputlocation");
                $inputlocation.val(data.city);/*根据获取到的信息传值给地图显示文本框*/
            }
        }
        $IPtext=$("#IPtext");
        $IPsearch=$("#IPsearch");
        $IPsearch.click(function()
        {
            var IPtextone=$IPtext.val()+"";
            var key="&"+"key"+"="+"55a28100b9c28237604d88655f545317";
            LocationIP.open("GET", "https://restapi.amap.com/v3/ip?ip="+IPtextone+key, true);
            LocationIP.send();
        });

    }
    getLocationFromIP();
</script>



<!--通过高德地图API获取数据-->

<script>
    var map = new AMap.Map('container', {
        resizeEnable: true,
        //zoom:11,
        //center: [116.397428, 39.90923]
    });
    /*通过读取文本框的值获取地理位置信息*/
    $inputlocation=$("#mapinputlocation");
    $search=$("#mapsearch");
    $search.click(function()
    {
        var maplocation=$inputlocation.val()+"";
        map.setCity(maplocation);
        /*显示到当前位置属性*/
        $mapgetlocation=$(".mapgetlocation");
        $mapgetlocation.html($inputlocation.val());
    });

</script>






















<!--本田-->
<script>
$FengTianCarmy=$("#buttomone");
$FengPuLaDuo=$("#buttomtwo");
$FengHanLanDa=$("#buttomthree");
$FengLeiLing=$("#buttomfour");
$FengYiZe=$("#buttomfive");
$FengZhiXuan=$("#buttomsix");


/*点击凯美瑞立即购买按钮*/
$FengTianCarmy.click(function()
{
    <%if(customer==null) { %>
     alert("亲，请先登录哦！");
     <%} else{%>
    var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=2');
    setTimeout(function()
    {
        popup.postMessage('Carmary', '*');
    },0);
    <%}%>

});


/*点击普拉多立即购买按钮*/
$FengPuLaDuo.click(function()
{
    <%if(customer==null) { %>
    alert("亲，请先登录哦！");
    <%} else{%>
    var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=1');
    setTimeout(function()
    {
        popup.postMessage('PaLaDuo', '*');
    },0);
    <%}%>
});


/*点击汉兰达立即购买按钮*/
$FengHanLanDa.click(function()
{
    <%if(customer==null) { %>
    alert("亲，请先登录哦！");
    <%} else{%>
    var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=3');
    setTimeout(function()
    {
        popup.postMessage('HanLanDa', '*');
    },0);
    <%}%>
});


/*点击雷凌立即购买按钮*/
$FengLeiLing.click(function()
{
    <%if(customer==null) { %>
    alert("亲，请先登录哦！");
    <%} else{%>
    var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=4');
    setTimeout(function()
    {
        popup.postMessage('LeiLing', '*');
    },0);
    <%}%>
});



/*点击奕泽立即购买按钮*/
$FengYiZe.click(function()
{
    <%if(customer==null) { %>
    alert("亲，请先登录哦！");
    <%} else{%>
    var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=5');
    setTimeout(function()
    {
        popup.postMessage('YiZe', '*');
    },0);
    <%}%>
});

/*点击致炫立即购买按钮*/
$FengZhiXuan.click(function()
{
    <%if(customer==null) { %>
    alert("亲，请先登录哦！");
    <%} else{%>
    var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=6');
    setTimeout(function()
    {
        popup.postMessage('ZhiXuan', '*');
    },0);
    <%}%>
});
</script>
<script>
    $BenCRV=$("#BenTianbuttom1");
    $BenLingPai=$("#BenTianbuttom2");
    $BenSiYu=$("#BenTianbuttom3");
    $BenYaGe=$("#BenTianbuttom4");
    $BenGeShiTu=$("#BenTianbuttom5");
    $BenAoDeiSai=$("#BenTianbuttom6");

    /*点击本田CRV立即购买按钮*/
    $BenCRV.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=7');
        setTimeout(function()
        {
            popup.postMessage('CRV', '*');
        },0);
        <%}%>
    });

    /*点击凌派立即购买按钮*/
    $BenLingPai.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=8');
        setTimeout(function()
        {
            popup.postMessage('LingPai', '*');
        },0);
        <%}%>
    });

    /*点击思域立即购买按钮*/
    $BenSiYu.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=9');
        setTimeout(function()
        {
            popup.postMessage('SiYu', '*');
        },0);
        <%}%>
    });

    /*点击雅阁立即购买按钮*/
    $BenYaGe.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=10');
        setTimeout(function()
        {
            popup.postMessage('YaGe', '*');
        },0);
        <%}%>
    });

    /*点击歌诗图立即购买按钮*/
    $BenGeShiTu.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=11');
        setTimeout(function()
        {
            popup.postMessage('GeShiTu', '*');
        },0);
        <%}%>
    });

    /*点击奥德赛立即购买按钮*/
    $BenAoDeiSai.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=12');
        setTimeout(function()
        {
            popup.postMessage('AoDeiSai', '*');
        },0);
        <%}%>
    });

</script>

<!--大众-->
<script>
    $Huiyang=$("#dazhongbuttom1");
    $CC=$("#dazhongbuttom2");
    $cross=$("#dazhongbuttom3");
    $inset=$("#dazhongbuttom4");
    $TuiRui=$("#dazhongbutttom5");
    $MaiTeng=$("#dazhongbuttom6");

    /*点击辉扬立即购买按钮*/
    $Huiyang.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=13');
        setTimeout(function()
        {
            popup.postMessage('HuiYang', '*');
        },0);
        <%}%>
    });


    /*点击CC立即购买按钮*/
    $CC.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=14');
        setTimeout(function()
        {
            popup.postMessage('CC', '*');
        },0);
        <%}%>
    });



    /*点击Cross立即购买按钮*/
    $cross.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=15');
        setTimeout(function()
        {
            popup.postMessage('cross', '*');
        },0);
        <%}%>
    });



    /*点击甲壳虫立即购买按钮*/
    $inset.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=16');
        setTimeout(function()
        {
            popup.postMessage('inset', '*');
        },0);
        <%}%>
    });



    /*点击途锐立即购买按钮*/
    $TuiRui.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=17');
        setTimeout(function()
        {
            popup.postMessage('TuRui', '*');
        },0);
        <%}%>
    });



    /*点击迈腾立即购买按钮*/
    $MaiTeng.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=18');
        setTimeout(function()
        {
            popup.postMessage('MaiTeng', '*');
        },0);
        <%}%>
    });

</script>

<!--日产-->
<script>
    $Tian=$("#richanbuttom1");
    $GuiShi=$("#richanbuttom2");
    $QiJun=$("#richanbuttom3");
    $XuanYi=$("#richanbuttom4");
    $LouLan=$("#richanbuttom5");
    $GTR=$("#richanbuttom6");

    /*点击天籁立即购买按钮*/
    $Tian.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=19');
        setTimeout(function()
        {
            popup.postMessage('tian', '*');
        },0);
        <%}%>
    });


    /*点击贵士立即购买按钮*/
    $GuiShi.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=20');
        setTimeout(function()
        {
            popup.postMessage('guishi', '*');
        },0);
        <%}%>
    });

    /*点击奇骏立即购买按钮*/
    $QiJun.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=21');
        setTimeout(function()
        {
            popup.postMessage('qijun', '*');
        },0);
        <%}%>
    });



    /*点击轩逸立即购买按钮*/
    $XuanYi.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=22');
        setTimeout(function()
        {
            popup.postMessage('xuanyi', '*');
        },0);
        <%}%>
    });



    /*点击楼兰立即购买按钮*/
    $LouLan.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=23');
        setTimeout(function()
        {
            popup.postMessage('loulan', '*');
        },0);
        <%}%>
    });



    /*点击GTR立即购买按钮*/
    $GTR.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=24');
        setTimeout(function()
        {
            popup.postMessage('GTR', '*');
        },0);
        <%}%>
    });

</script>


<!--宝马-->
<script>
    $BMW525i=$("#BaoMabuttom1");
    $M6=$("#BaoMabuttom2");
    $X6=$("#BaoMabuttom3");
    $i8=$("#BaoMabuttom4");
    $BMW2=$("#BaoMabuttom5");
    $BMW7=$("#BaoMabuttom6");

    /*点击宝马525i立即购买按钮*/
    $BMW525i.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=31');
        setTimeout(function()
        {
            popup.postMessage('BMW525i', '*');
        },0);
        <%}%>
    });


    /*点击M6立即购买按钮*/
    $M6.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=32');
        setTimeout(function()
        {
            popup.postMessage('M6', '*');
        },0);
        <%}%>
    });

    /*点击X6立即购买按钮*/
    $X6.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=33');
        setTimeout(function()
        {
            popup.postMessage('X6', '*');
        },0);
        <%}%>
    });



    /*点击i8立即购买按钮*/
    $i8.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=34');
        setTimeout(function()
        {
            popup.postMessage('i8', '*');
        },0);
        <%}%>
    });



    /*点击BMW2立即购买按钮*/
    $BMW2.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=35');
        setTimeout(function()
        {
            popup.postMessage('BMW2', '*');
        },0);
        <%}%>
    });



    /*点击BMW7立即购买按钮*/
    $BMW7.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=36');
        setTimeout(function()
        {
            popup.postMessage('BMW7', '*');
        },0);
        <%}%>
    });
</script>

<script>
    $zhisheng=$("#futebuttom1");
    $fukesi=$("#futebuttom2");
    $jianianhua=$("#futebuttom3");
    $mengdiou=$("#futebuttom4");
    $tanxianzhe=$("#futebuttom5");
    $furuisi=$("#futebuttom6");



    /*点击福特致胜立即购买按钮*/
    $zhisheng.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=25');
        setTimeout(function()
        {
            popup.postMessage('zhisheng', '*');
        },0);
        <%}%>
    });


    /*点击福克斯立即购买按钮*/
    $fukesi.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=26');
        setTimeout(function()
        {
            popup.postMessage('fukesi', '*');
        },0);
        <%}%>
    });

    /*点击嘉年华立即购买按钮*/
    $jianianhua.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=27');
        setTimeout(function()
        {
            popup.postMessage('jianianhua', '*');
        },0);
        <%}%>
    });



    /*点击蒙迪欧立即购买按钮*/
    $mengdiou.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=28');
        setTimeout(function()
        {
            popup.postMessage('mengdiou', '*');
        },0);
        <%}%>
    });



    /*点击探险者立即购买按钮*/
    $tanxianzhe.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=29');
        setTimeout(function()
        {
            popup.postMessage('tanxianzhe', '*');
        },0);
        <%}%>
    });



    /*点击福睿斯立即购买按钮*/
    $furuisi.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=30');
        setTimeout(function()
        {
            popup.postMessage('furuisi', '*');
        },0);
        <%}%>
    });



</script>
<!--保时捷-->
<script>
    $kayan=$("#baoshijiebuttom1");
    $Bao911=$("#baoshijiebuttom2");
    $Pan=$("#baoshijiebuttom3");
    $Bao718=$("#baoshijiebuttom4");
    $MissionE=$("#baoshijiebuttom5");
    $Cayenne=$("#baoshijiebuttom6");




    /*点击Kayan立即购买按钮*/

    $kayan.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=41');
        setTimeout(function()
        {
            popup.postMessage('kayan', '*');
        },0);
        <%}%>
    });



    /*点击Bao911立即购买按钮*/
    $Bao911.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=42');
        setTimeout(function()
        {
            popup.postMessage('Bao911', '*');
        },0);
        <%}%>
    });

    /*点击Bao718立即购买按钮*/
    $Bao718.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=44');
        setTimeout(function()
        {
            popup.postMessage('Bao718', '*');
        },0);
        <%}%>
    });



    /*点击MissionE立即购买按钮*/
    $MissionE.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=45');
        setTimeout(function()
        {
            popup.postMessage('missionE', '*');
        },0);
        <%}%>
    });

    /*点击Cayenne立即购买按钮*/
    $Cayenne.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=46');
        setTimeout(function()
        {
            popup.postMessage('Cayenne', '*');
        },0);
        <%}%>
    });

    /*点击Pan立即购买按钮*/
    $Pan.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=43');
        setTimeout(function()
        {
            popup.postMessage('Pan', '*');
        },0);
        <%}%>
    });
</script>

<script>
    $URUS=$("#lanbojinibuttom1");
    $Huracan=$("#lanbojinibuttom2");
    $Avent=$("#lanbojinibuttom3");
    $cen=$("#lanbojinibuttom4");

    /*点击URUS立即购买按钮*/
    $URUS.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=37');
        setTimeout(function()
        {
            popup.postMessage('URUS', '*');
        },0);
        <%}%>
    });


    /*点击Huracan立即购买按钮*/
    $Huracan.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=38');
        setTimeout(function()
        {
            popup.postMessage('huracan', '*');
        },0);
        <%}%>
    });

    /*点击Avent立即购买按钮*/
    $Avent.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=39');
        setTimeout(function()
        {
            popup.postMessage('avent', '*');
        },0);
        <%}%>
    });



    /*点击cen立即购买按钮*/
    $cen.click(function()
    {
        <%if(customer==null) { %>
        alert("亲，请先登录哦！");
        <%} else{%>
        var popup = window.open('/getshopCusId.do?id=${sessionScope.customer.id}&carId=40');
        setTimeout(function()
        {
            popup.postMessage('cen', '*');
        },0);
        <%}%>
    });




</script>














</body>
<!--<script type="text/javascript" src="../jQuery/jquery-3.3.1.js"></script>-->
<script type="text/javascript" src="../js/Modal.js"></script>
<script type="text/javascript" src="../jQuery/jquery-3.0.0.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/MovePicture.js"></script>
<script type="text/javascript" src="../js/main.js"></script>

<script>
    var translate=function(value)
    {
        if(value<10)
        {
            return '0'+value;
        }
        else
        {
            return value;
        }
    }


    var app=new Vue(
        {
            el:'#democlock',
            data:
                {
                    date:new Date()
                },
            filters:
                {
                    formatDate:function(value)
                    {
                        var date=new Date(value);
                        var year=date.getFullYear();
                        var month=translate(date.getMonth()+1);
                        var day=translate(date.getDate());
                        var hours=translate(date.getHours());
                        var minutes=translate(date.getMinutes());
                        var seconds=translate(date.getSeconds());
                        return year+'-'+month+'-'+day+' '+hours+":"+minutes+':'+seconds;
                    }
                },
            mounted:function()
            {
                var _this=this;
                this.timer=setInterval(function()
                {
                    _this.date=new Date();
                },1000);
            },
            beforeDestroy:function()
            {
                if(this.timer){
                    clearInterval(this.timer);
                }
            }
        })

</script>
<script src="../js/clock.js"></script>
</html>
