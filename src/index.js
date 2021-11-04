(function () {
    'use strict';
    const ellipsisTextOverflowStyle = "ellipsis";
    const titleAttribute = "title";
    document.addEventListener("mouseover", e => {
        let element = e.target;
        let elementTextOverflowStyle = window.getComputedStyle(element).textOverflow;
        let parentElementTextOverflowStyle = window.getComputedStyle(element.parentElement).textOverflow;
        if (elementTextOverflowStyle == ellipsisTextOverflowStyle || parentElementTextOverflowStyle == ellipsisTextOverflowStyle) {
            displayTitle(element);
        }
    });
    function displayTitle(element) {
        let timer = setTimeout(() => {
            let htmlElement = element;
            htmlElement.setAttribute(titleAttribute, htmlElement.innerText);
        }, 500);
        element.addEventListener("mouseleave", () => {
            clearTimeout(timer);
        });
    }
})();
