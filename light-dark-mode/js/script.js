const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=checkbox-elem]')

const getStyle = (elem, style) => window.getComputedStyle(elem).getPropertyValue(style) 

const initialColors = {
    bg: getStyle(html, '--bg'),
    bgCard: getStyle(html, '--bg-card'),
    colorTitle: getStyle(html, '--color-title'),
    colorText: getStyle(html, '--color-text'),
}

const darkMode = {
    bg: "#333333",
    bgCard: "#434343",
    colorTitle: "#3664ff",
    colorText: "#b5b5b5",
}

const changeColors = colors => {
    console.log(colors);
}


checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})