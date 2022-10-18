interface Props {
    className?: string;
    children?: React.ReactNode;
    title?: string;
}

const Section: React.FC<Props> =  ({ className, children, title, ...props }) => {

    const renderTitle = () => {
        return (
            <div className="w-full flex items-center justify-center">
                <h2 className="text-3xl">{title}</h2>
            </div>
        )
    }

    return(
        <section className={`w-full flex flex-col flex-1 py-20 items-center ${className}`} >
            <div className="container">
                {title && renderTitle()}
                {children}
            </div>
        </section>
    )
}


export default Section;