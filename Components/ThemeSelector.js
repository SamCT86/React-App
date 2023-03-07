import useTheme from '../hooks/useTheme';
import ThemeColorSelector from './ThemeColorSelector';

// Styles
import './ThemeSelector.css';

export default function ThemeSelector() {
    const { changeTheme } = useTheme();

    const themeColors = ['#2f233d', '#ffb703', '#118ab2'];

    return (
        <div className='theme-selector'>
            <div className='theme-buttons'>
                <ThemeColorSelector themeColors={themeColors} changeTheme={changeTheme} />
            </div>
        </div>
    );
}
