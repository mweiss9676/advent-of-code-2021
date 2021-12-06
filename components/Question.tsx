import React, { useState } from 'react';

type Props = {
    func: () => any;
    Description: React.FC;
};

export default ({ func, Description }: Props) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);
    const result = func();

    return (
        <>
            <div className="description-container">
                <Description />

                <button className="answer-button" onClick={() => setIsAnswerVisible(true)}>Show Answer</button>
                {isAnswerVisible && <div className="answer">{result}</div>}
            </div>


        </>
    )
};