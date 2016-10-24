
indexController={
	init:function(args){
		var th =this;
		$("#btn").click(function(){
			th.gotoURL();
		});
		$("#args").html('可以在URL输入"/XXX"<br/>route的模板路径配置是:"/index/:id" <br/>args.id：'+args.id);
	},
	gotoURL:function(){
		location.href="#/action/me?p1=xxx&p2=yyy";
		/*
		wRouter.trigger("onhashchange");
		如果应用环境是IE8+,FF,chrome可以不使用wRouter.trigger("onhashchange") 
		如果要兼容IE7需要wRouter.trigger("onhashchange");
		*/				
	}
};
