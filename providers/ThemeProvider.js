import useToggleTheme, { toggleTheme } from "../utils/useToggleTheme"
import React, { useContext } from "react"
import Image from "next/image"
import styles from '../styles/FadeInAnimation.module.css'

const ThemeContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
    const [theme, setTheme] = useToggleTheme()
    function handleThemeToggle() {
        toggleTheme(theme, setTheme)
    }

    
    const hoverStyles = 'hover:bg-warning/50 hover:dark:bg-light/25'
    const transitionStyles = 'transition duration-200 ease-in-out'
    const baseStyles = `rounded-full w-[35px] h-[35px] justify-center items-center ${transitionStyles} ${hoverStyles}`
    const display = theme == 'light' ?
        <Image 
            src='/sun.svg'
            width={25}
            height={25}
            alt='sun-icon'
        /> : 
        <Image 
            src='/moon.svg'
            width={25}
            height={25}
            alt='moon-icon'
        />
    
    const ThemeToggle = () => {
        return (
            <button 
                onClick={handleThemeToggle} 
                className={
                    `${baseStyles} lg:flex md:flex sm:hidden hidden`
                }>
                {display}
            </button>
        )
    }

    const BurgerThemeToggle = () => {
        return (
            <button 
                onClick={handleThemeToggle} 
                className={
                    `${baseStyles} lg:hidden md:hidden sm:flex flex`
                }>
                {display}
            </button>
        )
    }

    const value = {ThemeToggle, BurgerThemeToggle}

    return (
        <ThemeContext.Provider value={ value }>
            {children}
        </ThemeContext.Provider>
    )
}
