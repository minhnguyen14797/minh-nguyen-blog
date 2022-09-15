export function Heading({children, tag, name}) {
    let specialTagStyles = 'absolute -top-[80px]'
    const Tag = ({children}) => {
        const styles = 'relative capitalize'
        if (tag == 'h1') {
            return (
                <h1 className={styles}>
                    {children}
                </h1>
            )
        } else if (tag == 'h2') {
            return (
                <h2 className={styles}>
                    {children}
                </h2>
            )
        } else if (tag == 'h3') {
            return (
                <h3 className={styles}>
                    {children}
                </h3>
            )
        }
    }

    return (
        <Tag>
            <a name={name} className={specialTagStyles}></a>
            {children}
        </Tag>
    )
}


export function Introduction() {
    return (
        <h4 title="Introduction">
            <a name="introduction" className="absolute top-0"></a>
        </h4>
    )
}