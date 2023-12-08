import Home from "./pages/home/home";
import {useState} from "react";
import React from "react";
import Contacts from "./pages/contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";
import TVShows from "./pages/TV Shows/TVShows";
import Spotlight from "./pages/Spotlight/Spotlight";
import Tiles from "./components/Tiles/Tiles";
import TestMe from "./pages/TestMe"
import SearchTiles from "./components/SearchTiles/SearchTiles";
import Footer from "./components/Footer/Footer";

function App() {
    const [route, setRoute] = useState('home');
    const [id, setId] = useState(-1);
    const [genID, setGenID] = useState()
    const [type, setType] = useState("m")
    const [srch, setSrch] = useState('');


    let res;
    if (route === 'home') {
        res = <Home changeRoute={setRoute} setId={setId} setType={setType} srch={srch} setSrch={setSrch}/>;
    } else if (route === 'contacts') {
        res = <Contacts/>;
    } else if (route === 'tvshows') {
        res = <TVShows changeRoute={setRoute} setId={setId} setType={setType}/>;
    } else if (route === 'spotlight') {
        res = <Spotlight changeRoute={setRoute} setId={setId} setType={setType} changeGen={setGenID} id={id} type={type}/>
    }else if(route==='genre'){
        res = <Tiles ID={genID} changeRoute={setRoute} setId={setId} type={type}/>
    } else if (route==='testMe'){
        res = <TestMe changeRoute={setRoute} setId={setId} setType={setType} />
    } else if(route==='msrch'){
        res = <SearchTiles ID={genID} changeRoute={setRoute} setId={setId} type={type} srch={srch}  />
    }

    return <div>
        <Navbar jayraj={setRoute} srch={srch} setSrch={setSrch} />
        {res}
        <Footer/>
    </div>
}

export default App;
