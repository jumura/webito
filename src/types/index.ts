export interface bgColorType {
    cor: string
    hexadecimalPrimario: string
    hexadecimalSecundario: string
    hexadecimalFonte: string
}

export interface SidebarBotaoType {
    functionality: () => void
    icone: string
    label: string
    visibilidade?: boolean
}