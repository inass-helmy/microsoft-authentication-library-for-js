export default function home() {
	const mainContent = document.getElementById('main-content');
	const span = document.createElement("span");
	span.innerHTML = "homePage"
	mainContent.appendChild(span);
}
