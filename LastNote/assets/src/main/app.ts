declare namespace RHU { 
    interface Modules {
        "win": void;
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
    "win", { Macro: "rhu/macro", style: "win/style", theme: "theme", appmount: "appmount", Icons: "icons" },
    function({ Macro, theme, style, appmount, Icons })
    {
        Macro((() => {
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
        <div class="${style.frame}">
            <!-- close button --> 
            <div rhu-id="close" class="${style.frame.button}" tabindex="-1" role="button" aria-label="Close">
                ${Icons.crossIcon}
            </div>
            <!-- maximize button --> 
            <div rhu-id="max" class="${style.frame.button}" tabindex="-1" role="button" aria-label="Maximize">
                ${Icons.squareIcon}
            </div>
            <!-- minimize button --> 
            <div rhu-id="min" class="${style.frame.button}" tabindex="-1" role="button" aria-label="Minimize">
                ${Icons.lineIcon}
            </div>
            <!-- title bar text -->
            <div class="${style.frame.text}">
                Electron template window
            </div>
        </div>

        <!-- app content goes here -->
        <rhu-macro rhu-type="${appmount}"></rhu-macro>
        `, {
            element: /*html*/`<div rhu-macro="win" class="${theme} ${style.win}"></div>`
        });

        const app = () => {
            const win = document.createMacro("win");
            document.body.append(win);
        };
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", app);
        } else {
            app();
        }
    }
);