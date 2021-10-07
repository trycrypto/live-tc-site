import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Footer from "../components/Footer";

const data = [
  {
    name: "NftyFile",
    link: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
  {
    name: "PhotoKey",
    link: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
  {
    name: "DecentPage",
    link: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      {data.map(({ name, link, description }) => (
        <Project key={name} name={name} link={link} description={description} />
      ))}
      <Footer />
    </>
  );
};

export default Projects;
