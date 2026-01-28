import React from 'react'

export default function About() {

const teamMembers = [
  {  id:1, name: "Amit Pandey", designation: "Team Lead / Frontend" , description:"Part of the NovaStack team, focusing on frontend development and project coordination with an emphasis on clean design and user experience.", Achievement:"Contributed to building responsive interfaces and coordinating frontend tasks within a team-based workflow.", currentprofile:"Frontend Developer & Team Coordinator at NovaStack" ,image: "/team/Amit.jpg.jpeg"
},
  {id:2, name: "Member 2", designation: "Frontend Developer", description:"Frontend developer at NovaStack, working on building responsive and user-friendly web interfaces.", Achievement:"Implemented clean UI components using modern frontend technologies.", currentprofile:"Frontend Developer at NovaStack", image:""},

  {id:3, name: "Member 3", designation: "Backend Developer",description:"Backend developer at NovaStack, responsible for server-side logic and data handling.", Achievement:"Developed and integrated backend features to support web applications.", currentprofile:"Backend Developer at NovaStack" ,image:""},
  {id:4,name: "Member 4", designation: "UI/UX Designer",description:"UI/UX designer at NovaStack, focused on creating clean and intuitive user experiences.", Achievement:"Designed user-friendly layouts that improved overall usability.", currentprofile:"UI/UX Designer at NovaStack", image:"" },
  {id:5, name: "Member 5", designation: "Full Stack Developer",description:"Full stack developer at NovaStack, working across frontend and backend development.", Achievement:"Contributed to end-to-end development of web applications.", currentprofile:"Full Stack Developer at NovaStack", image:"" },
  {id:6, name: "Member 6", designation: "React Developer",description:"React developer at NovaStack, focused on building reusable and scalable UI components.", Achievement:"Built modular React components to improve application structure.", currentprofile:"React Developer at NovaStack" , image:""},


  {id:7, name: "Member 7", designation: "API & Integration",description:"Responsible for API integration and third-party service connectivity at NovaStack.", Achievement:"Integrated APIs to ensure smooth data flow across applications.", currentprofile:"API & Integration Engineer at NovaStack" , image:"" },
  {id:8, name: "Member 8", designation: "Testing & QA",description:"QA team member at NovaStack, focused on testing and ensuring application reliability.", Achievement:"Performed functional testing to improve application stability.", currentprofile:"QA & Testing Associate at NovaStack", image:"" },

  {id:9, name: "Member 9", designation: "Deployment & Support",description:"Handles deployment and ongoing technical support at NovaStack.", Achievement:"Managed deployment processes and supported live applications.", currentprofile:"Deployment & Support Engineer at NovaStack" , image:"" },
];


  return (
    <div className="container py-5">

    
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">About NovaStack</h2>
        <p className="text-muted mt-3">
          NovaStack is a growing team of 9 members working together to build
          modern, reliable and scalable web solutions.
        </p>
      </div>

      
      <div className="row">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">

                <img
  src={member.image}

  className="rounded-circle mx-auto mb-3 d-block"
  style={{
    width: "80px",
    height: "80px",
    objectFit: "cover",
    border: "2px solid #dee2e6"
  }}
/>


                <h5 className="card-title">{member.name}</h5>
                <p className="text-muted">{member.designation}</p>

                <p className="small">{member.description}</p>

                <p className="small text-success">
                  <strong>Achievement:</strong> {member.Achievement}
                </p>

                <p className="small text-primary">
                  {member.currentprofile}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}


