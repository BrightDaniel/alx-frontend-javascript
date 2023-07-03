export function getTaskDescription() {
  const taskDescription = 'I prefer using constants whenever possible.';
  return taskDescription;
}

export function getFallbackMessage() {
  return 'However, sometimes using let is necessary.';
}

export function getTaskSummary() {
  let taskSummary = 'For instance, when ';
  taskSummary += 'the value of a variable needs to be updated.';
  taskSummary += ' ' + getFallbackMessage();

  return taskSummary;
}

