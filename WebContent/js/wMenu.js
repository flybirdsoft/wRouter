/*****************
作者：邬畏畏

*****************/

var wMenu = {
	MainNav:function(p){
		$(p + " li a").each(function(index){
			/**onclick**/
			this.onclick = function(){
				/*wMenu.MainNavSetDefault(p);*/
				$(p + " li a").each(
						function(index){
							if(index==0)
							{
								this.className="one";
							}
							else if(index==1)
							{
								this.className="two";
							}
							else if(index==2)
							{
								this.className="three";
							}
							else if(index==3)
							{
								this.className="fore";
							}				
							else if(index==4)
							{
								this.className="five";
							}					
						}
				);
				
				if(index==0)
				{
					this.className="oneC";
				}
				else if(index==1)
				{
					this.className="twoC";
				}
				else if(index==2)
				{
					this.className="threeC";
				}
				else if(index==3)
				{
					this.className="foreC";
				}	
				else if(index==4)
				{
					this.className="fiveC";
				}
			}
			/**onclick end **/
			
			/**mouseover**/
			this.onmouseover=function(){
				if(index==0)
				{
					if(this.className!="oneC")
					this.className="oneH";
				}
				else if(index==1)
				{
					if(this.className!="twoC")
					this.className="twoH";
				}
				else if(index==2)
				{
					if(this.className!="threeC")
					this.className="threeH";
				}
				else if(index==3)
				{
					if(this.className!="foreC")
					this.className="foreH";
				}	
				else if(index==4)
				{
					if(this.className!="fiveC")
					this.className="fiveH";
				}	
			}
			/**mouseover end **/
			
			/**mouseover**/
			this.onmouseout=function(){
				if(index==0)
				{
					if(this.className!="oneC")
					this.className="one";
				}
				else if(index==1)
				{
					if(this.className!="twoC")
					this.className="two";
				}
				else if(index==2)
				{
					if(this.className!="threeC")
					this.className="three";
				}
				else if(index==3)
				{
					if(this.className!="foreC")
					this.className="fore";
				}	
				else if(index==4)
				{
					if(this.className!="fiveC")
					this.className="five";
				}	
			}
			/**mouseover end **/
		});	
	}
	,
	MainNavSetDefault:function(){
		var className="";
		$("#MainMenu li").each(function(index){
			className=this.className;
			if(className.indexOf("C")>0)
			{
				className=className.substr(0,className.length-1);
				this.className=className;
			}
		});
		$("#subMenu li").each(function(index){
			className=this.className;
			if(className.indexOf("C")>0)
			{
				className=className.substr(0,className.length-1);
				this.className=className;
			}
		});		
	}
	
	
}
/* end wMenu */


