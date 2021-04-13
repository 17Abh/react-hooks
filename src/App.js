
import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import ClassCounterOne from './Components/ClassCounterOne';
import ClassMouse from './Components/ClassMouse';
import Context from './Components/Context';
import DataFetching from './Components/DataFetching';
import HookCounter from './Components/HookCounter';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterTwo from './Components/HookCounterTwo';
import HookMouse from './Components/HookMouse';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHooksCounter from './Components/IntervalHooksCounter';
import MouseContainer from './Components/MouseContainer';
import ReducerOne from './Components/ReducerOne';
import UseEffectOne from './Components/UseEffectOne';
import ReducerTwo from './Components/ReducerTwo';
import ReducerThree from './Components/ReducerThree';
import DFReducerOne from './Components/DFReducerOne';
import DFReducerTwo from './Components/DFReducerTwo';



export const userContext = React.createContext()
export const channelcontext = React.createContext()

function App() {

  
  return (
    <div className="App">

      <DFReducerTwo />

      {/* <DFReducerOne /> */}

      {/* <ReducerThree /> */}

      {/* <ReducerTwo /> */}

      {/* <ReducerOne /> */}

      {/* <userContext.Provider value={'dragon'}>
        <channelcontext.Provider value={"nameless"}>
          <Context />
        </channelcontext.Provider>
      </userContext.Provider> */}


      {/* <DataFetching /> */}

      {/* <IntervalHooksCounter />

      <IntervalClassCounter /> */}

      {/* <MouseContainer /> */}

      {/* <HookMouse />

      <ClassMouse />  */}

      {/* <ClassCounterOne />

      <UseEffectOne /> */}

      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />

      <HookCounterThree />

      <HookCounterFour /> */}
    </div>
  );
}

export default App;
