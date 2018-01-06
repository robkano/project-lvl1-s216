import genarateNumber from '../moduls/generateNumber';

export default (interval) => {
  let i = 0;
  const arr = [];
  let num = genarateNumber(10, 100);
  while (i < 10) {
    arr.push(num);
    num += interval;
    i += 1;
  }
  return arr;
};
