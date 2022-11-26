export const idGenerator = (arr) => {
  if (arr.length === 0) return 1;
  const arrCopy = [...arr];
  const maxId = Number(arrCopy.sort((a, b) => b.id - a.id)[0].id);
  return maxId + 1;
};