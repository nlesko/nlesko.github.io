interface Props {
    className?: string;
    children?: React.ReactNode;
    title?: string;
}

const Section: React.FC<Props> =  ({ className, children, title, ...props }) => {

    const renderTitle = () => {
        return (
            <div className="w-full flex flex-col items-center justify-center">
                <h2 className="text-5xl uppercase font-light tracking-[0.7rem]">{title}</h2>
                <hr className="w-52 h-[2px] mt-11 mb-16 bg-white rounded-[75%]" style={{border: 'none'}} />
            </div>
        )
    }

    return(
        <section className={`w-full py-20 ${className}`} >
            <div className="container mx-auto px-4">
                {title && renderTitle()}
                {children}
            </div>
        </section>
    )
}


export default Section;