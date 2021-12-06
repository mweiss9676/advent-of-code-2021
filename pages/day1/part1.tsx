import Description from '../../descriptions/day1/part1';
import Question from '../../components/Question';

import { input } from '../../inputs/day1/part1';

export default () => {
  const func = () => {
    return (input || []).reduce((acc, val, ind, arr) => {
      if (ind === 0) return acc;

      const previousIndex = ind - 1;
      const previousValue = arr[previousIndex];
      if (val > previousValue) return acc += 1;
      else return acc;
    }, 0);
  }

  return (
    <Question func={func} Description={Description} />
  )
}
