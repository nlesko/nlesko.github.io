import { ReactNode } from "react";

interface Props {
    className?: string;
    children?: ReactNode;
    title?: string;
}

const Section = (props: Props) => {

    const renderTitle = () => {
        return (
            <div className="w-full flex items-center justify-center">
                <h2 className="text-3xl font-bold">{props.title}</h2>
            </div>
        )
    }

    return(
        <section className={`w-full flex flex-col flex-1 py-20 bg-green-900 text-white items-center ${props.className}`} >
            <div className="container">
                {props.title && renderTitle()}
                {props.children}
            </div>
        </section>
    )
}


export default Section;