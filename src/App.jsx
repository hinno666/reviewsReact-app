import { useState } from 'react';

import people from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, image, text, job, id } = people[index];
  const checkNumber = (number) => {
    if (number === people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (<main>
    <section>
      <div key={id} className='review'>
        <h2 className='author'>{name}</h2>
        <div className='img-container'><img className='person-img' src={image} alt={name} /></div>
        <p className='text'>{text}</p>
        <p className='job'>{job}</p>
        <div className="btns">
          <button type='button' className='btn' onClick={prevPerson}>prev</button>
          <button type='button' className='btn' onClick={nextPerson}>next</button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </section>
  </main>)
};

export default App;