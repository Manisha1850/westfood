
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Contect from "./pages/Contect.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import Home1 from "./pages/Home1.js";
import Login from "./pages/Login.js";
import Collection from "./pages/Collection.js";
import Donate from "./pages/Donate.js";
import SignUp from "./pages/SignUp.js";
import Dashboard from "./pages/Admin/Dashboard.js";
import Homepage from "./pages/Admin/Homepage.js";
import Userpage from "./pages/User/Userpage.js";
import Donor from "./pages/Admin/Donor.js";
import Hotel from "./pages/Admin/Hotel.js";
import PendingCollection from "./pages/Admin/PendingCollection.js";
import DonationRequest from "./pages/Admin/DonationRequest.js";
import Collection1 from "./pages/Admin/Collection1.js";
import Donationpage from "./pages/User/Donationpage.js";
import Donations from "./pages/User/Donations.js";
import Myprofile from "./pages/User/Myprofile.js";



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contect/>}/>
        <Route path="collection" element={<Collection/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="donate" element={<Donate/>}/>
        <Route path="donor" element={<Donor/>}/>
        <Route path="hotel" element={<Hotel/>}/>
        <Route path="pcollection" element={<PendingCollection/>}/>
        <Route path="drequest" element={<DonationRequest/>}/>
        <Route path="collection1" element={<Collection1/>}/>
        <Route path="mypro" element={<Myprofile/>}/>

        <Route path="donation" element={<Donationpage/>}/>
        <Route path="donations" element={<Donations/>}/>
        
        <Route path="*" element={<Pagenotfound/>}/>
        <Route path="homepage" element={<Homepage/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="userpage" element={<Userpage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
