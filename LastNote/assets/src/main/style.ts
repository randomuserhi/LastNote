declare namespace RHU {
    interface Modules {
        "win/style": {
            frame: RHU.Style.ClassName<{
                button: RHU.Style.ClassName;
                text: RHU.Style.ClassName;
            }>;
            win: RHU.Style.ClassName;
        };
    }
}

RHU.module(new Error(), "win/style",
    { Style: "rhu/style", theme: "theme" },
    function({ Style, theme })
    {
        const style = Style(({ style }) => {
            const frame = style.class<{
                button: RHU.Style.ClassName;
                text: RHU.Style.ClassName;
            }>`
            display: flex;
            justify-content: flex-start;
            flex-direction: row-reverse;
            align-items: stretch;
            height: 22px;
            background-color: ${theme["win-titleBar-backgroundColor"]};

            z-index: 3001;
            -webkit-app-region: drag;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            `;
            frame.button = style.class`
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            position: relative;
            width: 28px;
            height: 22px;
            color: ${theme["win-titleButton-color"]};

            -webkit-app-region: no-drag;
            pointer-events: auto;
            `;
            style`
            ${frame.button}:hover {
                background-color: ${theme["win-titleButton-hoverColor"]};
            }
            `;
            frame.text = style.class`
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            height: 100%;
            margin-left: 10px;
            color: white;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            `

            const win = style.class`
            width: 100%;
            height: 100%;
            `;

            return {
                frame,
                win,
            };
        });

        return style;
    }
);