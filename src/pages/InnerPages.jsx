import { Route, Routes } from "react-router-dom";
import ContactPage from "../components/ContactPage";
import TeamPage from "../components/TeamPage";

export default function InnerPages() {
    return <>
        <Routes>
            <Route path="contact" element={<ContactPage />} />
            <Route path="team" element={<TeamPage />} />
        </Routes>
    </>
}