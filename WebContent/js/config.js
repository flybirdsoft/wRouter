/*
编写：邬畏畏
*/
var myroute={
	//templateContentId:"#mainContent",
	container:$("#mainContent")[0],
	routes:[
		{
			url:"/index/:id",
			controller:"myControllerIndex",
			template:$("#templateIndex")[0]
		}
		,	
		{
			url:"/action/action1",
			controller:"myController1",
			templateUrl:"templates/grid-1.html"
		}
		,
		{
			url:"/action/action2",
			controller:"myController2",
			templateUrl:"templates/grid-2.html"
		}
		,	
		{
			url:"/action/me",
			controller:"myControllerMe",
			template:$("#template3")[0]
		}
		,	
		{
			url:"/list",
			controller:"listController",
			templateUrl:"templates/list.html"
		}
	],
	otherwise:{
		redirectTo:"/index"
	}
};

wRouter.config(myroute);/*添加路由*/

wRouter.commonController(function(isFirst){/*isFirst is Boolean ,true is first laod or refresh*/
	/*所有hashchange 都触发 commonController*/
	if(isFirst)
	{
		wMenu.MainNav("#mainMenu");
		wRouter.trigger("onURLchange");/*触发onURLchange事件 */
	}	
});

wRouter.event["onURLchange"]=function(){/*注册事件*/

	if($location.action=="/index")
	{
		$("#mainMenu li a")[0].className="oneC";
	}
	else if($location.action=="/action/action1")
	{
		$("#mainMenu li a")[1].className="twoC";
	}
	else if($location.action=="/action/action2")
	{
		$("#mainMenu li a")[2].className="threeC";
	}
	else if($location.action=="/action/me")
	{
		$("#mainMenu li a")[3].className="foreC";
	}
	else if($location.action=="/list")
	{
		$("#mainMenu li a")[4].className="fiveC";
	}
}



/*
 下面是controller对应对的业务处理 
*/
wRouter.controller("myControllerIndex",function(args){
	indexController.init(args);
	/*
	indexController.init() is in js/controller/indexController.js 
	*/
});

wRouter.controller("myController1",function(){
	myController1.init();
});

wRouter.controller("myController2",function(){
	myController2.init();
});

wRouter.controller("listController",function(){
	listController.init();
});

wRouter.controller("myControllerMe",function(){
	$("#param").html("URL参数是："+wRouter.location.param+"<br/>URL对象形式："+JSON.stringify(wRouter.location.params));
	$("#me").html("框架编写：邬畏畏<br/><a href='http://www.cnblogs.com/wsoft' target='_blank'>http://www.cnblogs.com/wsoft</a><br/><a href='http://www.FlyBirdSoft.com/WUI' target='_blank'>http://www.FlyBirdSoft.com/WUI</a>");
	//处理表单
	$("#submit").click(function(){
		$http.postData(
				{
					url:"data/form.jsp",
					form:"#myForm",
					success:function(data){
						alert(data);
					}
				}
		);
	});
});

wRouter.endController(function(controllerName){
	/*通过controllerName判断，来清理对应的controller*/
	console.log(controllerName+" 清理");
});
