import Link from "next/link"
import styles from '../styles/LogoHover.module.css'
import fadeStyles from '../styles/FadeInAnimation.module.css'
import { useState } from "react"
import useToggleTheme, { toggleTheme } from "../utils/useToggleTheme"

const Logo = () => {
    const logoHoverStyles = styles['hover-underline-animation']
    return(
        <span className={`font-bold logo lg:text-xl md:text-xl sm:text-2xl text-2xl ${logoHoverStyles}`}>
            <Link href='/'>MINH NGUYEN</Link>
        </span>
    )
}

const NavList = ({children}) => {
    return(
        <ul className={`flex-row w-2/5 justify-center items-center lg:flex md:flex sm:hidden hidden`}>
            {children}
        </ul>
    )
}

const NavItem = ({children, href}) => {
    const itemHoverStyles = 'hover:text-primary'
    return(
        <li className={` tracking-wider lg:px-3 md:px-1 mx-[4%] rounded-lg ${itemHoverStyles}`}>
            <Link href={href}>{children}</Link>
        </li>
    )
} 

// const SubscribeButton = () => {
//     const buttonHoverStyles = 'hover:bg-red-600'
//     const [text, setText] = useState("Subscribe")
    
//     const handleSubscribe = () => {
//         setText("JK!!")
//         setTimeout(() => {
//             setText("Subscribe")
//         }, 2000)
//     }

//     return(
//         <button 
//             onClick={handleSubscribe}
//             className={`w-[120px] bg-danger text-light py-2 px-4 rounded-lg lg:inline md:inline sm:hidden hidden ${buttonHoverStyles}`}>
//             {text}
//         </button>
//     )
// }

// const BurgerSubscribeButton = () => {
//     const buttonHoverStyles = 'hover:bg-red-600'
//     return(
//         <button className={`bg-danger text-light py-1 px-3 rounded-lg ${buttonHoverStyles}`}>
//             Subscribe
//         </button>
//     )
// }


const Burger = ({open, setOpen}) => {
    
    
    const handleShowNav = () => {
        if(open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    const hoverBarStyles = open ? fadeStyles.burgerXHover : fadeStyles.burgerHover
    const burgerBarClassLists = open ? ['burger-icon-1-a', 'burger-icon-2-a', 'burger-icon-3-a'] : ['burger-icon-1', 'burger-icon-2', 'burger-icon-3']

    return (
        <div className="lg:hidden md:hidden sm:inlineflex items-start">
            <button onClick={handleShowNav} className={`w-[48px] h-[32px] relative ${hoverBarStyles}`}>
                <span id="a" className={burgerBarClassLists[0]}></span>
                <span id="b" className={burgerBarClassLists[1]}></span>
                <span id="b" className={burgerBarClassLists[2]}></span>
            </button>
        </div>
    )
}

const NavBurger = ({children}) => {

    return (
        <ul className={`flex flex-col items-start px-10 md:hidden 
                        lg:hidden sm:block ${fadeStyles.burgerFadeIn}`}>
            {children}
        </ul>
    )
}

const NavItemBurger = ({children, href}) => {
    const itemHoverStyles = 'hover:text-primary'
    return(
        <li className={`mb-3 tracking-wider rounded-lg ${itemHoverStyles} w-fit`}>
            <Link href={href}>{children}</Link>
        </li>
    )
} 

const DarkModeToggle = () => {
    const darkHoverStyles = 'hover:bg-sky-500'
    const toggleDMS = 'dark:bg-light dark:text-dark'
    const [theme, setTheme] = useToggleTheme()
    
    function handleDarkModeToggle() {
        toggleTheme(theme, setTheme)
    }
    
    return (
        <button 
            onClick={handleDarkModeToggle} 
            className={
                `font-bold py-1 px-3 rounded-full bg-secondary text-white w-[35px] h-[35px] hidden 
                justify-center items-center lg:flex md:flex sm:hidden ${darkHoverStyles} ${toggleDMS}`
            }>
            {theme == 'light' ? "L" : "D"}
        </button>
    )
}

export default function Navbar() {
    const navbarStyles = `py-3 px-10 flex-row justify-between flex items-center`
    const [open, setOpen] = useState(false)

    const AllNavItems = ({type}) => [
        ['Home', '/'], 
        ['Portfolio', '/coming-soon'], 
        ['Fun', '/coming-soon'], 
        ['Goodies', '/coming-soon']
    ].map((item, index) => {
            
            if (type == 'burger') {
                return (
                    <NavItemBurger href={item[1]} key={index}>
                        {item[0]}
                    </NavItemBurger>
                )
            } else {
                return (
                    <NavItem href={item[1]} key={index}>
                        {item[0]}
                    </NavItem>
                )
            }
            
        })

    return (
        <>
            <nav className={navbarStyles}>
                <div className="flex flex-row items-center justify-start w-full">
                    <Logo />
                </div>
                <NavList>
                    <AllNavItems />
                </NavList>
                <div className="flex flex-row items-center justify-end w-[75%]">
                    {/* <SubscribeButton /> */}
                    <DarkModeToggle />
                    <Burger open={open} setOpen={setOpen} />
                </div>
            </nav>
            {
                open ? 
                <NavBurger>
                    <AllNavItems type='burger'/>
                    {/* <BurgerSubscribeButton /> */}
                </NavBurger> :
                ""
            }
            
        </>
    )
}
