import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const CourseCard = ({ image, title, description, link }: CourseCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-smooth group"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
