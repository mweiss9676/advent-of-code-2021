import Description from '../../descriptions/day2/part1';
import Question from '../../components/Question';

import { input } from '../../inputs/day2/part1';

type Position = {
  horizontalPos: number;
  depth: number;
}

export default () => {
  const func = () => {
    const position = (input || []).reduce((acc: Position, val: string) => {
      const isForward = val?.includes('forward');
      const isDown = val?.includes('down');
      const isUp = val?.includes('up');
      const value = val?.split(' ')[1];
      const numericValue = parseInt(value);

      if (isForward) return { ...acc, horizontalPos: acc.horizontalPos += numericValue };
      if (isDown) return { ...acc, depth: acc.depth += numericValue };
      if (isUp) return { ...acc, depth: acc.depth -= numericValue }

      return acc;
    }, { horizontalPos: 0, depth: 0 } as Position);

    return position.depth * position.horizontalPos;
  }


  return (
    <Question func={func} Description={Description} />
  )
}
