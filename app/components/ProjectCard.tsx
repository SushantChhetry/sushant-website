import React from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";

interface ProjectProps {
  title: string;
  imageSrc: string;
  description: string;
  altText: string;
  icons: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  imageSrc,
  description,
  icons,
}) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    react: <FaReact />,
    // Add more icon mappings here if needed
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <Image
        src={imageSrc}
        alt={title}
        className="h-64 w-full object-cover"
        width={250}
        height={250}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="text-gray-600">{description}</div>
      </div>
      {icons.map((icon, index) => {
        if (iconMap[icon]) {
          return <div key={index}>{iconMap[icon]}</div>;
        }
        return null; // Return null for unsupported icons
      })}
    </div>
  );
};

export default ProjectCard;
