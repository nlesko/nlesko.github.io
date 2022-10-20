/**
 * Creates card title ui element.
 *
 * @param {String} tag sets the tag of component 
 * @param {String?} className sets classname for component from parent component
 *
 * @returns
 */

interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
    children?: React.ReactNode;
    tag?: React.ElementType;
    className?: string
}

const CardTitle: React.FC<Props> = ({tag: Tag = 'h5', children, ...props }) => {
    return (
        <Tag {...props}>
            {children}
        </Tag>
    );
}

export default CardTitle;