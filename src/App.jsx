import { Suspense } from 'react';
import './App.css';
import Bottles from './components/Bottles/bottles';

// const bottlesPromise = fetch('./bottles.json').then(res => res.json());

//take data from gpt and upload in github which will give a json link
// const bottlesPromise2 = fetch(
//   'https://github.com/mehedipolash/bottles-data/blob/main/bottles.json'
// ).then(res => res.json());

const bottlesPromise = fetch('bottles.json').then(res => res.json());

function App() {
  /* const bottles = [
    {id:1,name:'nike hot pink bottle',color:'pink',price:250},
    {id:2,name:'nike hot pink bottle',color:'pink',price:250},
    {id:3,name:'nike hot pink bottle',color:'pink',price:250},
    {id:4,name:'nike hot pink bottle',color:'pink',price:250},
    {id:5,name:'nike hot pink bottle',color:'pink',price:250},
  ] */

  return (
    <>
      <h1>Buy awesome water bottles</h1>

      <Suspense fallback={<h3>Bottles are loading..</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
