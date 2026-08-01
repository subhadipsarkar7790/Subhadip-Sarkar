function sendWhatsApp() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let phoneNumber = "9239665352"; // Your WhatsApp number

    let text =
        "Hello Subhadip Sarkar %0A%0A" +
        "Name: " + name + "%0A" +
		"Email: " + email + "%0A" +
        "phone Number: " + number + "%0A" +
		"Subject: " + subject + "%0A" +
		" Your Message: " + message;

    let whatsappURL =
        "https://wa.me/" + 9239665352 + "?text=" + text;

    window.open(whatsappURL, "_blank");
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height){
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
			})
		}
	})
}




menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}