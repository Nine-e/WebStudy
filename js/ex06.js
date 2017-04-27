/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-26 17:55:11
 * @version $Id$
 */

$(document).ready(function(){
	$(".ui-box1-item").click(function(){
		var img=$(this).find("img").attr("src");
		$(".ui-show").hide();
		$(".ui-hide-item img").attr("src",img);
		$(".ui-hide").fadeIn(500);

	});
	$(".ui-hide-item").click(function(){
		$(".ui-hide").hide();
		$(".ui-show").show();

	});

	$(".ui-box2-line1-first").click(function(){
		$(".ui-box2-line1").find("div").not(this).css("background-color","#FFF");
		$(this).css("background-color","#C0C0C0");
		$(".ui-box2-line2-cnt").text("1");
	});
	$(".ui-box2-line1-middle").click(function(){
		$(".ui-box2-line1").find("div").not(this).css("background-color","#FFF");
		$(this).css("background-color","#C0C0C0");
		$(".ui-box2-line2-cnt").text("2");
	});
	$(".ui-box2-line1-last").click(function(){
		$(".ui-box2-line1").find("div").not(this).css("background-color","#FFF");
		$(this).css("background-color","#C0C0C0");
		$(".ui-box2-line2-cnt").text("3");
	});

	var child = document.getElementById('ui-box3-line'),
	$item=$(child.cloneNode(true));
	var num = $(".ui-box3-line").length;

	$(".ui-box3-button").click(function(){
		if(num==0){
			$(".ui-box3-noline").hide();
		}
		var $newItem=$item.clone();
		num++;
		$newItem.children("div.ui-box3-line-index").text(num);
		$newItem.children("div.ui-box3-line-delete").bind("click",deleteData);
        $(".ui-box3-data").append($newItem);

	});

	$(".ui-box3-line-delete").click(deleteData);
	function deleteData(){
        num--;
        $(this).parent().hide(function(){
            $(this).remove();
            console.log(num);
            for (var i=0;i<num;i++) {
                $(".ui-box3-line-index").eq(i).text(i+1);
            }
            if(num==0){
        	$(".ui-box3-noline").show();
        }
        });

    }
});