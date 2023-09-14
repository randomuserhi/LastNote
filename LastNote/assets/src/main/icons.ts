declare namespace RHU { 
    interface Modules {
        "icons": {
            crossIcon: string;
            squareIcon: string;
            lineIcon: string;
        };
    }
    
    namespace Macro {
        interface TemplateMap {
            "win": win
        }      
    }
}

interface win extends HTMLElement {
    close: HTMLButtonElement;
    max: HTMLButtonElement;
    min: HTMLButtonElement;
}

RHU.module(new Error(), 
    "icons", {},
    function() {
        return {
            crossIcon: /*html*/`
            <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                <polygon fill="currentColor" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon>
            </svg>
            `,
            squareIcon: /*html*/`
            <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                <rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="currentColor"></rect>
            </svg>
            `,
            lineIcon: /*html*/`
            <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                <rect fill="currentColor" width="10" height="1" x="1" y="6"></rect>
            </svg>
            `,
        };
    }
);