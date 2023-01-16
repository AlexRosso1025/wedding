const myKeysValues = window.location.search
const urlParams = new URLSearchParams(myKeysValues);
const family = urlParams.get('family')
const quantity = urlParams.get('qt')

const fam = document.getElementById('fam')
fam.innerHTML = family
const qt = document.getElementById('qt')
qt.innerHTML = quantity