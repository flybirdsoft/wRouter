
listController={
	init:function(){
		this.laodData();
		this.bindEvent();
		
	},/*end init*/
	
	laodData:function(){
		var options={
				url:"data/list.json",
				param:{a:"aaa",b:"bbb"},
				success:function(data){
					template.repeat({
						repeatElement:$(".boxList-item")[0],
						data:data.list
					});					
				},
				error:function(){}
			};
		$http.get(options);
	},/*end loadData*/
	
	bindEvent:function(){
	
	}
};
