import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import "./App.css";
//import DenseAppBar from './components/AppBar';
//import Home  from './components/Home';
//import { shoes } from './components/product';

function App() {
  return (
  <Router>
    
    {/* <DenseAppBar /> */}
    <nav>
      <div className=" App-margin"> 
      <Link to="/">Home</Link>
      
      <Link to="/men">   Men  </Link>
      
      <Link to="/women">   Women  </Link>
      
      <Link to="/Kids">   Kids  </Link>
      </div>
    </nav>

  
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/men" element ={<Men />}>
      
      <Route path="/" element={<LaunchIndex />} />
      <Route path=":slug" element={<LaunchMenShoe />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/women" element ={<Women />} />
      <Route path="/kids" element ={<Kids />} />

    </Routes>
  </Router>
  );
}


function Home() {
  return (
  <div className="body">
    <h1 className="App-marginS">
      Welcome to Shoes Store
      </h1>
   
  </div>
  

  );
}

function NotFound () {
  return (
    <div>
    <h1>Not Found</h1>
    <p>Sorry your page not found.</p>
    </div>
  );
}

function Men() {
  return (
  <div>
    <h1> Welcome Launch</h1>
    <Outlet />
  </div>

  );
}

function Women() {
  return (
  <div>
    <h1> Women</h1>
    <Outlet />
  </div>

  );
}

function Kids() {
  return (
  <div>
    <h1> Kids </h1>
    <Outlet />
  </div>

  );
}

function LaunchMenShoe() {
  const {slug} = useParams();
  const shoe = shoes[slug];
  if (!shoe) {
    return <h2>Not Found</h2>
  }

  const { name, imageURL } = shoe;

  return (
     <div>
       <h2>{name}</h2>
       <img src={imageURL} alt={name} />
  </div>
  );
}

function LaunchIndex () {
  return (
    <ul className="center">
      {Object.entries(shoes).map(([slug, { name,price, imageURL }]) => (
        <li key={slug}>
          <Link to={`/men/${slug}`}>
          <h2>{name}</h2>
          
          <img src={imageURL} alt={name} />
          <h3>Price: {price}$</h3>
          </Link>
          
          </li>
      ))}
    </ul>


  );
}


// const shoes = {
//   "air-jordan-3-valor-blue": {
//     name: "VALOUR BLUE",
//     imageURL:
//       "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "jordan-mars-270-london": {
//     name: "JORDAN MARS 270 LONDON",
//     imageURL:
//       "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "air-jordan-1-zoom-racer-blue": {
//     name: "RACER BLUE",
//     imageURL:
//       "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "Air Zoom Pegasus 37":{
//     name: "PEGASUS 37",
//     imageURL:
//         "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b4f9232-9104-4ac4-9b31-22b421ba46c2/react-infinity-run-flyknit-running-shoe-4jHr6L.jpg"
//   }
// };

const shoes = [{
  id: 1,
  name: "Nike React Infinity Run Flyknit",
  brand: "NIKE",
  gender: "MEN",
  category: "RUNNING",
  price: 160,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
  slug: "nike-react-infinity-run-flyknit",
},
{
  id: 2,
  name: "Nike React Miler",
  brand: "NIKE",
  gender: "MEN",
  category: "RUNNING",
  price: 130,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
  slug: "nike-react-miler",
},
{
  id: 3,
  name: "Nike Air Zoom Pegasus 37",
  brand: "NIKE",
  gender: "WOMEN",
  category: "RUNNING",
  price: 120,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
  slug: "nike-air-zoom-pegasus-37",
},
{
  id: 4,
  name: "Nike Joyride Run Flyknit",
  brand: "NIKE",
  gender: "WOMEN",
  category: "RUNNING",
  price: 180,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
  slug: "nike-joyride-run-flyknit",
},
{
  id: 5,
  name: "Nike Mercurial Vapor 13 Elite FG",
  brand: "NIKE",
  gender: "WOMEN",
  category: "FOOTBALL",
  price: 250,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
  slug: "nike-mercurial-vapor-13-elite-fg",
},
{
  id: 6,
  name: "Nike Phantom Vision Elite Dynamic Fit FG",
  brand: "NIKE",
  gender: "WOMEN",
  category: "FOOTBALL",
  price: 150,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
  slug: "nike-phantom-vision-elite-dynamic-fit-fg",
},
{
  id: 7,
  name: "Nike Phantom Venom Academy FG",
  brand: "NIKE",
  gender: "WOMEN",
  category: "FOOTBALL",
  price: 80,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
  slug: "nike-phantom-venom-academy-fg",
},
{
  id: 8,
  name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
  brand: "NIKE",
  gender: "MEN",
  category: "FOOTBALL",
  price: 145,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
  slug: "nike-mercurial-vapor-13-elite-tech-craft-fg",
},
{
  id: 9,
  name: "Nike Mercurial Superfly 7 Pro MDS FG",
  brand: "NIKE",
  gender: "MEN",
  category: "FOOTBALL",
  price: 137,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
  slug: "nike-mercurial-superfly-7-pro-mds-fg",
},
{
  id: 10,
  name: "Nike Air Force 1",
  brand: "NIKE",
  gender: "KIDS",
  category: "CASUAL",
  price: 90,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
  slug: "nike-air-force-1",
},
{
  id: 11,
  name: "Nike Air Max 90",
  brand: "NIKE",
  gender: "KIDS",
  category: "CASUAL",
  price: 100,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
  slug: "nike-air-max-90",
},
{
  id: 12,
  name: "Nike Air Max 90 LTR",
  brand: "NIKE",
  gender: "KIDS",
  category: "CASUAL",
  price: 110,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",
  slug: "nike-air-max-90-ltr",
},
{
  id: 13,
  name: "Nike Joyride Dual Run",
  brand: "NIKE",
  gender: "KIDS",
  category: "RUNNING",
  price: 110,
  is_in_inventory: false,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",
  slug: "nike-joyride-dual-run",
},
{
  id: 14,
  name: "Nike Renew Run",
  brand: "NIKE",
  gender: "KIDS",
  category: "RUNNING",
  price: 80,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg",
  slug: "nike-renew-run",
},
{
  id: 16,
  name: "Bridgport Advice",
  brand: "HUSHPUPPIES",
  gender: "MEN",
  category: "FORMAL",
  price: 30,
  is_in_inventory: true,
  items_left: 4,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/BRIDGPORT_ADVICE-BLACK_1_800x800.jpg?v=1576567903",
  slug: "bridgport-advice",
},
{
  id: 15,
  name: "Beck",
  brand: "HUSHPUPPIES",
  gender: "MEN",
  category: "FORMAL",
  price: 80,
  is_in_inventory: true,
  items_left: 5,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Beck-Black_800x800.jpg",
  slug: "beck",
},
{
  id: 17,
  name: "Fester",
  brand: "HUSHPUPPIES",
  gender: "MEN",
  category: "FORMAL",
  price: 70,
  is_in_inventory: true,
  items_left: 6,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/fester-Tan_800x800.jpg?v=1575537531",
  slug: "fester",
},
{
  id: 18,
  name: "Pixel",
  brand: "HUSHPUPPIES",
  gender: "MEN",
  category: "FORMAL",
  price: 75,
  is_in_inventory: true,
  items_left: 7,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/PIXEL-TAN_800x800.jpg?v=1577420506",
  slug: "pixel",
},
{
  id: 19,
  name: "Austin",
  brand: "HUSHPUPPIES",
  gender: "MEN",
  category: "FORMAL",
  price: 75,
  is_in_inventory: true,
  items_left: 2,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Austin-Coffee_800x800.jpg?v=1574772988",
  slug: "austin",
},
{
  id: 20,
  name: "SS-HL-0135",
  brand: "HUSHPUPPIES",
  gender: "WOMEN",
  category: "FORMAL",
  price: 30,
  is_in_inventory: true,
  items_left: 6,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009240000-11-SS-HL-0135-Black_800x800.jpg?v=1572264270",
  slug: "ss-hl-0135",
},
{
  id: 21,
  name: "SS-HL-0136",
  brand: "HUSHPUPPIES",
  gender: "WOMEN",
  category: "FORMAL",
  price: 50,
  is_in_inventory: true,
  items_left: 4,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009250000-779-SS-HL-0136-Coffee_800x800.jpg?v=1571900372",
  slug: "ss-hl-0136",
},
{
  id: 22,
  name: "SS-HL-0128",
  brand: "HUSHPUPPIES",
  gender: "WOMEN",
  category: "FORMAL",
  price: 35,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/000300242-484-SS-HL-0128-Blue_800x800.jpg?v=1583235174",
  slug: "ss-hl-0128",
},
{
  id: 23,
  name: "SS-MS-0075",
  brand: "HUSHPUPPIES",
  gender: "WOMEN",
  category: "CASUAL",
  price: 25,
  is_in_inventory: true,
  items_left: 7,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-479-SS-MS-0075-Red_800x800.jpg?v=1570688687",
  slug: "ss-ms-0075",
},
{
  id: 24,
  name: "SS-MS-0075",
  brand: "HUSHPUPPIES",
  gender: "WOMEN",
  category: "CASUAL",
  price: 35,
  is_in_inventory: true,
  items_left: 4,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-615-SS-MS-0075-TAN_800x800.jpg?v=1570688687",
  slug: "ss-ms-0075",
},
{
  id: 25,
  name: "SS-PM-0093",
  brand: "HUSHPUPPIES",
  gender: "WOMEN",
  category: "CASUAL",
  price: 30,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/SS-PM-0093_1_800x800.jpg?v=1570601253",
  slug: "ss-pm-0093",
},
{
  id: 26,
  name: "Nizza X Disney",
  brand: "ADIDAS",
  gender: "KIDS",
  category: "CASUAL",
  price: 55,
  is_in_inventory: true,
  items_left: 6,
  imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",
  slug: "nizza-x-disney",
},
{
  id: 27,
  name: "X_PLR",
  brand: "ADIDAS",
  gender: "KIDS",
  category: "CASUAL",
  price: 65,
  is_in_inventory: true,
  items_left: 5,
  imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",
  slug: "x_plr",
},
{
  id: 28,
  name: "Stan Smith",
  brand: "ADIDAS",
  gender: "KIDS",
  category: "CASUAL",
  price: 55,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg",
  slug: "stan-smith",
},
{
  id: 29,
  name: "NMD_R1",
  brand: "ADIDAS",
  gender: "KIDS",
  category: "RUNNING",
  price: 120,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
  slug: "nmd_r1",
},
{
  id: 30,
  name: "NMD_R1 Flash Red",
  brand: "ADIDAS",
  gender: "WOMEN",
  category: "CASUAL",
  price: 140,
  is_in_inventory: true,
  items_left: 5,
  imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",
  slug: "nmd_r1-flash-red",
},
{
  id: 31,
  name: "Superstar",
  brand: "ADIDAS",
  gender: "WOMEN",
  category: "CASUAL",
  price: 90,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",
  slug: "superstar",
},
{
  id: 32,
  name: "Club C Revenge Mens",
  brand: "Reebok",
  gender: "MEN",
  category: "CASUAL",
  price: 70,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7599294868804d78a1b1ab6f01718a5e_9366/Club_C_Revenge_Men's_Shoes_White_FV9877_01_standard.jpg",
  slug: "club-c-revenge-mens",
},
{
  id: 33,
  name: "SK80-Low",
  brand: "Vans",
  gender: "MEN",
  category: "CASUAL",
  price: 60,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
  slug: "sk80-low",
},
{
  id: 34,
  name: "Michael Feburary SK8-Hi",
  brand: "Vans",
  gender: "MEN",
  category: "CASUAL",
  price: 72,
  is_in_inventory: true,
  items_left: 3,
  imageURL: "https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$",
  slug: "michael-feburary-sk8-hi",
},
];

export default App;