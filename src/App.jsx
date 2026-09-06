import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import History from "./pages/History.jsx";
import Leadership from "./pages/Leadership.jsx";
import PartyStructure from "./pages/PartyStructure.jsx";
import Constitution from "./pages/Constitution.jsx";
import ManifestoHub from "./pages/ManifestoHub.jsx";
import ManifestoPillar from "./pages/ManifestoPillar.jsx";
import PolicyLibrary from "./pages/PolicyLibrary.jsx";
import NewsList from "./pages/NewsList.jsx";
import NewsArticle from "./pages/NewsArticle.jsx";
import PressReleases from "./pages/PressReleases.jsx";
import Gallery from "./pages/Gallery.jsx";
import EventsList from "./pages/EventsList.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import Candidates from "./pages/Candidates.jsx";
import CandidateProfile from "./pages/CandidateProfile.jsx";
import ElectedOfficials from "./pages/ElectedOfficials.jsx";
import Join from "./pages/Join.jsx";
import MembershipSuccess from "./pages/MembershipSuccess.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import VolunteerOpportunities from "./pages/VolunteerOpportunities.jsx";
import Donate from "./pages/Donate.jsx";
import DonateSuccess from "./pages/DonateSuccess.jsx";
import Transparency from "./pages/Transparency.jsx";
import ReportConcern from "./pages/ReportConcern.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Login from "./pages/Login.jsx";
import MemberDashboard from "./pages/MemberDashboard.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/structure" element={<PartyStructure />} />
        <Route path="/about/constitution" element={<Constitution />} />

        <Route path="/manifesto" element={<ManifestoHub />} />
        <Route path="/manifesto/:slug" element={<ManifestoPillar />} />
        <Route path="/policy-library" element={<PolicyLibrary />} />

        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
        <Route path="/press-releases" element={<PressReleases />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/events" element={<EventsList />} />
        <Route path="/events/:slug" element={<EventDetail />} />

        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/:id" element={<CandidateProfile />} />
        <Route path="/elected-officials" element={<ElectedOfficials />} />

        <Route path="/join" element={<Join />} />
        <Route path="/join/success" element={<MembershipSuccess />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/volunteer/opportunities" element={<VolunteerOpportunities />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/success" element={<DonateSuccess />} />

        <Route path="/transparency" element={<Transparency />} />
        <Route path="/report-concern" element={<ReportConcern />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/dashboard" element={<MemberDashboard />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
