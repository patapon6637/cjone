var devWidth;
var limitsize = 768;

window.addEventListener("resize", function () {
	devWidth = document.querySelector("body").offsetWidth;
	console.log(devWidth);
});

//햄버거 버튼 클릭

const mobBtn = document.querySelector("div.mobBtn");
const mob = document.querySelector(".mob");
const mobClose = document.querySelector("div.mobBtn_close");
const body = document.querySelector("body");
const bg = document.querySelector(".bg");
mobBtn.addEventListener("click", function () {
	mob.classList.add("on");
	mobClose.classList.add("on");
	body.classList.add("on");
	bg.classList.add("on");
	this.style.display = "none";
});

mobClose.addEventListener("click", function () {
	mob.classList.remove("on");
	mobClose.classList.remove("on");
	body.classList.remove("on");
	bg.classList.remove("on");
	mobBtn.style.display = "block";
});

// 주메뉴

var gnbMenu = document.querySelectorAll(".gnb>ul>li");
var headerWrap = document.querySelector(".header_wrap");
var formSrch = document.querySelector("form.srch");
var srchOpen = document.querySelector(".srch_open");
var topMenuDD = document.querySelectorAll("dl.topMenu > dd");
var subMenu = document.querySelectorAll(".gnb>ul>li>ul");

for (var i = 0; i < gnbMenu.length; i++) {
	gnbMenu[i].addEventListener("mouseover", function () {
		if (devWidth < limitsize) {
			return false;
		}
		if (formSrch.offsetWidth > 0 && srch.offsetHeight > 0) {
			formSrch.classList.remove("on");
			srchOpen.classList.remove("on");
		}
		if (topMenuDD[4].classList.contains("on")) {
			topMenuDD[4].classList.remove("on");
		}
		headerWrap.classList.add("on");
		// gnb.style.display = "block";
		subMenu.forEach(item => {
			item.classList.add("on");
		});
	});
	gnbMenu[i].addEventListener("mouseout", function () {
		if (devWidth < limitsize) {
			return false;
		}
		headerWrap.classList.remove("on");
		// gnb.style.display = "block";
		subMenu.forEach(item => {
			item.classList.remove("on");
		});
	}); //mouseout
	//mouseout
} //for

/* 로그인 이미지 */
var appear = "";
for (var i = 0; i < 57; i++) {
	if (i < 10) {
		appear +=
			"<img src='images/appear/appear_0000" +
			i +
			".png' alt='로그인버튼" +
			i +
			"' />";
	} else {
		appear +=
			"<img src='images/appear/appear_000" +
			i +
			".png' alt='로그인버튼" +
			i +
			"' />";
	}
}
document.querySelector("a.appear").innerHTML = appear;

var loop = "";
for (var i = 0; i < 82; i++) {
	if (i < 10) {
		loop +=
			"<img src='images/loop/loop_0000" +
			i +
			".png' alt='로그인버튼" +
			i +
			"' />";
	} else {
		loop +=
			"<img src='images/loop/loop_000" +
			i +
			".png' alt='로그인버튼" +
			i +
			"' />";
	}
}
document.querySelector("a.loop").innerHTML = loop;

/* 로그인 애니메이션*/
var appearImg = document.querySelectorAll(".appear > img");
for (var k = 0; k < 57; k++) {
	appearImg[k].style.animation = "ani 2.75s linear " + k * 0.05 + "s 1 normal";
}

var loopImg = document.querySelectorAll(".loop > img");
for (var j = 0; j < 82; j++) {
	loopImg[j].style.animation =
		"ani 4.1s linear " + (2.85 + 0.05 * j) + "s infinite normal";
}

//quick01_00000 ~ 00019
var quick1 = "";
for (var i = 0; i < 20; i++) {
	if (i < 10) {
		quick1 += '<img src="images/quick01/quick01_0000' + i + '.png"></img>';
	} else {
		quick1 += '<img src="images/quick01/quick01_000' + i + '.png"></img>';
	}
}
document.querySelector(".quick1").innerHTML = quick1;

// quick02_00000 ~ 00019
var quick2 = "";
for (var i = 0; i < 20; i++) {
	if (i < 10) {
		quick2 += '<img src="images/quick02/quick02_0000' + i + '.png"></img>';
	} else {
		quick2 += '<img src="images/quick02/quick02_000' + i + '.png"></img>';
	}
}
document.querySelector(".quick2").innerHTML = quick2;

// quick03_00000 ~ 00019
var quick3 = "";
for (var i = 0; i < 20; i++) {
	if (i < 10) {
		quick3 += '<img src="images/quick03/quick03_0000' + i + '.png"></img>';
	} else {
		quick3 += '<img src="images/quick03/quick03_000' + i + '.png"></img>';
	}
}
document.querySelector(".quick3").innerHTML = quick3;

// quick04_00000 ~ 00019
var quick4 = "";
for (var i = 0; i < 20; i++) {
	if (i < 10) {
		quick4 += '<img src="images/quick04/quick04_0000' + i + '.png"></img>';
	} else {
		quick4 += '<img src="images/quick04/quick04_000' + i + '.png"></img>';
	}
}
document.querySelector(".quick4").innerHTML = quick4;

//마우스를 올렸을 때
var content1Li = document.querySelectorAll(".content1 ul li");
content1Li.forEach(function (item) {
	item.addEventListener("mouseover", function () {
		for (k = 0; k < 20; k++) {
			var imgLi = this.children[0].children[0].children;
			imgLi[k].style.animation = `ani 1s linear ${0.05 * k}s 1 normal`;
		}
	});
});
//마우스를 뗏을때
content1Li.forEach(function (item) {
	item.addEventListener("mouseout", function () {
		for (k = 0; k < 20; k++) {
			var imgLi = this.children[0].children[0].children;
			imgLi[k].style.animation = "none";
		}
	});
});

//검색열기
var srchOpen = document.querySelector("span.srch_open");
srchOpen.addEventListener("click", function () {
	this.classList.toggle("on");
	formSrch.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.children[0].setAttribute("title", "검색입력서식 닫기");
	} else {
		this.children[0].setAttribute("title", "검색입력서식 열기");
	}
});

// 고객센터
topMenuDD[4].addEventListener("click", function () {
	this.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.children[0].setAttribute("title", "고객센터 닫기");
	} else {
		this.children[0].setAttribute("title", "고객센터 열기");
	}
});

// 모바일 고객센터
var mobTopDD = document.querySelectorAll(".mob_topMenu > dd");

mobTopDD[4].addEventListener("click", function () {
	this.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.children[0].setAttribute("title", "고객센터 닫기");
	} else {
		this.children[0].setAttribute("title", "고객센터 열기");
	}
});

//모바일 주메뉴

// 모바일 주메뉴 2단
var mobGnbLi = document.querySelectorAll(".mob_gnb > ul > li");
for (i = 0; i < mobGnbLi.length; i++) {
	mobGnbLi[i].addEventListener("click", function () {
		this.classList.toggle("on");

		var panel = this.nextElementSibling;
		if (panel.classList.contains("on")) {
			panel.classList.remove("on");
		} else {
			panel.classList.add("on");
		}
	});
}

/* 배너 */

//content3
var all = document.querySelectorAll(".content3_inner > div > ul > li");

all.forEach(function (item) {
	item.addEventListener("mouseover", function () {
		this.classList.add("on");
	});
});
all.forEach(function (item) {
	item.addEventListener("mouseout", function () {
		this.classList.remove("on");
	});
});

//대분류
var group = document.querySelectorAll(".content3_inner>ul>li>a");
var all = document.querySelectorAll(".content3_inner > div > ul > li");
var ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
var shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
var diner = document.querySelectorAll(".content3_inner > div > ul > li.diner");
var box = document.querySelectorAll(".content3_inner > div > ul > li.box");

for (k = 0; k < group.length; k++) {
	group[k].addEventListener("click", function (event) {
		event.preventDefault();
		group.forEach(function (idx) {
			idx.classList.remove("on");
		});
		this.classList.add("on");

		var className = this.parentElement.getAttribute("class");

		all.forEach(function (item) {
			item.style.display = "none";
		});
		switch (className) {
			case "all":
				all.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			case "ent":
				ent.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			case "shop":
				shop.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			case "diner":
				diner.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			case "box":
				box.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			default:
				break;
		}
	});
}

//top버튼
const btnTop = document.querySelector("div.top");

window.addEventListener("scroll", function () {
	// let scroll = this.scrollTop;
	let scroll = document.querySelector("html").scrollTop;
	console.log(scroll);

	if (scroll <= 0) {
		btnTop.classList.remove("on", "ab");
	} else if (scroll > 0 && scroll < 2700) {
		btnTop.classList.remove("ab");
		btnTop.classList.add("on");
	} else {
		btnTop.classList.add("ab");
	}
});

btnTop.addEventListener("click", function (e) {
	e.preventDefault();
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

//패밀리사이트
/*
const familySite = document.querySelector(".family_site");
familySite.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.children[0].setAttribute("title", "닫기");
	} else {
		this.children[0].setAttribute("title", "열기");
	}
});
*/

var familySite = document.querySelector(".family_site");

