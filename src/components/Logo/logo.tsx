import { useThemeContext } from "../../context/themeContext";

export const Logo = ({ isExpandido }: { isExpandido: boolean }) => {
    const { currentAppTheme } = useThemeContext();

    return (
        <h1 className={`sidebar-logo ${currentAppTheme.cor} ${!isExpandido ? "expandido" : ""}`}>Webito</h1>
    )
}

export default Logo;