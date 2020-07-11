import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';


export default function App() {
  return (
  <Router>
    <nav>
      <Link to="/">Home</Link>

      <Link to="/launch">Launch</Link>
    </nav>

  
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/launch" element ={<Launch />}>
      <Route path="/" element={<LaunchIndex />} />
      <Route path=":slug" element={<LaunchShoe />} />

      </Route>
    </Routes>
  </Router>
  );
}

function Home() {
  return (
  <div>
    <h1> Welcome Home</h1>
  </div>

  );
}

function Launch() {
  return (
  <div className=".App-logo">
    <h1> Welcome Launch</h1>
    <Outlet />
  </div>

  );
}

function LaunchShoe() {
  const {slug} = useParams();
  const shoe = shoes[slug];
  if (!shoe) {
    return <h2>Not Found</h2>
  }

  const { name, img } = shoe;

  return (
     <div>
       <h2>{name}</h2>
       <img src={img} alt={name} />
  </div>
  );
}

function LaunchIndex () {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
          <h2>{name}</h2>
          <img src={img} alt={name} />
          </Link>
          
          </li>
      ))}
    </ul>


  );
}


const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};