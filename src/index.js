import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const GridItem = (props) => { 
  let { data, color } = props;
  if(color === 'check' && isPrime(data))
  {
    color='red';
  } 
  else if(color === 'check'){
    color='yellow';
  }
  
  
  function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    
    // Check for divisibility by numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}
  return (
    <div className='grid-item' style={{ backgroundColor: color }}>
      {data}
    </div>
  );
};

const Grid  = () => {
  const data = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30, 31],
    [32, 33, 34, 35, 36, 37, 38, 39],
  ];

  return (
    <div className='square'>
      {data.map((row, rowNumber) => (
        row.map((colData, colIndex) => (
          <GridItem key={colIndex} data={colData} color={colData % 2 === 0 ? '#21BF73' : 'check'} />
        ))
      ))}
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className='heading'>
        <h1>30 Days of React</h1>
        <h3>Number Generator</h3>
      </div>
      
      <div className='grid-container'>
        <Grid/>
      </div>
    </>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
