declare namespace RHU { 
    interface Modules {
        "appmount": "appmount";
    }
    
    namespace Macro {
        interface TemplateMap {
            "appmount": appmount
        }      
    }
}

interface appmount extends HTMLDivElement {
}

commonjs(new Error(), ["vs/editor/editor.main"], () => { RHU.module(new Error(), 
    "appmount", { Macro: "rhu/macro" },
    function({ Macro }) {
        const appmount = Macro((() => {
            const appmount = function(this: appmount)
            {
                monaco.editor.create(this, {
                    language: 'python',
                    automaticLayout: true,
                });
            } as any as RHU.Macro.Constructor<appmount>;
            
            return appmount;
        })(), "appmount", /*html*/`
        `, {
            element: /*html*/`<div style="width: 100%; height:100%;"></div>`
        });

        return appmount;
    }
);});