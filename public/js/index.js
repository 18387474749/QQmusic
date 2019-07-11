var spans=document.querySelectorAll('ul.tree span') ;
   for(var span of spans){
   	span.onclick=function(){
   		var span=this;
   		if(span.className=='open'){
   			span.className='open';
   		}else{
   			var open=document.querySelector('ul.tree span.open');
   			open!=null&&(open.className='')
   			span.className='open';
   		}
   	}
   	
   }
    var i=0;
    var LIWIDTH=1235;
    var DURATION=500;
    var LICOUNT=2;
    var ulImgs=document.querySelector('li.tell ul');
    var ulIdxs=document.getElementById("ul-idxs")
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      }
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
    }
     var btnLeft=document.getElementsByClassName('btn-left')[0];
    var btnRight=document.getElementsByClassName('btn-right')[0];
    var canClick=true;
    btnRight.onclick=function(){
      move(-1)
    }
    function move(n){
      if(canClick){
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(1);
    }
    var ulIdxs=document.getElementById("ul-idxs");
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }