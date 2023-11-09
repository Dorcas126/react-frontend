import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/greetings';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  const { greeting } = useSelector((state) => state.greetings);

  const generate = () => {
    dispatch(fetchRandomGreeting());
  };

  // Check if greeting is an object and has greeting_text property
  const greetingText = typeof greeting === 'object' && greeting.greeting_text
    ? greeting.greeting_text
    : 'Invalid Greeting';

  return (
    <div className="greeting-content">
      <h1>{greetingText}</h1>
      <button onClick={generate} type="button">Generate new greeting</button>
    </div>
  );
}

export default Greeting;
