import { useThemeContext } from "../../context/themeContext";
import type { SidebarBotaoType } from "../../types"

export const SidebarBotao = ({ functionality, icone, label, visibilidade }: SidebarBotaoType,) => {
    const { currentAppTheme } = useThemeContext()

    return (
        <div className={`sidebar-botao--container ${visibilidade ? "expandido" : ""}`}>
            <button className={`sidebar-botao--box`} onClick={functionality}>
                <i className={`sidebar-botao--icone ${currentAppTheme.cor} ${icone}`} />
            </button>
            <span className={`sidebar-botao--label ${currentAppTheme.cor} ${!visibilidade ? "expandido" : ""}`}>{label}</span>
        </div>
    )
}

export default SidebarBotao;