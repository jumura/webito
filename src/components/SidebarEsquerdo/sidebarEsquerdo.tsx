import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebarEsquerdo.css'
import type { SidebarBotaoType } from '../../types';
import Logo from '../Logo/logo';
import SidebarBotao from '../sidebarBotao/sidebarBotao';
import { useThemeContext } from '../../context/themeContext';

const SidebarEsquerdo = () => {
    const [isExpandido, setIsExpandido] = useState<boolean>(false);

    const navigate = useNavigate();
    const { currentAppTheme } = useThemeContext();

    const sidebarItems: SidebarBotaoType[] = [
        {
            functionality: () => setIsExpandido(!isExpandido),
            icone: "fa-solid fa-expand",
            label: "Expandir"
        },
        {
            functionality: () => navigate("/"),
            icone: "fa-regular fa-home",
            label: "Início"
        },
        {
            functionality: () => navigate("/carta"),
            icone: "fa-solid fa-dice",
            label: "Carta"
        },
        {
            functionality: () => navigate("/regras"),
            icone: "fa-solid fa-book-bookmark",
            label: "Regras"
        },
        {
            functionality: () => navigate("/exemplos"),
            icone: "fa-regular fa-clipboard",
            label: "Exemplos"
        },
        {
            functionality: () => navigate("/configuracoes"),
            icone: "fa-solid fa-gear",
            label: "Configurações"
        },
    ]

    return (
        <aside className={`sidebar ${currentAppTheme.cor} ${isExpandido ? "expandido" : ""}`}>
            <Logo isExpandido={isExpandido} />
            <div className='sidebar-botao'>
                {sidebarItems.map((item, i) => (
                    <SidebarBotao
                        key={i}
                        functionality={item.functionality}
                        icone={item.icone}
                        label={item.label}
                        visibilidade={isExpandido}
                    />
                ))}
            </div>
        </aside>
    )
}

export default SidebarEsquerdo;