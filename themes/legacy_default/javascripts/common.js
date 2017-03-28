// JavaScript Document


window.onload = function(){
	//switchImg();
}

//switchImg
function switchImg(){
    try {
        var obj = document.getElementsByClassName('hover');
        for (i = 0; i < obj.length; i++) {
            obj[i].onmouseover = function(){
                this.src = this.src.replace(/(.+?)(\.gif|\.png|\.jpg)/g, "$1_hover$2");
            }
            obj[i].onmouseout = function(){
                this.src = this.src.replace(/_hover/g, "");
            }
        }
    } 
    catch (e) {
    }
}



    $(function(){
        $(".hover").mouseover(function(){
            var src = $(this).attr("src");
            src = src.replace(/(.+?)(\.gif|\.png|\.jpg)/g, "$1_hover$2");
            $(this).attr("src", src);
        });
        $(".hover").mouseout(function(){
            var src = $(this).attr("src");
            src = src.replace(/_hover/g, "");
            $(this).attr("src", src);
        });
    });