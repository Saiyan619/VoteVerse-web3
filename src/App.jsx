import {Routes, Route} from 'react-router-dom'
import "./App.css";
import Home from "./pages/proposals/home/Home";
import Proposal from "./pages/proposals/Proposal";
import AppContext from "./utils/AppContext";

function App() {
  // const [provider, setProvider] = useState(null);
  // const [account, setAccount] = useState(null);
  // const [connected, setConnected] = useState(false);
  // const [votingStatus, setVotingStatus] = useState(true)
  // const [remainingTime, setRemainingTime] = useState('')
  // const [candidates, setCandidates] = useState([])
  // const [number, setNumber] = useState('')
  // const [CanVote, setcanVote] = useState(true)

  // useEffect(() => {
  //   console.log('app in effect')
  //   canVote()
  //   getCandidates()
  //   getRemainingTime()
  //   getCurrentStatus()
  //   if (window.ethereum) {
  //     window.ethereum.on("accountsChanged", handleAccountChange)
  //   }
  
  //   return () => {
  //     if (window.ethereum) {
  //       window.ethereum.removeListener("accountsChanged", handleAccountChange)
  //     }
  //   }
  // }, [])



//   const handleAccountChange = (acc) => {
//   if (acc.length === 0 && account !== acc[0]) {
//     setAccount(acc[0])
//     canVote()
//   } else {
//     setConnected(false)
//     setAccount(null)
//   }
// }


  return (
    <AppContext>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/proposal" element={<Proposal />} />
      </Routes>
      </AppContext>
  );
}


export default App;
