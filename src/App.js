import Topbar from "./Components/Topbar/Topbar"
import useOnlineStatus from '@rehooks/online-status';
import NotFound from "./Components/Notfound";

function App() {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="App">
        
        {onlineStatus ? <Topbar defaultValue = {2}/> : <NotFound />}
    </div>
  );
}

export default App;
