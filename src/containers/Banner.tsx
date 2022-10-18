interface Props {
    className?: string;
}

const Banner: React.FC<Props> =  ({ className, ...props }) => {

    const renderTitle = () => {
        return (
            <div className="w-full flex">
                <h3 className="text-xl">Hi, my name is</h3>
            </div>
        )
    }

    return(
        <section className={`w-full h-screen flex flex-col flex-1 py-20 items-center justify-center bg-bone text-coal ${className}`} >
            <div className="container">
                {renderTitle()}
                <div className="flex">
                    <h1 className="text-5xl uppercase font-light tracking-widest">Nikola Leško.</h1>
                </div>
                <div className="flex">
                    <h2 className="text-5xl uppercase font-light tracking-widest">Building stuff for the web</h2>
                </div>
            </div>
        </section>
    )
}


export default Banner;