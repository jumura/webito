import React, { createContext, useContext, useState } from "react";
import type { bgColorType } from "../types";

interface ThemeContextType {
    allAppThemes: bgColorType[];
    currentAppTheme: bgColorType;
    setCurrentAppTheme: React.Dispatch<React.SetStateAction<bgColorType>>
}

const allAppThemes: bgColorType[] = [
    {
        cor: "claro",
        hexadecimalPrimario: "#FFFFFF",
        hexadecimalSecundario: "#cacaca",
        hexadecimalFonte: "#000000"
    },
    {
        cor: "escuro",
        hexadecimalPrimario: "#0D1117",
        hexadecimalSecundario: "#262C36",
        hexadecimalFonte: "#ffffff"
    },
    {
        cor: "azul",
        hexadecimalPrimario: "#b4beff",
        hexadecimalSecundario: "#102e77",
        hexadecimalFonte: "#a4d1ec"
    },
    {
        cor: "verde",
        hexadecimalPrimario: "#9cffa0",
        hexadecimalSecundario: "#173318",
        hexadecimalFonte: "#c5ffb6"
    },
    {
        cor: "vermelho",
        hexadecimalPrimario: "#ff9591",
        hexadecimalSecundario: "#4a1513",
        hexadecimalFonte: "#ffcece"
    },
    {
        cor: "amarelo",
        hexadecimalPrimario: "#ffffa2",
        hexadecimalSecundario: "#4b4b2a",
        hexadecimalFonte: "#fffeb7"
    },
    {
        cor: "roxo",
        hexadecimalPrimario: "#c2b2ff",
        hexadecimalSecundario: "#2a1763",
        hexadecimalFonte: "#d4c9ff"
    },
]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themeProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentAppTheme, setCurrentAppTheme] = useState<bgColorType>(allAppThemes[1]) // Tema claro ([0]) é padrão no início
    
    return (
        <ThemeContext.Provider value={{ allAppThemes, currentAppTheme, setCurrentAppTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default themeProvider;

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useThemeContext deve ser usado dentro de um Provider!")
    }

    return context;
}