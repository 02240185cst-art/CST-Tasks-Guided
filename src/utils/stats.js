// Works out how many tasks are done, for the stats bar.
export function calculateStats(tasks) {
  debugger
  const total = tasks.length;
  const done = tasks.filter((task) => task.done).length;
  return { total, done, percent };
}
