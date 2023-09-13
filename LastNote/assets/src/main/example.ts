declare namespace RHU { 
    interface Modules {
        "main": "appmount";
    }
    
    namespace Macro {
        interface TemplateMap
        {
            "appmount": appmount
        }      
    }
}

interface appmount extends HTMLDivElement
{
}

commonjs(["vs/editor/editor.main"], () => { RHU.module(new Error(), "main",
    { Macro: "rhu/macro" },
    function({ Macro })
    {
        const appmount = Macro((() => {
            const appmount = function(this: appmount)
            {
                monaco.editor.create(this, {
                    value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
                    language: 'typescript',
                    automaticLayout: true
                });
            } as any as RHU.Macro.Constructor<appmount>;
            
            return appmount;
        })(), "appmount", /*html*/`
        `, {
            element: /*html*/`<div></div>`
        });

        return appmount;
    }
);});