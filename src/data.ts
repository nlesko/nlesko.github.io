export enum SkillCategory {
    FRONTEND=1,
    BACKEND=2,
    OTHER=3
}

export enum ProjectCategory {
    PERSONAL = 1,
    PROFESSIONAL = 2,
}

export type Skill = {
    id: number;
    name: string;
    imageUrl: string;
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