import React from "react";
import questions from "./questions"
import Question from "./Question"

function App() {
  return (
    <main className='bg-[#4b145b] flex justify-center items-center min-h-screen'>
      <div className='container flex justify-between min-w-3/5 bg-white px-8 py-10'>
        <h2 className='text-3xl w-64 font-medium'>
          Questions And Answers About Login
        </h2>
        <div className='questions-container ml-10 w-4/5'>
          {questions.map((question)=> {
            return (
              <Question key={question.id} {...question}/>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
