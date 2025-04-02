import React from "react";

function Joke({ currentJoke }) {
  return (
    <div className="w-[700px] flex flex-col gap-3 p-5 bg-blue-950 rounded-2xl">
      <h1 className="text-white font-bold text-3xl text-center">
        {currentJoke.title}
      </h1>
      <p className="text-amber-500 text-3xl">{currentJoke.content}</p>
    </div>
  );
}

export default Joke;
