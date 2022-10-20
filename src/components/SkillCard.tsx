import Image from "next/image";
import { Skill } from "../data";
import { Card, CardTitle } from "./ui";

/**
 * Creates skill card element.
 *
 * @param {String?} className sets classname for card component from parent component
 * @param {Boolean?} row sets card to display as row
 *  
 *
 * @returns
 */

interface Props {
    skill: Skill
    className?: string
    children?: React.ReactNode
}


const SkillCard: React.FC<Props> = ({ skill, ...props }) => {
    return (
        <div className="w-1/3 px-4 mb-6">
            <Card 
                className=" bg-steel-blue-800/50 text-white shadow items-center"
                row
            >
                <div className="p-6">
                    <Image src="/vercel.svg" alt={skill.name} width={120} height={120} className='p-6' />
                </div>
                <CardTitle className="w-full p-6 text-base uppercase text-center">
                    {skill.name}
                </CardTitle>
            </Card>
        </div>
    )
}

export default SkillCard;