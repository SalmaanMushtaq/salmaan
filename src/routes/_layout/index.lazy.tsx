import { createLazyFileRoute } from "@tanstack/react-router";
import Introduction from "../../components/Introduction";
import Options from "../../components/Options";
import Education from "../../components/Education";
import TechSkills from "../../components/TechSkills";
import Languages from "../../components/Languages";
import Interests from "../../components/Interests";
import DownloadCV from "../../components/DownloadCV";
import Profile from "../../components/Profile";
import { toast } from "react-toastify";

export const Route = createLazyFileRoute("/_layout/")({
  component: ProfilePage,
});

function ProfilePage() {
  toast.success("success");

  return (
    <>
      <Introduction />
      <Profile heading="Profile" />
      <Options
        options={[
          "Education",
          "Tech Skills",
          "Experience",
          "Languages",
          "Soft Skills",
          "Interests",
        ]}
      />
      {/* <Options options={["Languages", "Soft Skills", "Interests"]} /> */}
      <Education />
      <TechSkills />
      <Languages />
      <Interests />
      <DownloadCV />
    </>
  );
}
