// src/utils/scrollUtils.js
export const scrollToSection = (selector) => {
    const element = document.querySelector(selector)
    if (element) {
        const offset = 80 // Height of fixed navbar
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}