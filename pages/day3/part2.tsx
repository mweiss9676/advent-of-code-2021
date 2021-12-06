import Description from '../../descriptions/day2/part1';
import Question from '../../components/Question';

import { input } from '../../inputs/day2/part2';

type Position = {
  horizontalPos: number;
  depth: number;
  aim: number;
}

export default () => {
  const func = () => {
    const position = (input || []).reduce((acc: Position, val: string) => {
      const isForward = val?.includes('forward');
      const isDown = val?.includes('down');
      const isUp = val?.includes('up');
      const value = val?.split(' ')[1];
      const numericValue = parseInt(value);

      if (isDown) acc = { ...acc, aim: acc.aim += numericValue };
      if (isUp) acc = { ...acc, aim: acc.aim -= numericValue }
      if (isForward) acc = { ...acc, horizontalPos: acc.horizontalPos += numericValue, depth: acc.depth + (acc.aim * numericValue) };

      console.log('acc', acc)
      return acc;
    }, { horizontalPos: 0, depth: 0, aim: 0 } as Position);

    console.log('position', position);

    return position.depth * position.horizontalPos;
  }

  return (
    <Question func={func} Description={Description} />
  )
}
