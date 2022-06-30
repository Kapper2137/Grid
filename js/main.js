// skrypt wywolujący zdarzenie klika, czyli czy klikamy w burger icon, jezeli bedziemy w niego klikac to wtedy ma sie dodac nasza klasa active ktora wysunie nawigacje z lewej strony
const navMobile = document.querySelector('.nav-mobile')
// pierwszy krok to pobranie nawigacji
// do zmiennej pobralismy nav-mobile (nav-mobile to nazwa klasy nadanej w html)
const navBtn = document.querySelector('.hamburger')
// pobranie btn
// do zmiennej pobralismy hamburger(Hamburger to nazwa klasy nadanej w html)
const footerYear = document.querySelector('.footer__year')

const allNavLinks = document.querySelectorAll('.nav__link')

// piszemy teraz co ma sie stac po kliknieciu na przycisk
// czyli po kliknieciu dodajemy klase is-active  która jest wymagana przez dokumentacje
// oraz na calej naszej nawigacji mobilnej dodajemy klase --active
const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	// klasa (is-active) bo tak bylo w dokumentacji tego burgera co pobralismy z gh, czyli widocznie bez tego nie zadziala

	navMobile.classList.toggle('nav-mobile--active')
	// odwolanie sie do navMobile która przechowuje całą naszą nawigacje

	allNavLinks.forEach(item => {
		link.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
		})
	})
}
navBtn.addEventListener('click', handleNav)
// listener musi byc pod funkcja zeby przegladarka najpierw wczytala funkcje a dopiero potem bedzie wiedziala ze ma ta funkcje odpalic jak klikniemy na nav btn
// napisanie funkcji która będzie wykrywała klika na nasz przycisk
// odwolanie sie do nawigacji ktora pobralismy wyzej, nadanie listenera na klika i odwolanie sie do funkcji handleNav

// to na footera ze rok co roku sie zmienia, pobralismy to z tropical paradise
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
