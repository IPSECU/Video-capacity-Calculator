var temp = 0;
var idesize = new Array(1024,2048,3072,1000,2000,3000,931);
///////////////////////////////////////
function choice(a)
{
  //alert(a);
 if(a == 0)
 {
 document.all.recdisk_gb.disabled = true;
 document.all.recdisk_mb.disabled = true;
 document.all.rectime_m.disabled = false;
 document.all.rectime_h.disabled = false;
 document.all.rectime_day.disabled = false;
 document.all.bitrate.disabled = false;
 document.all.recdisk_gb.style.backgroundColor = '#CCCCCC';
 document.all.recdisk_mb.style.backgroundColor = '#CCCCCC';
 document.all.rectime_day.style.backgroundColor = '#FFFFFF';
 document.all.rectime_h.style.backgroundColor = '#FFFFFF';
 document.all.rectime_m.style.backgroundColor = '#FFFFFF';
 document.all.bitrate.style.backgroundColor = '#FFFFFF';
 temp = 0;
 //alert(temp);
 }
 else if(a == 1)
 {
 document.all.rectime_m.disabled = true;
 document.all.rectime_h.disabled = true;
 document.all.rectime_day.disabled = true;
 document.all.recdisk_gb.disabled = false;
 document.all.recdisk_mb.disabled = false; 
 //document.all.rectime_m.value = "";
 document.all.bitrate.disabled = false;
 document.all.recdisk_mb.style.backgroundColor = '#FFFFFF';
 document.all.recdisk_gb.style.backgroundColor = '#FFFFFF';
 document.all.rectime_day.style.backgroundColor = '#CCCCCC';
 document.all.rectime_h.style.backgroundColor = '#CCCCCC';
 document.all.rectime_m.style.backgroundColor = '#CCCCCC';
  document.all.bitrate.style.backgroundColor = '#FFFFFF';
 temp = 1;
  //alert(temp);
 }
 else
 {
 document.all.bitrate.disabled = true;
 document.all.recdisk_gb.disabled = false;
 document.all.recdisk_mb.disabled = false;
 document.all.rectime_m.disabled = false;
 document.all.rectime_h.disabled = false;
 document.all.rectime_day.disabled = false;
 document.all.recdisk_mb.style.backgroundColor = '#FFFFFF';
 document.all.recdisk_gb.style.backgroundColor = '#FFFFFF';
 document.all.rectime_day.style.backgroundColor = '#FFFFFF';
 document.all.rectime_h.style.backgroundColor = '#FFFFFF';
 document.all.rectime_m.style.backgroundColor = '#FFFFFF';
 document.all.bitrate.style.backgroundColor = '#CCCCCC';
 temp = 2;
 }
}
////////////////////////////////////////
function clearpara()
{
 //alert(temp);
 document.all.bitrate.value = "";
 document.all.rectime_m.value = "";
 document.all.rectime_h.value = "";
 document.all.rectime_day.value = "";
 document.all.recdisk_gb.value = "";
 document.all.recdisk_mb.value = "";
 document.all.channel.value = "1";
 for(i=0;i<7;i++)
 {
 document.all.idesize[i].value = "";
 }
}
///////////////////////////////////////
function check()
{
	 var inbit = document.all.bitrate.value;
   var intime_m = document.all.rectime_m.value;
   var intime_h = document.all.rectime_h.value;
   var intime_day = document.all.rectime_day.value;
   var indisk_gb = document.all.recdisk_gb.value;
   var indisk_mb = document.all.recdisk_mb.value;
  if(temp == 1)
  {
    if(((inbit.length == 0) || ((indisk_gb.length == 0) && (indisk_mb.length == 0))) || (!isNum(inbit) || ((!isNum(indisk_gb)) && (!isNum(indisk_mb)))))
    //if(((inbit.length == 0) || ((indisk_gb.length == 0) && (indisk_mb.length == 0))))
    {
     alert("The input parameter is incorrect, please re-enter!!");
     return false;
    }
    else
   {return true;}
  }
  else if(temp == 0)
  {
	if(((inbit.length == 0) || ((intime_m.length == 0) && (intime_h.length == 0) && (intime_day.length == 0))) || (!isNum(inbit) || ((!isNum(intime_m)) && (!isNum(intime_h)) && (!isNum(intime_day)))))
	//if((inbit.length == 0) || ((intime_m.length == 0) && (intime_h.length == 0)))
    {
     alert("The input parameter is incorrect, please re-enter!!");
     return false;
    }
    else
    {return true;}
  }
  else
  {
	if((((indisk_gb.length == 0) && (indisk_mb.length == 0)) || ((intime_m.length == 0) && (intime_h.length == 0) && (intime_day.length == 0))) || (((!isNum(intime_m)) && (!isNum(intime_h)) && (!isNum(intime_day))) || ((!isNum(indisk_gb)) && (!isNum(indisk_mb)))))
	//if(((indisk_gb.length == 0) && (indisk_mb.length == 0)) || ((intime_m.length == 0) && (intime_h.length == 0)))
    {
     alert("The input parameter is incorrect, please re-enter!!");
     return false;
    }
    else
    {return true;}
  }
}
///////////////////////////////////////
function calulat()
{
	 var inbit = document.all.bitrate.value;
   var intime_m = document.all.rectime_m.value;
   var intime_h = document.all.rectime_h.value;
   var intime_day = document.all.rectime_day.value;
   var indisk_gb = document.all.recdisk_gb.value;
   var indisk_mb = document.all.recdisk_mb.value;
   var chs = document.all.channel.value;
  
   if(temp == 0)//计算磁盘
  {
    if(intime_m.length == 0)//选择时间
     {
      if(intime_h.length == 0)
   	  time = intime_day * 24 * 60 * 60;
   	  else
   	  time = intime_h * 60 * 60;
     }
    else if(intime_h.length == 0)
     {
   	  if(intime_m.length == 0)
   	  time = intime_day * 24 * 60 * 60;
   	  else
   	  time = intime_m * 60;
     }
    else
     {
      if(intime_h.length == 0)
   	  time = intime_m * 60;
   	  else
   	  time = intime_h * 60 * 60;  
     }
     result_disk = inbit * time * chs;
     disk_dot_gb = (((result_disk/8)/1024)/1024);//GB输出
     diks_dot_mb = (((result_disk)/8)/1024);//MB输出
     disk_gb = new Number(disk_dot_gb).toFixed(2);//四舍五入
     diks_mb = new Number(diks_dot_mb).toFixed(2);//四舍五入
     document.all.recdisk_gb.value = disk_gb;//输出
     document.all.recdisk_mb.value = diks_mb;
     ide(disk_gb);
     //alert(second);
   }
     else if(temp == 1)//计算时间
     {
	    if(indisk_mb.length == 0)//选择磁盘
      {
   	   disk = indisk_gb * 1024 * 1024 * 8;//GB--Kb
      }
      else
      {
   	   disk = indisk_mb * 1024 * 8;//MB-Kb
      }
      //time = disk/inbit; //未关联通道路数
      time = disk/(inbit * chs); //关联通道数
	    time_m = time/60;//换算成分钟
	    time_h = time/60/60;//换算成小时
	    time_day = time/60/60/24;//换算成天
	    document.all.rectime_m.value = time_m;//输出
	    document.all.rectime_h.value = time_h;//输出
	    document.all.rectime_day.value = time_day;//输出
     }
       else  //计算码率
       {
	      if(indisk_mb.length == 0)//选择磁盘
         {
   	      disk = indisk_gb * 1024 * 1024 * 8;
         }
        else
         {
   	      disk = indisk_mb * 1024 * 8;
         }
        if(intime_m.length == 0)//选择时间
         {
          if(intime_h.length == 0)
   	      time = intime_day * 24 * 60 * 60;
   	      else
   	      time = intime_h * 60 * 60;
         }
        else if(intime_h.length == 0)
         {
   	      if(intime_m.length == 0)
   	      time = intime_day * 24 * 60 * 60;
   	      else
   	      time = intime_m * 60;
         }
        else
         {
          if(intime_h.length == 0)
   	      time = intime_m * 60;
   	      else
   	      time = intime_h * 60 * 60;  
         }
    //rate = disk/time;//秒--//为关联通道数量
    rate = disk/(time * chs); //关联通道数量
	  dot = ".";
	  tochar = rate.toString();
	  var last = tochar.indexOf(dot);
    var bitrate = tochar.substr(0,last);
	  document.all.bitrate.value = bitrate;
   }
}
////////////////////////////////////////////
/*function clearpart()
{
  if(temp = 0)
  {
  document.all.bitrate.value = "";
  document.all.rectime_m.value = "";
  }
  else
  {
  document.all.recdisk_gb.value = "";
  document.all.recdisk_mb.value = "";
  }
}*/
////////////////////////////////////////////
function keep()
{
for(i = 0;i<=2;i++)
  {
    var know = (document.form1.method[i].checked == true ? 1 : 0);
    switch(know)
    {
	case 0: break;//continue;
	case 1: choice(i);
	         break;
	}
  }
}
///////////////////////////////////////////
function timefocus(tim)
{
 if(tim == 0)//激活小时
 {
 document.all.rectime_h.style.backgroundColor = 'white';
 document.all.rectime_m.style.backgroundColor = '#c0c0c0';
 document.all.rectime_m.value = "";
 document.all.rectime_day.style.backgroundColor = '#c0c0c0';
 document.all.rectime_day.value = "";
 } 
 else if(tim == 1)  //激活分钟
 {
 document.all.rectime_m.style.backgroundColor = 'white';
 document.all.rectime_h.style.backgroundColor = '#c0c0c0';
 document.all.rectime_h.value = "";
 document.all.rectime_day.style.backgroundColor = '#c0c0c0';
 document.all.rectime_day.value = "";
 }
 else  //激活天数
 {
 document.all.rectime_day.style.backgroundColor = 'white';
 document.all.rectime_h.style.backgroundColor = '#c0c0c0';
 document.all.rectime_h.value = "";
 document.all.rectime_m.style.backgroundColor = '#c0c0c0';
 document.all.rectime_m.value = "";	
 }
}
///////////////////////////////////////////
function diskfocus(dis)
{
 if(dis == 0)//激活GB
 {
 document.all.recdisk_gb.style.backgroundColor = 'white';
 document.all.recdisk_mb.style.backgroundColor = '#c0c0c0';
 document.all.recdisk_mb.value = "";
 } 
 else  //激活MB
 {
 document.all.recdisk_gb.style.backgroundColor = '#c0c0c0';
 document.all.recdisk_mb.style.backgroundColor = 'white';
 document.all.recdisk_gb.value = "";
 }
}
///////////////////////////////////////////
function isNum(num)
{
	var i,j,strTemp;
	strTemp="0123456789.";
	if ( num.length== 0){
		return false;
	}
	for (i=0;i<num.length;i++)
	{
		j=strTemp.indexOf(num.charAt(i));
		if (j==-1){
			return false;
		}
	}
	return true;
}
////////////////////////////////////////////
function ide(gb)
{
	var ideTemp;
	var ideTemp_1;
	for(i=0;i<7;i++)
	{
		ideTemp_1 = gb / idesize[i];
		ideTemp = new Number(ideTemp_1).toFixed(2);
		document.all.idesize[i].value = ideTemp;
	}
}