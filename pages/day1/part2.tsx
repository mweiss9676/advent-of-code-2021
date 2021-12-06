import Description from '../../descriptions/day1/part2';
import Question from '../../components/Question';

import { input } from '../../inputs/day1/part1';

const getThreeSum = (arr: any, ind: any, val: any) => {
  const threeBack = arr[ind - 2];
  const twoBack = arr[ind - 1];
  const threeSum = [threeBack, twoBack, val].reduce((acc, currentVal) => acc += currentVal, 0);

  return threeSum;
};

export default () => {
  const func = () => {
    return (input || []).reduce((acc, val, ind, arr) => {
      if (ind <= 2) return acc;

      const previousIndex = ind - 1;
      const previousValue = arr[previousIndex];
      const previousThreeSum = getThreeSum(arr, previousIndex, previousValue);

      const threeSum = getThreeSum(arr, ind, val);

      if (threeSum > previousThreeSum) return acc += 1;
      else return acc;
    }, 0);
  }

  return (
    <Question func={func} Description={Description} />
  )
}
