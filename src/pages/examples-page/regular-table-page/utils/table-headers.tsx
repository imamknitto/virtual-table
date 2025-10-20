import type { IHeader } from '../../../../components/knitto-table';
import type { IEmployee } from './types';

export const getEmployeeHeaders = (opt?: { withFreeze?: boolean; withColspan?: boolean }): IHeader<IEmployee>[] => {
  const { withFreeze = false, withColspan = false } = opt || {};

  return [
    { key: 'id', caption: 'ID', width: 100, freeze: withFreeze ? 'left' : undefined },
    ...(!withColspan
      ? [
          { key: 'name', caption: 'Name', width: 200 },
          { key: 'email', caption: 'Email', width: 200 },
        ]
      : [
          {
            key: 'group-header-identity',
            caption: 'Identity',
            children: [
              { key: 'name', caption: 'Name', width: 200 },
              { key: 'email', caption: 'Email', width: 200 },
            ],
          },
        ]),
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 200 },
    ...(!withColspan
      ? [
          { key: 'phone', caption: 'Phone', width: 200 },
          { key: 'address', caption: 'Address', width: 200 },
          { key: 'city', caption: 'City', width: 200 },
          { key: 'country', caption: 'Country', width: 200 },
        ]
      : [
          {
            key: 'group-header-contact',
            caption: 'Contact Information',
            children: [
              { key: 'phone', caption: 'Phone', width: 200 },
              { key: 'address', caption: 'Address', width: 200 },
              { key: 'city', caption: 'City', width: 200 },
              { key: 'country', caption: 'Country', width: 200 },
            ],
          },
        ]),
    { key: 'salary', caption: 'Salary', width: 200, freeze: withFreeze ? 'right' : undefined },
  ];
};
