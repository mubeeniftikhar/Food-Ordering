import { fragment } from 'react';
import Header from './Components/Layout/header';
import Meals from './Components/Meals/Meals';


function App() {
  return (
    <fragment>

        < Header />
        <main>
            <Meals />
        </main>

    </fragment>
  );
}

export default App;
