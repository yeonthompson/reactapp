import "./Card.css"

interface Props {
    children: React.ReactNode;
    className: string;
}

const Card = (props: Props) => {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;