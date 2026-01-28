export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "NovaStack Portfolio",
      image: "https://via.placeholder.com/400x250",
      description: "Team portfolio website built with React and Bootstrap.",
      link: "https://linkedin.com", // temporary
      buttonText: "View Concept",
    },
    {
      id: 2,
      title: "Team Management UI",
      image: "https://via.placeholder.com/400x250",
      description: "UI concept for managing team members and roles.",
      link: "https://github.com",
      buttonText: "View UI Design",
    },
    {
      id: 3,
      title: "Contact Form Module",
      image: "https://via.placeholder.com/400x250",
      description: "Frontend contact form with dynamic UI rendering.",
      link: "https://github.com",
      buttonText: "View Demo",
    },
    {
      id: 4,
      title: "Landing Page Concept",
      image: "https://via.placeholder.com/400x250",
      description: "Modern landing page design for startups and teams.",
      link: "https://dribbble.com",
      buttonText: "View Design",
    },
    {
      id: 5,
      title: "Project In Progress",
      image: "https://via.placeholder.com/400x250",
      description: "Currently working on a full-stack project.",
      link: "#",
      buttonText: "Coming Soon",
    },
  ];

  return (
    <div className="container py-5">

      {/* HEADER */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">Projects</h2>
        <p className="text-muted">
          A selection of our work, concepts and ongoing projects.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="row">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  {project.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
