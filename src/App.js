import { useState } from 'react';
import './App.css';
import tanya from './images/image-tanya.jpg';
import john from './images/image-john.jpg';
import iconnext from './images/icon-next.svg';
import iconprev from './images/icon-prev.svg';

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
        <div className="content">
          <p>{data[i].content}</p>

          <div class="name-posiiton">
            <b class="name">{data[i].name}</b> <span>{data[i].job}</span>
          </div>
        </div>
        <div className="image">
          <img src={data[i].image} alt="" />
          <div className="btn">
            {i === 0 ? (
              <button className="back" aria-label="back-disable" disabled>
                <img src={iconprev} alt="" />
              </button>
            ) : (
              <button
                className="back"
                aria-label="back"
                onClick={() => setI(i - 1)}
              >
                <img src={iconprev} alt="" />
              </button>
            )}
            {i < data.length - 1 ? (
              <button
                className="next"
                aria-label="next"
                onClick={() => setI(i + 1)}
              >
                <img src={iconnext} alt="" />
              </button>
            ) : (
              <button className="next" aria-label="next-disable" disabled>
                <img src={iconnext} alt="" />
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
