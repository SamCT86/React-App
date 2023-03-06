import { useState, useCallback } from 'react';

function ThemeColorSelector({ themeColors, changeTheme }) {
    // We use the first color in the array as the default color 
    const [color, setColor] = useState(themeColors[0]);

    const handleClick = useCallback((newColor) => {
        setColor(newColor);
        changeTheme(newColor);
        document.documentElement.style.setProperty('--link-background-color', newColor);
    }, [changeTheme]);

    return (
        <>
            {themeColors.map((newColor) => (
                <div
                    key={newColor}
                    onClick={() => handleClick(newColor)}
                    style={{ background: newColor }}
                />
            ))}
        </>
    );
}

export default ThemeColorSelector;
