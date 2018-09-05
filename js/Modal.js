/*
$(function()
  {
	$('#myModal').modal('hide')
  });
  
  
  $(function()
  {
	  $('#myModal').on('hide.bs.modal',function()
	  {
		  alert("登录成功!");
	  })
  });
  */
function CloseRigister()
{
	$('#myModalRigister').modal('hide');
}
function SuccessRigister()
{
	alert("注册成功!");
}


function CloseLogin()
{
	 $('#myModal').modal('hide');
}
 
function SuccessLogin()
{ 
	alert("登录成功!");
}

