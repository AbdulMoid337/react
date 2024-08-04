import './App.css';
import { sum } from './helper';
import CommentForm from './CommentForm';
import Lottery from './Lottery';

function App() {

  let winCondition = (moid) => {
    return moid[0] == 0
  }

  return (
    <>
<Lottery n={4} winCondition={winCondition}/>
    </>
  )
}

export default App
