import { Route, Routes } from "react-router-dom";
import ContactPage from "../components/ContactPage";
import TeamPage from "../components/TeamPage";
import AboutUsPage from "../components/AboutUsPage";

export default function InnerPages() {
    return <>
        <Routes>
            <Route path="contact" element={<ContactPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="about" element={<AboutUsPage />} />
        </Routes>
    </>
}