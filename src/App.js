import './App.css';
import React, { useState } from 'react';
import CardsList from './components/CardsList/CardsList';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Form from './components/Form/Form';


const App = () => {
  const [isRent, setIsRent] = useState(false);

  const RentingHandler = () => {
    setIsRent(true);
  }

  const stopRentingHandler = () => {
    setIsRent(false);
  }

  // СДЕЛАТЬ СТЭЙТ -- ПОКА ВСЯ СТРАНИЦА ГРУЗИТСЯ, ДЕЛАЕМ СПИННЕР--ПРИМЕР В ПЕРСОНАЛЬНОЙ ИНФЕ 

  return (
    <div className="App">

      <h2 className='app_title'>Choose your time</h2>

      <CardsList onClick={RentingHandler} />

      {isRent &&
        // <Form time={time} onCancel={stopRentingHandler}/>
        <Form onCancel={stopRentingHandler} />
      }
      <PersonalInfo isRenting={isRent} />

    </div>
  );
}

export default App;
