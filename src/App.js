import Topbar from "./Components/Topbar/Topbar"
import useOnlineStatus from '@rehooks/online-status';
import NotFound from "./Components/Notfound";
import React from 'react';
function App() {
  const onlineStatus = useOnlineStatus();
  
  return (
    <div className="App">
        
        {onlineStatus ? <Topbar defaultValue = {3}/> : <NotFound />}
    </div>
  );
}

export default App;
