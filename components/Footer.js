const Links = ({children}) => {
    return(
        <ul className="text-sm">
            <p className="text-gray-500 mb-5">Connect</p>
            {children}
        </ul>
    )
}

const LinkItem = ({item, link}) => {
    const itemStyles = 'hover:text-primary'
    return(
        <li className="mt-1 resetLi">
            <a href={link} className={itemStyles}>
                {item}
            </a>
        </li>
    )
}


export default function Footer() {

    const AllLinks = [['LinkedIn', 'https://www.linkedin.com/in/minh-nguyen-63109019b/'], 
                        ['Instagram', 'https://www.instagram.com/minhnguyen147/'], 
                        ['GitHub', 'https://github.com/minhnguyen14797']]
        .map((data, index) => {
            return (
                <LinkItem item={data[0]} link={data[1]} key={index}/>
            )
    })

    const footerStyles = `text-light bg-dark pt-12 pb-4 px-6 w-full dark:bg-dark3`

    return (
        <div className={footerStyles}>
            <div>
                <Links>
                    {AllLinks}
                </Links>
            </div>

            <div className="text-xs mt-10">
                © 2022-present Minh Nguyen. All Rights Reserved.
            </div>
        </div>
    )
}
