declare namespace RHU {
    interface Modules {
        "theme": ColorScheme;
    }
}

interface ColorScheme {
    "background-tertiary": RHU.Theme.ThemeVariable;
    "win-titleBar-backgroundColor": RHU.Theme.ThemeVariable;
    "win-titleButton-color": RHU.Theme.ThemeVariable;
    "win-titleButton-hoverColor": RHU.Theme.ThemeVariable;
}

type ColorName = keyof ColorScheme;

RHU.module(new Error(), "theme",
    { Theme: "rhu/theme" },
    function({ Theme }) {
        const style = Theme(({ theme }) => ({
            "background-tertiary": theme`#444557`,
            
            "win-titleBar-backgroundColor": theme`#11111B`,
            "win-titleButton-color": theme`#B9BBBE`,
            "win-titleButton-hoverColor": theme`#272733`,
        }));

        return style;
    }
);