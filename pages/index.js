import { useState } from 'react';

export default function Home() {
  const [heading, setHeading] = useState('Initial Heading');

  function handleClick() {
    if (heading === 'Initial Heading') {
      setHeading('Hello useState');
    } else {
      setHeading('Initial Heading');
    }
  }

  return (
    <section>
      <h1> {heading} </h1>
      <button onClick={handleClick}>Change heading</button>
    </section>
  );
}
