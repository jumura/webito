import { useThemeContext } from "../../context/themeContext";
import './Inicio.css'

const Inicio = () => {
    const { currentAppTheme } = useThemeContext()

    return (
        <main className={`inicio ${currentAppTheme.cor}`}>
            <p style={{color: "#fff"}}>Inicio</p>
        </main>
    )
}

export default Inicio;