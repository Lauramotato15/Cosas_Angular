import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
/* import './01.basic-types.ts'; 
import './02.object-interface.ts';
import './03.fuctions.ts'; */
// import './04-homework-types.ts';
//import './05.basic-destructuring.ts';
//import './06. function-destructuring.ts'; 
//import './07.import-xport.ts'; 
//import './08.classes.ts'; 
//import './09. generics.ts';
//import './10. decoradors.ts'; 
import './11.optional-chaining.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
