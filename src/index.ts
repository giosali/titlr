(function () {
    'use strict';

    const ellipsisTextOverflowStyle: string = "ellipsis";
    const titleAttribute: string = "title";

    document.addEventListener("mouseover", e => {
        let element: Element = e.target as Element;
        let elementTextOverflowStyle: string = window.getComputedStyle(element).textOverflow
        let parentElementTextOverflowStyle: string = window.getComputedStyle(element.parentElement).textOverflow;

        if (elementTextOverflowStyle == ellipsisTextOverflowStyle || parentElementTextOverflowStyle == ellipsisTextOverflowStyle) {
            displayTitle(element);
        }
    });

    function displayTitle(element: Element): void {
        let timer: number = setTimeout(() => {
            let htmlElement: HTMLElement = element as HTMLElement;
            htmlElement.setAttribute(titleAttribute, htmlElement.innerText);
        }, 500);

        element.addEventListener("mouseleave", () => {
            clearTimeout(timer);
        })
    }
})();