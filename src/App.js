import logo from './logo.svg';
import './App.css';
import Component from "./components/Component";
import Properties from "./components/Properties";
import State from './components/State';
import ConditionalRendering from './components/ConditionalRendering';
import ElementRendering from './components/ElementRendering';
import {EventsES6, EventsES7} from './components/Events';
import Father from './components/ComponentComunication';
import LifeCycle from './components/LifeCycle';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Component msg={"Hello from props"} />
          <hr/>
          <Properties string="this is a text string" number={19}
            boolean={true} array={[1, 2, 3]} object={{ name: "lex" }}
            reactElement={<b>Hello</b>} function={num => num * num}
            reactComponent={<Component msg={"soy un componente pasado como prop"} />} />
          <hr/>
          <State/>
          <hr/>
          <ConditionalRendering/>
          <ElementRendering />
          <hr/>
          <EventsES6/>
          <EventsES7/>
          <hr/>
          <Father />
          <hr/>
          <LifeCycle />
        </section>
      </header>
    </div>
  );
}

export default App;
