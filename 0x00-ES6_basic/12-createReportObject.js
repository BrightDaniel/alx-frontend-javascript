export default function createReportObject(employeesList) {
  const allEmployees = {};
  
  for (const departmentName in employeesList) {
    allEmployees[departmentName] = [...employeesList[departmentName]];
  }

  return {
    allEmployees: allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    }
  };
}

