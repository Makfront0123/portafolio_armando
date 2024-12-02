import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "../screen/Resume";
import Work from "../screen/Work";
import Contact from "../screen/Contact";
import Home from "../screen/Home";
import Layout from "./Layout";



const AppContent = () => {
    return (
        <div className="animate-slide-in-right bg-[#DCF2F1] min-h-[113vh] md:p-10 p-4  rounded-lg drop-shadow-sm  lg:w-[140vh] md:w-[600px] sm:w-[450px] w-[400px]">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};


export default AppContent