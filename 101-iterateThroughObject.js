export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const item of reportWithIterator) {
    employees += `${item} | `;
  }
  return employees.slice(0, -3);
}

