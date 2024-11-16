import Work from "./Work";
interface Project {
  id: number;
  name: string;
  description: string;
  pictures: string[];
  githubLink: string;
}
const projectsArray: Project[] = [
  {
    id: 1,
    name: "Resturant Landing Page",
    description: "This is the restuurant landing page",
    pictures: [
      "rlp/rlp1",
      "rlp/rlp2",
      "rlp/rlp3",
      "rlp/rlp4",
      "rlp/rlpM1",
      "rlp/rlpM2",
    ],
    githubLink: "https://github.com/SalmaanMushtaq/restaurant-landing-page",
  },
  {
    id: 2,
    name: "Personal Portfolio",
    description: "My personal portfolio",
    pictures: [
      "port/port1",
      "port/port2",
      "port/port3",
      "port/port4",
      "port/port5",
      "port/port6",
    ],
    githubLink: "https://github.com/SalmaanMushtaq/profile",
  },
];
function Works() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6">
      {projectsArray.map((project) => (
        <Work key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Works;
