import React from 'react';
import { useAppData } from './interfaces';
import { useApp } from './useApp';

const App: React.FC = () => {

  const { setState, state }: useAppData = useApp()
  return <>
    <div className={"container"}>
      <h1>TS</h1>
      <div>{state}</div>
      <button onClick={()=> setState('aaaa')}>
        
      </button>

    </div>
  </>;
}

export default App;
