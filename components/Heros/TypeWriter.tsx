import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      'h1>Hello World 👋</h1>',
      'Code 💻/>',
      'DestroyBug 🪲/>',
      'Sleep 😴/>',
      'Repeat 🔁/>',
    ],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <div>
      <span className="inline-block font-mono text-lg font-bold xl:text-xl">
        {'<'}
      </span>
      <p className="inline-block font-mono text-lg font-bold xl:text-xl">
        {text}
      </p>
      <Cursor cursorColor="#ffb400" />
    </div>
  );
};

export default TypeWriter;
