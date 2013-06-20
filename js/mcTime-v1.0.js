var FocusedH=false;
var FocusedM=false;
var FocusedS=false;
var parametres;
var id_ind;
var max_heure=12;
(function($)
		{ 
			
		    $.fn.mcTimer=function(options)
		    {       
		    	if(id_ind==null)id_ind=0;
		    	id_ind+=1;
		    	
		    	this.attr("name",id_ind);
		       	
		    	$.fn.mcTimer.val=function(){
		    		var s;
		    		s= ""+$("#"+id_ind+"mc_heure").val()+":"+ $("#"+id_ind+"mc_min").val();
		    		if(parametres.s)s+=":"+$("#"+id_ind+"mc_seconde").val();
		    		return s;
		    	};
		    	
		    	var defauts=
		        {
		            "s": false,
		            "code": true
		        };  
		         
		       parametres=$.extend(defauts, options); 
		       
		       if(parametres.mode=="PM" || parametres.mode=="pm")
		    	   max_heure=24;
		       
		       
		   	
		       this.each(function()
		       {
		    	   var html_T="<table Cellspacing=0 Cellpadding=0 border=0 id='"+id_ind+"mcinput' ><tr>";
		    	   
		    	 //1988
				   if(parametres.code)
					      html_T+="<td width='22px'align='center'><img id='"+id_ind+"mcicon' src='ico/TimeMC.png' alt='www.mappingcontrol' width='20px' hight='20px'/> </td>";
				   
				   if(parametres.s){
					   html_T+=
				   		"<td><table border=1 cellspacing=0 Cellpadding=0 width=64px align=left style='background-color:white'><tr>";
				   }else{
					   html_T+=
					   		"<td><table border=1 cellspacing=0 Cellpadding=0 width=44px align=left style='background-color:white'><tr>";
				   }
				   html_T+=
				   		"<td rowspan='2' valign='middle' align=center><input readonly Cellspacing=0 type='text' id='"+id_ind+"mc_heure' style='border:none;width:15px;'/>:";
			   
			   
				   html_T+=
					   "<input readonly Cellspacing=0 id='"+id_ind+"mc_min' type='text' style=' width : 15px;border:none;'/>";
					   
		    	   
		    	   if(parametres.s){
		    		   	html_T+=":"
			   				+"<input readonly Cellspacing=0 id='"+id_ind+"mc_seconde' type='text' style=' width : 15px;border:none;'/></td>";
		       	   }else{
			       		html_T+="</td>";
		       	   }
		    	   
				   html_T+=
						"</tr></table></td><td align='left'><table  Cellspacing=1 Cellpadding=0><td id='"+id_ind+"mcup' style='border: 1px solid black;'><img id='"+id_ind+"mcup_img' align='center' src='ico/fleche_up.gif' alt='incr�menter' width='20px' /></td></tr><tr><td id='"+id_ind+"mcdown' align='center' style='border: 1px solid black;'><img src='ico/fleche_down.gif' alt='d�cr�menter' id='"+id_ind+"mcdown_img' width='20px'/></td>	</tr> </table></td></table>";
				   
				   //console.log(html_T);
		    	   $(this).html(html_T);
		    	   init();	
		       });     
		       
		       
		    };
		})(jQuery);
function init(){
	
	$("#"+id_ind+"mc_heure").attr('name',id_ind);
	$("#"+id_ind+"mc_min").attr('name',id_ind);
	$("#"+id_ind+"mc_seconde").attr('name',id_ind);
	$("#"+id_ind+"mcup").attr('name',id_ind);
	$("#"+id_ind+"mcdown").attr('name',id_ind);
	
	var s=new Date().getHours();
    $("#"+id_ind+"mc_heure").val(s<10?"0"+s:s);
    s=new Date().getMinutes();
    $("#"+id_ind+"mc_min").val(s<10?"0"+s:s);
    s=new Date().getSeconds();
    $("#"+id_ind+"mc_seconde").val(s<10?"0"+s:s);
    
    $("#"+id_ind+"mc_heure").click(function() {
    	if($(this).attr("name")!=id_ind){
    		id_ind = $(this).attr("name");
    	}
    	focused("H");
    });
    $("#"+id_ind+"mc_min").click(function() {
    	if($(this).attr("name")!=id_ind){
    		id_ind = $(this).attr("name");
    	}
    	focused("M");
    });
    $("#"+id_ind+"mc_seconde").click(function() {
    	if($(this).attr("name")!=id_ind){
    		id_ind = $(this).attr("name");
    	}
    	focused("S");
    });
    $("#"+id_ind+"mcup").click(function(){
    	if($(this).attr("name")!=id_ind){
    		id_ind = $(this).attr("name");
    		
    	}
    	up();
    	$("#"+id_ind+"mcup_img").attr('src',"ico/fleche_up.gif");
    });
    $("#"+id_ind+"mcup").mousedown(function(){
    	if($(this).attr("name")!=id_ind){
    		id_ind = $(this).attr("name");
    		focused("");
    	}
    	$("#"+id_ind+"mcup_img").attr('src',"ico/fleche_up1.gif");
    });
    $("#"+id_ind+"mcdown").click(function(){
    	if($(this).attr("name")!=""+id_ind){
    		id_ind = $(this).attr("name");
    	}
    	down();
    	$("#"+id_ind+"mcdown_img").attr('src',"ico/fleche_down.gif");
    });
    $("#"+id_ind+"mcdown").mousedown(function(){
    	if($(this).attr("name")!=id_ind){
    		id_ind = $(this).attr("name");
    		focused("");
    	}
    	$("#"+id_ind+"mcdown_img").attr('src',"ico/fleche_down1.gif");
    });
    
}

function focused(s){	
	
	FocusedH=false;
	FocusedM=false;
	FocusedS=false;
	$("input[name!='"+id_ind+"']").each(function() { 
		$(this).css({'background-color' : '#FFFFFF'});
	});
	if(s=="H"){
		FocusedH=true;		
		$("#"+id_ind+"mc_heure").focus();
		$("#"+id_ind+"mc_heure").css({'background-color' : '#DFD8D1'});
		$("#"+id_ind+"mc_min").css({'background-color' : '#FFFFFF'});
		$("#"+id_ind+"mc_seconde").css({'background-color' : '#FFFFFF'});
		return;
	}
	if(s=="M"){
		FocusedM=true;
		$("#"+id_ind+"mc_min").focus();
		$("#"+id_ind+"mc_heure").css({'background-color' : '#FFFFFF'});
		$("#"+id_ind+"mc_min").css({'background-color' : '#DFD8D1'});
		$("#"+id_ind+"mc_seconde").css({'background-color' : '#FFFFFF'});
		return;
	}
	if(s=="S"){
		FocusedS=true;$("#"+id_ind+"mc_seconde").focus();
		$("#"+id_ind+"mc_heure").css({'background-color' : '#FFFFFF'});
		$("#"+id_ind+"mc_min").css({'background-color' : '#FFFFFF'});
		$("#"+id_ind+"mc_seconde").css({'background-color' : '#DFD8D1'});
		return;
		}
	focused("H");

}

function focusedRight(){	
	
	if(FocusedH){
		focused("M");
		return;
	}
	if(FocusedM && parametres.s){
		focused("S");
		return;
	}
		focused("H");
			
}

function focusedLeft(s){
	
	if(FocusedH && parametres.s){
		focused("S");
	}else if(FocusedM){
		focused("H");
	}else {
		focused("M");
	}
		
}


function up(){
	if(FocusedH){
		if($("#"+id_ind+"mc_heure").val()=="") $("#"+id_ind+"mc_heure").val("0");
		var i=parseInt($("#"+id_ind+"mc_heure").val());
		if (i<max_heure-1){ 
			if(i<9)	$("#"+id_ind+"mc_heure").val("0"+ ++i);
			else $("#"+id_ind+"mc_heure").val(""+ ++i);
		}
		else $("#"+id_ind+"mc_heure").val(""+ "00");
	}else if(FocusedM){
		if($("#"+id_ind+"mc_min").val()=="") $("#"+id_ind+"mc_min").val("0");
		var i=parseInt($("#"+id_ind+"mc_min").val());
		if (i<59){
			if(i<9)$("#"+id_ind+"mc_min").val("0"+ ++i);
			else $("#"+id_ind+"mc_min").val(""+ ++i);
		}
		else $("#"+id_ind+"mc_min").val(""+ "00");
	}else if(FocusedS){
		if($("#"+id_ind+"mc_seconde").val()=="") $("#"+id_ind+"mc_seconde").val("0");
		var i=parseInt($("#"+id_ind+"mc_seconde").val());
		if (i<59){
			if(i<9) $("#"+id_ind+"mc_seconde").val("0"+ ++i);
			else $("#"+id_ind+"mc_seconde").val(""+ ++i);
			}
		else $("#"+id_ind+"mc_seconde").val(""+ "00");
	}
}

function down(){
	if(FocusedH){
		if($("#"+id_ind+"mc_heure").val()=="") $("#"+id_ind+"mc_heure").val(max_heure);		
	   var i=parseInt($("#"+id_ind+"mc_heure").val());
	   if (i>0){
		   if(i<11) $("#"+id_ind+"mc_heure").val("0"+ --i);
		   else $("#"+id_ind+"mc_heure").val(""+ --i);
	   }
	   else $("#"+id_ind+"mc_heure").val(""+ max_heure-1);
	}else if(FocusedM){
		if($("#"+id_ind+"mc_min").val()=="") $("#"+id_ind+"mc_min").val(60);
	   var i=parseInt($("#"+id_ind+"mc_min").val());
	   if (i>0){
		   if(i<11) $("#"+id_ind+"mc_min").val("0"+ --i);
		   else $("#"+id_ind+"mc_min").val(""+ --i);
	   }
	   else $("#"+id_ind+"mc_min").val(""+ 59);
	}else if(FocusedS){
		if($("#"+id_ind+"mc_seconde").val()=="") $("#"+id_ind+"mc_seconde").val(60);
	   var i=parseInt($("#"+id_ind+"mc_seconde").val());
	   if (i>0) {
		   if(i<11)$("#"+id_ind+"mc_seconde").val("0"+ --i);
		   else $("#"+id_ind+"mc_seconde").val(""+ --i);
	   }
	   else $("#"+id_ind+"mc_seconde").val(""+ 59);
	}
		
}

$(document).keydown(function(event){
            
            switch (event.keyCode) {
			case 37:
				focusedLeft();
				break;
			case 38:
				up();
				break;
			case 39:
				focusedRight();
				break;
			case 40:
				down();
				break;
			}  
            	
});

