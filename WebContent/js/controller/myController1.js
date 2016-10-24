
myController1={
	init:function(){
		
		var options={
				url:"data/data.json",
				data:{a:"aaa",b:"bbb"},
				dataType:"json",
				success:function(data){
					$("#name").html(data.name);
					$("#age").html(data.age);
				},
				error:function(){}
			};
		//$http.get(options);/* 与后端交互取得数据绑定到DOM元素上 */

		$.ajax(options);
		this.laodData();
		this.bindEvent();
		
	},/*end init*/
	
	laodData:function(){
		var options={
				type:"get",
				url:"data/grid.json",
				data:{a:"aaa",b:"bbb"},
				dataType:"json",
				success:function(data){
					template.repeat({
						repeatElement:$("#myList1")[0],
						data:data.list,
						process:function(object){
							return {
								"sum":parseInt(object.item.tax)+parseInt(object.item.bx),
								"css":"gridcss",
								"cssOdd":"gridcss"+(object.index%2)
							}
						}
					});					
				},
				error:function(){}
			};
		$.ajax(options);
	},/*end loadData*/
	
	bindEvent:function(){
		var th = this;
		$("#btn_delete").click(function(){
		});
		$("#btn_reload").click(function(){
			th.laodData();
		});	
	}
};
