import {useParams} from 'react-router-dom'

const projectData = [
    {
      id: 1,
      title: "Clean Water Initiative",
      image: "https://picsum.photos/600/300?random=1",
      shortDescription: "Providing clean water to rural areas.",
      fullStory: "This project focuses on building wells and water filtration systems in underserved regions to ensure clean drinking water for everyone.",
    },
    {
      id: 2,
      title: "Education for All",
      image: "https://picsum.photos/600/300?random=2",
      shortDescription: "Promoting education for children in need.",
      fullStory: "We aim to provide free education, books, and resources to children in remote villages to foster their learning journey.",
    },
    // Add more projects as needed
  ];


  const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData.find((p) => p.id === parseInt(id));
  
    if (!project) return <p>Project not found!</p>;
  
    return (
      <div className="project-details">
        <h1 className="details-title">{project.title}</h1>
        <img src={project.image} alt={project.title} className="details-image" />
        <p className="details-story">{project.fullStory}</p>
      </div>
    );
  };

  export default ProjectDetails