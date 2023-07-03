export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const currentEmployee = currentDepartment[currentEmployeeIndex];

      currentEmployeeIndex++;

      if (currentEmployeeIndex >= currentDepartment.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      }

      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

