let pics = [
'img/im-js/1.jpg',
'img/im-js/2.jpg',
'img/im-js/3.jpg',
'img/im-js/4.jpg'
];
let img = document.querySelector(".pic");
let linkPrev = document.querySelector("a.prev");
let linkNext = document.querySelector("a.next");
let count = 0;
linkNext.addEventListener("click",function(e){
	e.preventDefault();
	count++;
	if(count==pics.length){count=0;}
	img.setAttribute("src", pics[count]);
	 
})

linkPrev.addEventListener("click",function(e){
	e.preventDefault();
	if(count<0){count=pics.length-1;}
	img.setAttribute("src", pics[count]);
	count--;
})