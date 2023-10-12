import Person from './Person.js';
import Button from './Button.js';
import Header from './Header.js';
import {List} from './LIst.js'

function App() {
  return (
    <div className="App">
      {/* Question 1 */}
    <Person name="Deepak Kumar Bansal" age="21"/>
    <Person name = "Gaurav Kumar Bansal" age="16"/>
    {/* Question 2 */}
    <Button text="Submit" onClick={()=>console.log("Button clicked")}/>
    {/* Question 3 */}
    <Header title="This is Header"/>
    {/* Question 4 */}
    <List items = {['Apple', 'Mango', 'Banana']}/>
    </div>

  );
}

export default App;
