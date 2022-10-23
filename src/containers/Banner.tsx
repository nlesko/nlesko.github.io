interface Props {
    className?: string;
}

const Banner: React.FC<Props> =  ({ className, ...props }) => {

    return(
        <section className={`w-full h-screen flex flex-col flex-1 py-20 items-center justify-center ${className}`} >
            <div className="container">
                <div className="flex">
                    <h1 className="text-2xl font-light tracking-widest">
                        Hi, my name is
                        <span className="text-6xl uppercase block mt-6 tracking-[10px]">Nikola.</span> 
                    </h1>
                </div>
                {/* <div className="flex">
                    <h2 className="text-5xl uppercase font-light tracking-widest">Building stuff for the web</h2>
                </div> */}
                <div className="my-7" />
                <p className="text-2xl">
                I am a software engineer
                </p>
            </div>
        </section>
    )
}


export default Banner;