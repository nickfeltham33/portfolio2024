export type Skill = {
  skillName: string;
  skillIcon: string;
  alt: string;
};

export type Skills = {
  _id: string;
  _createdAt: string;
  category: string;
  title: string;
  skillsList: Skill[];
};
