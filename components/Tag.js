export default function Tag({children, href}) {


    return (
        <a href={href} className="my-2 mr-2 w-fit inline bg-dark/20 px-2 rounded-lg hover:bg-dark/25">
            {children}
        </a>
    )
}
