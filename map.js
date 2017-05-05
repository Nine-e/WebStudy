/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:30:18
 * @version $Id$
 */

var map = new BMap.Map("myMap"); 


// var map = new BMap.Map("container");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
/*window.setTimeout(function() {
  map.panTo(new BMap.Point(116.409, 39.918));
}, 2000);
*/
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("北京"); 


var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);

marker.enableDragging();
/*marker.addEventListener("click",function(){
	alert("您点击了标注");
});*/
marker.addEventListener("dragend",function(e){
	alert("当前位置：" + e.point.lng + "," + e.point.lat);
});

var opts={
	width:250,
	height:100,
	title:"Hello"
}
var infoWindow = new BMap.InfoWindow("World",opts);
map.openInfoWindow(infoWindow,map.getCenter());

var polyline = new BMap.Polyline([
	new BMap.Point(116.399,39.910),
	new BMap.Point(116.405,39.920)
	],{
		strokeColor:"blue",
		strockWeight:6,
		strockOpacity:0.5
	});
map.addOverlay(polyline);