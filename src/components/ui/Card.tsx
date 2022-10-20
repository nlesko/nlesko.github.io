/**
 * Creates card ui element.
 *
 * @param {String?} className sets classname for card component from parent component
 * @param {Boolean?} row sets card to display as row
 *  
 *
 * @returns
 */

interface Props {
    row?: boolean;
    className?: string
    children: React.ReactNode
}

const Card: React.FC<Props> = (props) => {
    return (
        <div className={`flex ${props.row ? 'flex-row' : 'flex-col'}  ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card;