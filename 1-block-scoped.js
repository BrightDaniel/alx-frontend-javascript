
export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;
   
  }

  return [task, task2];
}

