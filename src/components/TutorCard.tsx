import { Link } from "react-router-dom";

interface TutorCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const TutorCard = ({ image, title, description, link }: TutorCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover text-center">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <Link to={link} className="btn-primary inline-block">
          Hire Tutor
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
