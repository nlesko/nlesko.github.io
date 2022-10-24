export enum SkillCategory {
    FRONTEND=1,
    BACKEND=2,
    OTHER=3
}

export enum ProjectCategory {
    PERSONAL = 1,
    PROFESSIONAL = 2,
}

export interface IconTypeProps {
    width?: number,
    height?: number,
    className?: string
}

export type IconType = (props: IconTypeProps) => JSX.Element;

export type Skill = {
    id: number;
    name: string;
    icon: IconType;
    category: SkillCategory;
}

export type Project = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    repository: string | null;
    demoUrl: string | null;
    tags: string[];
    projectCategory: ProjectCategory;
}

export type Feature = {
    id: number;
    name: string;
    description: string;
    icon: IconType;
}