import formattedDate from "../../utils/dateFormat"
import styles from '../../styles/CardAnimation.module.css'

const CardTitle = ({title}) => {
    const articleTitleStyles = 'text-xl font-bold tracking-wide capitalize'

    return (
        <div>
            <h1 className={articleTitleStyles}>
                {title}<span>»</span>
            </h1>
        </div>
    )
}

const CardBody = ({description, date}) => {
    const descriptionStyles = 'mt-2 text-sm'
    const dateStyles = 'text-stone-400 text-sm mt-3'
    return (
        <div>
            <p className={descriptionStyles}>{description}</p>
            <p className={dateStyles}>Last Updated: {date}</p>
        </div>
    )
}


export default function Card({data}) {

    const cardHoverStyles = `hover:border-primary transition duration-200 ease-in-out`
    const cardStyles = `pb-2 rounded-xl w-full h-fit ${cardHoverStyles} ${styles.cardHoverArrow}`

    return (
        
            <div className="my-5">
                <a href={data.link}>
                    <div className={cardStyles}>
                        <CardTitle title={data.title} />
                        <CardBody
                            description={data.description} 
                            date={formattedDate(data.date)}
                        />
                    </div>
                </a>
            </div>
        
    )
}
