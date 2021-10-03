import { useState } from 'react';
import './App.css';
import tanya from './images/image-tanya.jpg';
import john from './images/image-john.jpg';

const data = [
  {
    id: 1,
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    content: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    image: tanya,
  },
  {
    id: 2,
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    content: `“If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    image: john,
  },
];

function App() {
  const [i, setI] = useState(0);
  return (
    <>
      <main>
        <div className="content">{data[i].content}</div>
        <div className="image">
          <img src={data[i].image} alt="" />
          {i === 0 ? (
            <button disabled>back</button>
          ) : (
            <button onClick={() => setI(i - 1)}>back</button>
          )}
          {i < data.length - 1 ? (
            <button onClick={() => setI(i + 1)}>next</button>
          ) : (
            <button disabled>next</button>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
