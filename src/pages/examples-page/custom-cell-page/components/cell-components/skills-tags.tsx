import { memo } from 'react';

type SkillsTagsProps = {
  skills: string[];
};

export const SkillsTags = memo(({ skills }: SkillsTagsProps) => (
  <div className='flex flex-wrap gap-1'>
    {skills.map((skill, index) => (
      <span
        key={index}
        className='px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md border border-blue-200 dark:border-blue-700'
      >
        {skill}
      </span>
    ))}
  </div>
));

SkillsTags.displayName = 'SkillsTags';

