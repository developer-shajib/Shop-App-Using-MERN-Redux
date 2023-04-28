import { useState } from 'react';
import './DarkToggle.scss';

const DarkToggle = () => {
  const [dark, setDark] = useState(false);

  const body = document.querySelector('body');
  dark ? body.classList.add('dark') : body.classList.remove('dark');

  return (
    <div className='toggle' onClick={() => setDark(!dark)}>
      <div className='left'></div>
    </div>
  );
};

export default DarkToggle;
