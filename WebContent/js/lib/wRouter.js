
/*****************************************
SPA框架

作者: 邬畏畏 wuweiwei
博客: www.cnblogs.com/wsoft
github : www.github.com/flybirdsoft

注意：http://www.x.com/x.html#/action/index
注意要有“#”号

功能说明：
1.可配置hash,通过hash的变化触发controller函数
2.自动载入页面模板
3.封装了原生ajax请求处理

wRouter调用执行流程：
1.先调用：wRouter.config(myroute);
2.在调用：wRouter.controller( "myControllerIndex",function(){} );

*****************************************/
/*
wRouter.route的结构：
{
	container:$("#mainContent")[0],
	routes:[
		{
		url:"/index",
		controller:"myControllerIndex",
		template:$("#templateIndex")[0]
		}
		,	
		{
		url:"/action/action1",
		controller:"myController1",
		templateUrl:"templates/myGrid.html"     可以指定模板页面
		}
		,
		{
		url:"/action/action2",
		controller:"myController2",
		templateUrl:"templates/myGrid2.html"     可以指定模板页面
		}
	],
	otherwise:{
		redirectTo:"/index"
	}
}
*/



