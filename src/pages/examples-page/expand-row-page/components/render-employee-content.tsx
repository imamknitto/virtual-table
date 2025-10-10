import type { Employee } from '../utils';

export const renderEmployeeExpandedContent = (employee: Employee) => (
  <div className='p-4 bg-gray-50 dark:bg-gray-900 border-l-4 border-blue-500 dark:border-blue-400'>
    <div className='grid grid-cols-2 gap-6'>
      <div>
        <h4 className='font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200'>
          Personal Information
        </h4>
        <div className='space-y-2 text-sm'>
          <div>
            <span className='font-medium'>Phone:</span> {employee.phone}
          </div>
          <div>
            <span className='font-medium'>Address:</span> {employee.address}
          </div>
          <div>
            <span className='font-medium'>City:</span> {employee.city}
          </div>
          <div>
            <span className='font-medium'>Country:</span> {employee.country}
          </div>
        </div>
      </div>
      <div>
        <h4 className='font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200'>
          Skills & Projects
        </h4>
        <div className='space-y-3'>
          <div>
            <span className='font-medium text-sm'>Skills:</span>
            <div className='flex flex-wrap gap-1 mt-1'>
              {employee.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className='px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className='font-medium text-sm'>Current Projects:</span>
            <div className='mt-1 space-y-1'>
              {employee.projects.map((project, idx) => (
                <div key={idx} className='text-xs'>
                  <span className='font-medium'>{project.name}</span>
                  <span
                    className={`ml-2 px-2 py-0.5 rounded text-xs ${
                      project.status === 'Active'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : project.status === 'Completed'
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    }`}
                  >
                    {project.status}
                  </span>
                  <div className='mt-1'>
                    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5'>
                      <div
                        className='bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full'
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className='text-xs text-gray-600 dark:text-gray-400'>{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

