var map = new BMap.Map("myMap"); 
var point = new BMap.Point(120.156236, 30.254034);
map.centerAndZoom(point, 15); 
map.enableScrollWheelZoom();
var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);

//控件
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl()); 
//显示西湖附近所有宾馆
var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
    autoViewport: true,
    panel:"result"
  }
});
local.searchNearby("宾馆","西湖");
//能够查询杭州师范大学（杭州市海曙路58号）到某个宾馆的公交线路
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "result"
  }
});
marker.addEventListener("click",function(){
	transit.search("杭州市海曙路58号","西湖区文二路38号");
});
/*transit.search("杭州市海曙路58号","西湖区文二路38号");*/


//能够查询杭州师范大学（杭州市海曙路58号）到某个宾馆的公交线路
$('.ui-search-route-search').click(function(e){
	let end = $('#end');
	let text = end.val();
	if(!text){
		alert('终点不能为空');
		return;
	}

	let transit = new BMap.TransitRoute(map, {
    renderOptions: {
    map: map,
    panel: "result"
  
    }
    });
	map.clearOverlays();
	transit.search("杭州师范大学仓前新校区", text);
});

$('#myMap').click((e) => {
    $('#end').val(e.target.title);
});

//杭师大与西湖地图切换
$('.ui-select-xihu').click(function(){
	var point = new BMap.Point(120.156236, 30.254034);
	map.centerAndZoom(point, 15); 
	local.searchNearby("宾馆","西湖");

});

$('.ui-select-hznu').click(function(e){
	map.clearOverlays();
	var point = new BMap.Point(120.01525, 30.29515);
	map.centerAndZoom(point,18); 

	/*var opts = {
  	width: 250, // 信息窗口宽度    
  	height: 100, // 信息窗口高度    
  	title: "Hello" // 信息窗口标题   
	}
	var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象    
	map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口*/

	$.getJSON("js/ex09.json",function(data){
		alert(data[0].name);
		console.log("11");
	});

	$('#result').empty();

});
