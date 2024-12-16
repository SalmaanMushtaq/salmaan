import { MacbookScroll } from "../ui/macbook-scroll";
import { Link } from "@tanstack/react-router";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-transparent w-full">
      <MacbookScroll
        title={
          <p>
            Welcome I&apos;m
            {/* <span className="rounded-full inline-block font-bold border-b-8 border-basic w-10"></span> */}
          </p>
        }
        badge={
          <Link to="/portfolio">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return <img src="logo.png" alt="" className={className} />;
};
