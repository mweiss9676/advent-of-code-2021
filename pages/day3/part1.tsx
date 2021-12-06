import Description from '../../descriptions/day3/part1';
import Question from '../../components/Question';

import { input } from '../../inputs/day3/part1';

const getMostCommonDigit = (input) => {
  const mostCommonFirst = (input || []).reduce((acc, val) => {
    if (parseInt(val) === 1) return acc += 1
    else return acc -= 1;
  }, 0);

  return mostCommonFirst > 0 ? 1 : 0;
};

const getOpposite = (number) => {
  return number === 1 ? 0 : 1;
};

const getDigits = (number) => Array.from(Array(number).keys());

export default () => {
  const func = () => {
    const inputLength = getDigits(input[0]?.length);

    const gammaDigits = (inputLength || []).map(position => {
      const digits = (input || []).map(x => x.charAt(position));
      const mostCommon = getMostCommonDigit(digits);
      return mostCommon;
    });

    const gammaString = gammaDigits.join('');
    const epsilonDigits = gammaDigits.map(x => getOpposite(x));
    const epsilonString = epsilonDigits.join('');

    const gamma = parseInt(gammaString, 2);
    const epsilon = parseInt(epsilonString, 2);

    return gamma * epsilon;
  };

  return (
    <Question func={func} Description={Description} />
  )
}
