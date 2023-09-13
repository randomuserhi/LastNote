declare namespace RHU { 
    interface Modules {
        "win": "win";
    }
    
    namespace Macro {
        interface TemplateMap
        {
            "win": win
        }      
    }
}

interface win extends HTMLElement
{
    close: HTMLButtonElement;
    max: HTMLButtonElement;
    min: HTMLButtonElement;
}

RHU.module(new Error(), 
    "win", { Macro: "rhu/macro", appmount: "appmount" },
    function({ Macro, appmount })
    {
        const win = Macro((() => {
            const win = function(this: win)
            {
                this.close.onclick = () => {
                    window.api.closeWindow();
                };
                this.max.onclick = () => {
                    window.api.maximizeWindow();
                };
                this.min.onclick = () => {
                    window.api.minimizeWindow();
                };
            } as any as RHU.Macro.Constructor<appmount>;
            
            return win;
        })(), "win", /*html*/`
        <!-- title bar (window frame) -->
        <div class="lastnote-flex lastnote-justifyStart lastnote-directionReversed lastnote-alignStretch win-titleBar">
            <!-- close button --> 
            <div rhu-id="close" class="lastnote-flex lastnote-alignCenter lastnote-justifyCenter win-titleButton" tabindex="-1" role="button" aria-label="Close">
                <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                    <polygon fill="currentColor" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon>
                </svg>
            </div>
            <!-- maximize button --> 
            <div rhu-id="max" class="lastnote-flex lastnote-alignCenter lastnote-justifyCenter win-titleButton" tabindex="-1" role="button" aria-label="Maximize">
                <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                    <rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="currentColor"></rect>
                </svg>
            </div>
            <!-- minimize button --> 
            <div rhu-id="min" class="lastnote-flex lastnote-alignCenter lastnote-justifyCenter win-titleButton" tabindex="-1" role="button" aria-label="Minimize">
                <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                    <rect fill="currentColor" width="10" height="1" x="1" y="6"></rect>
                </svg>
            </div>
            <!-- title bar text -->
            <div class="lastnote-flex lastnote-directionRow lastnote-alignCenter win-container win-titleText">
                Electron template window
            </div>
        </div>

        <!-- app content goes here -->
        <rhu-macro rhu-type="${appmount}"></rhu-macro>
        `, {
            element: /*html*/`<div rhu-macro="win" class="win-appMount"></div>`
        });

        return win;
    }
);