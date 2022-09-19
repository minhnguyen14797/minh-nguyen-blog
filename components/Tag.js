import Link from "next/link"


export default function Tag({children, href}) {
    const tagDMS = 'dark:bg-light/20 dark:hover:bg-light/25'
    return (
        <Link 
            href={href} 
        >
            <span className={`cursor-pointer my-2 mr-2 w-fit inline bg-dark/20 px-2 rounded-lg hover:bg-dark/25 ${tagDMS}`}>
            {   children}
            </span>
            
        </Link>
    )
}
