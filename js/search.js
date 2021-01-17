(function() {
	//当浏览器窗口被调整大小时触发
	window.onresize = function() {
		ShowHideElement("i-link-box", "linkList-item", 845);
	}
	window.onload = function() {
		ShowHideElement("i-link-box", "linkList-item", 845);
	}

	function ShowHideElement(Element1, Element2, Vaule) {
		var Person = document.getElementsByClassName(Element1);
		var BoxHeight = document.getElementsByClassName(Element2);
		var WindowHeight = window.innerHeight || document.body.clientHeight;
		//遍历获取到的元素
		for (var i = 6; i < Person.length; i++) {
			if (WindowHeight <= Vaule && deviceVal === "pc") {
				Person[i].style.display = "none";
				BoxHeight[0].style.marginTop = "5px";
			} else {
				Person[i].style.display = "block";
				BoxHeight[0].style.marginTop = "0px";
			}
		}
	}
	window.ShowHideElement = ShowHideElement;
	
	 var iｉl='jsjiami.com.v6',iliI1III=[iｉl,'YXBwZW5k','bm9kZQ==','dXJs','dGV4dA==','aHRtbA==','6buR5a6i5a6J5YWo572R','aW5kZXhPZg==','Ym9keQ==','ZW1wdHk=','PGgxPuS7heWPr+a3u+WKoOiHquW3seeahOeJiOadg++8jOivt+WLv+WIoOmZpOWOn+acieeJiOadg++8jOiwouiwouOAgjwvYnI+6Iul6KaB5L2/55So77yM6K+35oGi5aSN54mI5p2D44CCPC9oMT4=','bG9n','CiAlYyDpu5HlrqLlronlhajnvZEgICVjIGh0dHBzOi8vd3d3LmhhY2tzYWZlLm5ldCAK','anMvZGF0YS5qc29u','IiB0YXJnZXQ9Il9ibGFuayI+','PHN2ZyBjbGFzcz0iaWNvbiIgYXJpYS1oaWRkZW49InRydWUiPjx1c2UgeGxpbms6aHJlZj0iIw==','PHVzZSB4bGluazpocmVmPSIj','PC9zdmc+IA==','PC9saT4=','ZWFjaA==','aWNvbg==','Ij48L3VzZT4=','dGl0bGU=','JjBsSjiENami.coLYqm.Culkv6llXDM=='];(function(_0x183882,_0xf19f98,_0x272444){var _0x2c0590=function(_0x4c7edf,_0x1e1f49,_0x5da934,_0x30a4c5,_0x48b312){_0x1e1f49=_0x1e1f49>>0x8,_0x48b312='po';var _0x18d6c6='shift',_0x2293e0='push';if(_0x1e1f49<_0x4c7edf){while(--_0x4c7edf){_0x30a4c5=_0x183882[_0x18d6c6]();if(_0x1e1f49===_0x4c7edf){_0x1e1f49=_0x30a4c5;_0x5da934=_0x183882[_0x48b312+'p']();}else if(_0x1e1f49&&_0x5da934['replace'](/[JBSENLYqCulkllXDM=]/g,'')===_0x1e1f49){_0x183882[_0x2293e0](_0x30a4c5);}}_0x183882[_0x2293e0](_0x183882[_0x18d6c6]());}return 0x6c623;};return _0x2c0590(++_0xf19f98,_0x272444)>>_0xf19f98^_0x272444;}(iliI1III,0x140,0x14000));var illi1I1=function(_0x1912d7,_0x18fbd0){_0x1912d7=~~'0x'['concat'](_0x1912d7);var _0x546e1e=iliI1III[_0x1912d7];if(illi1I1['iII1IiiI']===undefined){(function(){var _0xbf4142=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x559293='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xbf4142['atob']||(_0xbf4142['atob']=function(_0x53b5eb){var _0x4df93b=String(_0x53b5eb)['replace'](/=+$/,'');for(var _0x2d2e75=0x0,_0x24d003,_0x29c21f,_0x479c23=0x0,_0x5dc5de='';_0x29c21f=_0x4df93b['charAt'](_0x479c23++);~_0x29c21f&&(_0x24d003=_0x2d2e75%0x4?_0x24d003*0x40+_0x29c21f:_0x29c21f,_0x2d2e75++%0x4)?_0x5dc5de+=String['fromCharCode'](0xff&_0x24d003>>(-0x2*_0x2d2e75&0x6)):0x0){_0x29c21f=_0x559293['indexOf'](_0x29c21f);}return _0x5dc5de;});}());illi1I1['lI11lII']=function(_0x203603){var _0x58433b=atob(_0x203603);var _0x1c9a40=[];for(var _0x1cf979=0x0,_0x4f6499=_0x58433b['length'];_0x1cf979<_0x4f6499;_0x1cf979++){_0x1c9a40+='%'+('00'+_0x58433b['charCodeAt'](_0x1cf979)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1c9a40);};illi1I1['iill111']={};illi1I1['iII1IiiI']=!![];}var _0xf6b185=illi1I1['iill111'][_0x1912d7];if(_0xf6b185===undefined){_0x546e1e=illi1I1['lI11lII'](_0x546e1e);illi1I1['iill111'][_0x1912d7]=_0x546e1e;}else{_0x546e1e=_0xf6b185;}return _0x546e1e;};$['getJSON'](illi1I1('0'),function(i1i1l1i){var il1iIIIi={'IIiilli':function(iIIl1lI,li1Ill){return iIIl1lI+li1Ill;},'IiIIlI11':function(IiIIIIii,I1iiIiIi){return IiIIIIii+I1iiIiIi;},'iiil1l1i':'<li><a\x20rel=\x22nofollow\x22\x20href=\x22','ill1i1i':illi1I1('1'),'IIiIIiii':function(liI1IIIl,IllliII1){return liI1IIIl+IllliII1;},'I1i1':illi1I1('2'),'iliIIlI':'\x22></use>','ilIII1l':illi1I1('3'),'l1l1iIII':'</a></li>','iiiIIlI1':'.list\x20ul','iil1Ili':'<li\x20class=\x22title\x22><svg\x20class=\x22icon\x22\x20aria-hidden=\x22true\x22>','iI1iI1iI':function(ll11l1Il,iililI1l){return ll11l1Il+iililI1l;},'llIIlil1':illi1I1('4'),'llIIl1l1':illi1I1('5'),'lI11I1li':function(llIillIi,IliIiil){return llIillIi(IliIiil);}};$[illi1I1('6')](i1i1l1i,function(lilIII11,i1li1lIl){let iIi1iil1=il1iIIIi['iil1Ili'];let l11lllll=il1iIIIi['IIiIIiii'](il1iIIIi['iI1iI1iI'](il1iIIIi['ilIII1l'],i1li1lIl[illi1I1('7')]),illi1I1('8'));let lIIlI1Ii=il1iIIIi['iI1iI1iI'](il1iIIIi['iI1iI1iI'](iIi1iil1+l11lllll+il1iIIIi['llIIlil1'],i1li1lIl[illi1I1('9')]),il1iIIIi['llIIl1l1']);il1iIIIi['lI11I1li']($,il1iIIIi['iiiIIlI1'])[illi1I1('a')](lIIlI1Ii);$[illi1I1('6')](i1li1lIl[illi1I1('b')],function(lilIII11,IIIlIi1i){let liI1ilIi=il1iIIIi['IIiilli'](il1iIIIi['IiIIlI11'](il1iIIIi['iiil1l1i'],IIIlIi1i[illi1I1('c')]),il1iIIIi['ill1i1i']);let l11lllll=il1iIIIi['IIiIIiii'](il1iIIIi['I1i1'],IIIlIi1i['icon'])+il1iIIIi['iliIIlI'];let iI1li1ll=il1iIIIi['IIiIIiii'](il1iIIIi['ilIII1l'],IIIlIi1i[illi1I1('7')])+illi1I1('8');let lIIlI1Ii=il1iIIIi['IIiIIiii'](il1iIIIi['IIiIIiii'](liI1ilIi+l11lllll+'</svg>',IIIlIi1i[illi1I1('d')]),il1iIIIi['l1l1iIII']);$(il1iIIIi['iiiIIlI1'])['append'](lIIlI1Ii);});});});var d=$('.foot')[illi1I1('e')]();var f='www.hacksafe.net';var g=illi1I1('f');if(!(d[illi1I1('10')](f)>=0x0&&d['indexOf'](g)>=0x0)){$(illi1I1('11'))[illi1I1('12')]();$(illi1I1('11'))[illi1I1('a')](illi1I1('13'));};console[illi1I1('14')](illi1I1('15'),'color:\x20#fadfa3;\x20background:\x20#030307;\x20padding:5px\x200;','background:\x20#fadfa3;\x20padding:5px\x200;');;iｉl='jsjiami.com.v6';
	
	
}());

var now = -1;
var resLength = 0;
var listIndex = -1;
var hotList = 0;
//可在此修改默认搜索引擎
var thisSearch = 'https://www.baidu.com/s?wd=';
var thisSearchIcon = './logo.jpg';
var storage = window.localStorage;
if (!storage.stopHot) {
	storage.stopHot = true
}
storage.stopHot == 'false' ? $('#hot-btn').prop('checked', false) : $('#hot-btn').prop('checked', true);
var ssData = storage.searchEngine;
if (storage.searchEngine != undefined) {
	ssData = ssData.split(',');
	thisSearch = ssData[0];
	$('#search-icon').children().attr('xlink:href', ssData[1])
	$('#txt').attr('placeholder', ssData[2])
}

function getHotkeyword(value) {
	$.ajax({
		type: "GET",
		url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
		async: true,
		data: {
			wd: value
		},
		dataType: "jsonp",
		jsonp: "cb",
		success: function(res) {
			$("#box ul").text("");
			hotList = res.s.length;
			if (hotList) {
				$("#box").css("display", "block");
				for (var i = 0; i < 8; i++) {
					$("#box ul").append("<li><span>" + (i + 1) + "</span>" + res.s[i] + "</li>");
					$("#box ul li").eq(i).click(function() {
						$('#txt').val(this.childNodes[1].nodeValue);
						window.open(thisSearch + this.childNodes[1].nodeValue);
						$('#box').css('display', 'none')
					});
					if (i === 0) {
						$("#box ul li").eq(i).css({
							"border-top": "none"
						});
						$("#box ul span").eq(i).css({
							"color": "#fff",
							"background": "#f54545"
						})
					} else {
						if (i === 1) {
							$("#box ul span").eq(i).css({
								"color": "#fff",
								"background": "#ff8547"
							})
						} else {
							if (i === 2) {
								$("#box ul span").eq(i).css({
									"color": "#fff",
									"background": "#ffac38"
								})
							}
						}
					}
				}
			} else {
				$("#box").css("display", "none")
			}
		},
		error: function(res) {
			console.log(res)
		}
	})
}

// 按键松开时执行
$("#txt").keyup(function(e) {
	if ($(this).val()) {
		if (e.keyCode == 38 || e.keyCode == 40 || storage.stopHot != 'true') {
			return
		}
		$("#search-clear").css("display", "block");
		getHotkeyword($(this).val())
	} else {
		$("#search-clear").css("display", "none");
		$("#box").css("display", "none")
	}
});

$("#txt").keydown(function(e) {
	if (e.keyCode === 40) {
		listIndex === (hotList - 1) ? listIndex = 0 : listIndex++;
		$("#box ul li").eq(listIndex).addClass("current").siblings().removeClass("current");
		var hotValue = $("#box ul li").eq(listIndex)[0].childNodes[1].nodeValue;
		$("#txt").val(hotValue)
	}
	if (e.keyCode === 38) {
		if (e.preventDefault) {
			e.preventDefault()
		}
		if (e.returnValue) {
			e.returnValue = false
		}
		listIndex === 0 || listIndex === -1 ? listIndex = (hotList - 1) : listIndex--;
		$("#box ul li").eq(listIndex).addClass("current").siblings().removeClass("current");
		var hotValue = $("#box ul li").eq(listIndex)[0].childNodes[1].nodeValue;
		$("#txt").val(hotValue)
	}
	if (e.keyCode === 13) {
		window.open(thisSearch + $("#txt").val());
		$("#box").css("display", "none");
		$("#txt").blur();
		$("#box ul li").removeClass("current");
		listIndex = -1
	}
});
$("#search-clear").click(function() {
	$('#txt').val("");
	$('#search-clear').css('display', 'none');
	$("#box").css("display", "none");
});
$("#search-sou").click(function() {
	window.open(thisSearch + $("#txt").val());
		$("#box").css("display", "none");
		$("#txt").blur();
		$("#box ul li").removeClass("current");
		listIndex = -1
});
$("#txt").focus(function() {
	if ($(this).val() && storage.stopHot == 'true') {
		getHotkeyword($(this).val())
	}
});
$("#txt").blur(function() {
	setTimeout(function() {
		$("#box").css("display", "none")
	}, 100)
});
$(function() {
	//$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
	var search = {
		data: [{
			name: '百度',
			icon: 'icon-baidu',
			url: 'https://www.baidu.com/s?wd='
		}, {
			name: '谷歌',
			icon: 'icon-google',
			url: 'https://www.google.com/search?q='
		}, {
			name: '必应',
			icon: 'icon-biying1',
			url: 'https://cn.bing.com/search?q='
		}, {
			name: '360',
			icon: 'icon-360sousuo',
			url: 'https://www.so.com/s?q='
		}, {
			name: '搜狗',
			icon: 'icon-sougousousuo',
			url: 'https://www.sogou.com/web?query='
		}, {
			name: '多吉',
			icon: 'icon-gou',
			url: 'https://www.dogedoge.com/results?q='
		}]
	}
	for (var i = 0; i < search.data.length; i++) {
		var addList = '<li><svg class="icon" aria-hidden = "true" ><use xlink:href="#' + search.data[i].icon +
			'"></use></svg>' + search.data[i].name + '</li > '
		$('.search-engine-list').append(addList);
	}
	$('#search-icon, .search-engine').hover(function() {
		$('.search-engine').css('display', 'block')
	}, function() {
		$('.search-engine').css('display', 'none')
	});

	$('#hot-btn').on('click', function() {
		if (storage.stopHot == 'true') {
			$(this).prop('checked', false)
			storage.stopHot = false
		} else {
			storage.stopHot = true
			$(this).prop('checked', true)
		}
		console.log(storage.stopHot)
	});
	$('.search-engine-list li').click(function() {
		var _index = $(this).index();
		var thisIcon = $(this).children().children().attr('xlink:href');
		var thisText = $(this).text() + '搜索';
		$('#txt').attr('placeholder', thisText)
		$('#search-icon use').attr('xlink:href', thisIcon)
		thisSearch = search.data[_index].url;
		$('.search-engine').css('display', 'none')
		storage.searchEngine = [thisSearch, thisIcon, thisText]
	});
})

