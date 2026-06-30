import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/70 backdrop-blur">

      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-neutral-900"
      >

        <button
          onClick={closeModal}
          className="absolute text-2xl text-white top-5 right-5"
        >
          ✕
        </button>

        <img
          src={image}
          alt={title}
          className="object-cover w-full h-80"
        />

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            {title}
          </h2>

          <p className="mt-5 leading-8 text-neutral-400">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">

            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-neutral-800"
              >
                {tag}
              </span>
            ))}

          </div>

          <div className="flex gap-4 mt-8">

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 border rounded-lg border-neutral-700 hover:bg-neutral-800"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 text-black bg-white rounded-lg"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default ProjectDetails;