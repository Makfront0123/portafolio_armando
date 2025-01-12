import { Routes, Route } from "react-router-dom";
import Resume from "../screen/Resume";
import Work from "../screen/Work";
import Contact from "../screen/Contact";
import Home from "../screen/Home";
import Layout from "./Layout";
import Details from "../screen/Details";



const AppContent = () => {
    return (
        <div id="action" className="animate-slide-in-right bg-[#DCF2F1] min-h-[113vh] md:p-10 p-4  rounded-lg drop-shadow-sm  lg:min-w-[140vh] md:min-w-[600px] sm:min-w-[450px] min-w-[100px]">

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/details/:id" element={<Details />} />
                </Route>
            </Routes>

        </div>
    );
};


export default AppContent