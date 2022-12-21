import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className='question py-4 px-6 mb-4 shadow-3xl'>
      <div className='header flex justify-between items-center'>
        <h3 className='font-bold tracking-widest'>{title}</h3>
        <button
          className='bg-[#eae6eb] w-8	h-8 rounded-full text-[#b4345c] cursor-pointer text-2xl flex justify-center items-center'
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "-" : "+"}
        </button>
      </div>
      {showAnswer && <p className='text-[#324d67] mt-2'>{info}</p>}
    </div>
  );
};

export default Question;
