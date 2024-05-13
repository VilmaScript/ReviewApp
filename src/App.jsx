import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./pages/Reviews"
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import AddReviews from "./pages/AddReviews";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Notification from "./pages/Notification";
import SignInUp from "./pages/SignInUp";
import AboutMe from "./pages/AboutMe";

function App (){
return <div className="relative">
<BrowserRouter>
<Routes>
<Route path="/" element={<AppLayout/>} >
<Route index element={<Reviews/>} />
<Route path="add-reviews" element={<AddReviews/>} />
<Route path="notification" element={<Notification/>} />
<Route path="profile" element={<Profile/>} />
<Route path="search" element={<Search/>} />
</Route>
<Route path="about-me" element={<AboutMe />} />
<Route path="sign-in" element={<SignInUp />} />
<Route path="*" element={<PageNotFound />} />
 </Routes>
</BrowserRouter>
</div>

}


export default App