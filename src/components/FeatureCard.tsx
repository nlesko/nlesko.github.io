import React from "react";
import { Feature } from "../data";
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
    feature: Feature
    className?: string
    children?: React.ReactNode,
}


const FeatureCard: React.FC<Props> = ({ feature, ...props }) => {
    return (

        <div className="w-1/4 px-6">
            <Card className="bg-steel-blue-800/30 px-8 py-12 shadow-md">
                <div className="flex items-center justify-center h-24">
                    {feature.icon ? React.createElement(feature.icon, { className: 'w-20 h-20' }) : null }
                </div>
                <div className="my-2" />
                <div className='text-center'>
                    <h4 className='text-2xl'>{feature.name}</h4>
                    <div className="my-2" />
                    <p className="text-base">
                        {feature.description}
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default FeatureCard;