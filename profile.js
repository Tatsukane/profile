const displayUsername = document.querySelector(".displayName");
const fbButton = document.querySelector(".sm.fb");
const igButton = document.querySelector(".sm.ig");
const ghButton = document.querySelector(".sm.gh");
const spButton = document.querySelector(".sm.sp");
const rgButton = document.querySelector(".sm.rg");
const ldButton = document.querySelector(".sm.ld");

displayUsername.addEventListener('click', ()=>{
	const textCopy =  displayUsername.innerHTML;
	navigator.clipboard.writeText(textCopy).then(() =>{
		const noti = document.querySelector(".copied-noti.disabled");
		noti.classList.remove("disabled");
		setTimeout(() => {
			noti.classList.add("disabled");
		}, 1000)
	})
})

fbButton.addEventListener('click', () => {
	window.open("https://www.facebook.com/verlierer0/")
})

igButton.addEventListener('click', () => {
	window.open("https://www.instagram.com/_tatsukane_/")
})

ghButton.addEventListener('click', () => {
	window.open("https://github.com/Tatsukane")
})

spButton.addEventListener('click', () => {
	window.open("https://open.spotify.com/user/aojd8shmclvv0144v2s9w5q4o?si=9836862cec334ce9")
})

rgButton.addEventListener('click', () => {
	navigator.clipboard.writeText("Tatsukane#ntmp");
	const rgLabel = document.querySelector(".sm.rg .label");
	rgLabel.innerHTML = "Copied!";
	rgButton.classList.add("disable");
	setTimeout(() => {
		rgButton.classList.remove("disable");
		rgLabel.innerHTML = "Tatsukane";
	}, 800)
})

ldButton.addEventListener('click', () => {
	window.open("https://www.linkedin.com/in/ntd2507/")
})