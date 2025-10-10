import { VirtualTable } from '../../../../components/virtual-table';
import type { Company, Department } from '../utils';
import { getDepartmentHeaders, getTeamHeaders } from '../utils/table-headers';

export const renderCompanyExpandedContent = (company: Company) => {
  const departmentHeaders = getDepartmentHeaders();

  const renderDepartmentTeams = (department: Department) => {
    const teamHeaders = getTeamHeaders();

    return (
      <div className='p-3 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-400 dark:border-blue-500 ml-4'>
        <h5 className='font-medium text-sm mb-3 text-blue-800 dark:text-blue-200'>
          {department.name} Teams
        </h5>
        <div className='h-48'>
          <VirtualTable
            data={department.teams}
            headerHeight={28}
            headerMode='single'
            headers={teamHeaders}
            hideHeader={false}
            rowHeight={24}
            rowKey='name'
          />
        </div>
      </div>
    );
  };

  return (
    <div className='p-4 bg-gray-50 dark:bg-gray-900 border-l-4 border-green-500 dark:border-green-400'>
      <h4 className='font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200'>
        Company Departments
      </h4>
      <div className='h-64'>
        <VirtualTable
          data={company.departments}
          headerHeight={32}
          headerMode='single'
          headers={departmentHeaders}
          hideHeader={false}
          onRenderExpandedContent={renderDepartmentTeams}
          rowHeight={28}
          rowKey='name'
        />
      </div>
    </div>
  );
};

