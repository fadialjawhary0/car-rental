import { useState } from 'react';

import CarInfo from './CarInfo';
import { CarService } from './services/CarService';

import './PickCarStyles.scss';

function PickCar() {
  const [active, setActive] = useState('SecondCar');
  const [colorBtn, setColorBtn] = useState('btn1');

  const btnID = id => {
    setColorBtn(colorBtn === id ? '' : id);
  };

  const coloringButton = id => {
    return colorBtn === id ? 'colored-button' : '';
  };

  return (
    <>
      <section className='pick-section'>
        <div className='container'>
          <div className='pick-container'>
            <div className='pick-container__title'>
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className='pick-container__car-content'>
              {/* pick car */}
              <div className='pick-box'>
                <button
                  className={`${coloringButton('btn1')}`}
                  style={{
                    color: active === 'SecondCar' ? '#ffffff' : '',
                  }}
                  onClick={() => {
                    setActive('SecondCar');
                    btnID('btn1');
                  }}>
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton('btn2')}`}
                  id='btn2'
                  style={{
                    color: active === 'FirstCar' ? '#ffffff' : '',
                  }}
                  onClick={() => {
                    setActive('FirstCar');
                    btnID('btn2');
                  }}>
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton('btn3')}`}
                  id='btn3'
                  style={{
                    color: active === 'ThirdCar' ? '#ffffff' : '',
                  }}
                  onClick={() => {
                    setActive('ThirdCar');
                    btnID('btn3');
                  }}>
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton('btn4')}`}
                  id='btn4'
                  style={{
                    color: active === 'FourthCar' ? '#ffffff' : '',
                  }}
                  onClick={() => {
                    setActive('FourthCar');
                    btnID('btn4');
                  }}>
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton('btn5')}`}
                  id='btn5'
                  style={{
                    color: active === 'FifthCar' ? '#ffffff' : '',
                  }}
                  onClick={() => {
                    setActive('FifthCar');
                    btnID('btn5');
                  }}>
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton('btn6')}`}
                  id='btn6'
                  style={{
                    color: active === 'SixthCar' ? '#ffffff' : '',
                  }}
                  onClick={() => {
                    setActive('SixthCar');
                    btnID('btn6');
                  }}>
                  VW Passat CC
                </button>
              </div>

              {active === 'FirstCar' && <CarInfo data={CarService} carID={0} />}
              {active === 'SecondCar' && (
                <CarInfo data={CarService} carID={1} />
              )}
              {active === 'ThirdCar' && <CarInfo data={CarService} carID={2} />}
              {active === 'FourthCar' && (
                <CarInfo data={CarService} carID={3} />
              )}
              {active === 'FifthCar' && <CarInfo data={CarService} carID={4} />}
              {active === 'SixthCar' && <CarInfo data={CarService} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
