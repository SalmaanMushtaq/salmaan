interface Project {
  id: number;
  name: string;
  description: string;
  pictures: string[];
  githubLink: string;
}
function Work({ project }: { project: Project }) {
  return (
    <div className="max-w-xl mx-auto lg:w-full xl:w-full">
      <div className="flex items-center mb-4 gap-5">
        <span className="rounded-full bg-background w-10 h-10 flex items-center justify-center text-xl dark:text-white">
          {project.id}
        </span>
        <h1 className="text-2xl font-bold">{project.name}</h1>
      </div>
      <div className="ml-5 my-5">
        <p className="pl-10">{project.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {project.pictures.map((picture, index) => (
          <div
            key={index}
            className="cursor-zoom-in rounded-lg relative overflow-hidden transition-transform duration-300 transform hover:scale-125 hover:z-50"
          >
            <img
              src={`src/assets/projects/${picture}.png`}
              alt={`Picture ${index + 1}`}
              className="w-full rounded-lg h-[100%]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="mt-5 text-end">
        {project.githubLink && (
          <button
            className="btnHover p-1 px-6 bg-background rounded-full dark:text-black
          "
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent"
            >
              View on GitHub
            </a>
          </button>
        )}
      </div>
    </div>
  );
}

export default Work;
