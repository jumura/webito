import { createRoot } from 'react-dom/client'
import './reset.css'
import WebitoApp from './webitoApp'
import ThemeContext from './context/themeContext'


createRoot(document.getElementById('root')!).render(
    <ThemeContext>
        <WebitoApp />
    </ThemeContext>
)
