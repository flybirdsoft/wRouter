
myController2={
	rowIndex:-1,
	init:function(){
		var th = this;

		var loadData=function(){
			$http.useMask=false;
			var options={
					url:"data/grid.json",/*模板中的数据*/
					param:{a:"aaa",b:"bbb"},
					success:function(data){
						th.model = template.repeat({
							repeatElement:$("#myList2")[0],
							data:data.list,
							process:function(object){
								return {
									"sum":parseInt(object.item.tax) + parseInt(object.item.bx),
									"css":"gridcss",
									"cssOdd":"gridcss"+(object.index%2),
									"index":object.index
								}
							}
						});
						th.bindGridEvent(); /*数据载入完毕后绑定表格事件处理*/
						th.bindEvnet();/*绑定处理数据按钮事件*/
					},
					error:function(){}
			};
			$.ajax(options);/*请求模板中的数据*/
		}
		
		loadData();
		
	}/*end init*/
	,
	bindGridEvent :function(){/*表格事件绑定*/

	},
	bindEvnet:function(){/*保存事件绑定*/

	}
};


