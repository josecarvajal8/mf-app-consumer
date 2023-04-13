import React, { Suspense, lazy } from 'react';
// import MyComponent from './components/MyComponent';
// import './styles/style.css';
// import Navbar from 'navbar/navbar_component';

function App() {
  const Navbar = lazy(() => import('navbar/navbar_component'));
  console.log(Navbar)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <h1>{'App consumer'}</h1>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
