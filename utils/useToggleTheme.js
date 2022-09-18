import { useState } from "react"
import { useEffect } from "react"

export default function useToggleTheme() {
        const [theme, setTheme] = useState()
    
        useEffect(() => {
            if (localStorage.getItem('theme')) {
                setTheme(localStorage.getItem('theme'))
                
            } else {
                setTheme('light')
                localStorage.setItem('theme', 'light')
            }
        }, [setTheme])
        
        if (theme == 'dark') {
            document.documentElement.classList.add('dark')
        }

        return [theme, setTheme]
    }

export function toggleTheme(theme, setTheme) {
    if (theme == 'light') {
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add('dark')
    } else {
        setTheme('light')
        localStorage.setItem('theme', 'light')
        document.documentElement.classList.remove('dark')
    }
}