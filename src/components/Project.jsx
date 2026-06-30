import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden transition duration-300 border rounded-2xl bg-neutral-900 border-neutral-800 hover:-translate-y-2 hover:shadow-xl">

        <img
          src={image}
          alt={title}
          className="object-cover w-full h-52"
        />

        <div className="p-6">

          <h3 className="text-2xl font-semibold">
            {title}
          </h3>

          <p className="mt-3 text-neutral-400 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">

            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-neutral-800"
              >
                {tag}
              </span>
            ))}

          </div>

          <button
            onClick={() => setOpen(true)}
            className="px-5 py-3 mt-6 text-white transition rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            View Details
          </button>

        </div>

      </div>

      {open && (
        <ProjectDetails
          title={title}
          description={description}
          image={image}
          tags={tags}
          github={github}
          demo={demo}
          closeModal={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Project;