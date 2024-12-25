//your JS code here. If required.
const date = document.querySelector(".date")
const hrs = document.querySelector(".hrs")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")
const apm = document.querySelector(".apm")
let d = new Date()
let currentDate = d.getDate()
let currentmonth = d.getMonth()
let currentYear = d.getFullYear()
let hr = d.getHours()
let mi = d.getMinutes()
let se = d.getSeconds()
let total = `${currentmonth+1}/${currentDate}/${currentYear}`
date.innerText = total
let a = "AM"
if(hr>12){
	hr=hr-12;
}
function change(){
	if(se>=60){
		se = 0
		mi++
	}
	if(mi>=60){
		mi = 0
		hr++
	}
	if(hr>12){
		a = "PM"
	}
	if(hr==12){
		a = "PM"
	}
	hrs.innerText = `${hr}`.padStart(2,`0`)
	min.innerText = `${mi}`.padStart(2,`0`)
	sec.innerText = `${se++}`.padStart(2,`0`)
	apm.innerText = a
}
setInterval(change,1000)