import Navbar from "./components/Navbar";
import Newswindow from "./components/Newswindow";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let country='in'
  let baseurl=`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=592ffaaf5a1c472282b206b7647959dc`;
  

  return (
    <div className="main">
      <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Newswindow  key="1" baseurl={baseurl} category={'general'}/>}/>
          <Route path="/general" element={<Newswindow  key="2" baseurl={baseurl} category={'general'}/>}/>
          <Route path="/sports" element={<Newswindow  key="3" baseurl={baseurl} category={'sports'}/>}/>
          <Route path="/technology" element={<Newswindow  key="4" baseurl={baseurl} category={'technology'}/>}/>
          <Route path="/business" element={<Newswindow  key="5" baseurl={baseurl} category={'business'}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
