javascript: void (() => {
	let href = document.querySelector(`[data-action="show"]`).href;
	let pathname = new URL(href).pathname;
	let key = `${pathname}-file-reviews`;

	localStorage.removeItem(key);
	location.reload();
})();
