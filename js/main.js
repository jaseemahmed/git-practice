const yearElement = document.querySelector('#current-year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (yearElement === null) {
  console.log('No footer year element found');
}
