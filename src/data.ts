export enum SkillCategory {
    FRONTEND=1,
    BACKEND=2,
    OTHER=3
}

export type Skill = {
    id: number;
    name: string,
    imageUrl: string,
    category: SkillCategory,
}