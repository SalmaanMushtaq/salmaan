import { createLazyFileRoute } from "@tanstack/react-router";
import Introduction from "../../../components/Introduction";
import Profile from "../../../components/Profile";
import ContactMe from "../../../components/ContactMe";
import GetInTouch from "../../../components/GetInTouch";
import DownloadCV from "../../../components/DownloadCV";
import Loading from "@/components/shared/loading";

export const Route = createLazyFileRoute("/_layout/contact")({
  component: Contact,
  pendingComponent: Loading,
});

function Contact() {
  return (
    <>
      <Introduction />
      <Profile heading="" />
      <ContactMe />
      <GetInTouch />
      <DownloadCV />
    </>
  );
}

export default Contact;
