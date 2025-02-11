import React from "react";

const techIcons = {
  aws: "/icons/aws.svg",
  docker: "/icons/docker.svg",
  git: "/icons/git.svg",
  html5: "/icons/html5.svg",
  mongodb: "/icons/mongodb.svg",
  postgresql: "/icons/postgresql.svg",
  reactjs: "/icons/reactjs.svg",
  swagger: "/icons/swagger.svg",
  vitejs: "/icons/vitejs.svg",
  cypress: "/icons/cypress.svg",
  electron: "/icons/electron.svg",
  grafana: "/icons/grafana.svg",
  java: "/icons/java.svg",
  nestjs: "/icons/nestjs.svg",
  prisma: "/icons/prisma.svg",
  reactquery: "/icons/reactquery.svg",
  tailwindcss: "/icons/tailwindcss.svg",
  django: "/icons/django.svg",
  figma: "/icons/figma.svg",
  graphql: "/icons/graphql.svg",
  linux: "/icons/linux.svg",
  nextjs: "/icons/nextjs.svg",
  python: "/icons/python.svg",
  spring: "/icons/spring.svg",
  typescript: "/icons/typescript.svg",
};

interface TechIconsProps {
  name: keyof typeof techIcons;
  size?: number;
}

const TechIcons: React.FC<TechIconsProps> = ({ name, size = 100 }) => {
  return (
    <img
      src={techIcons[name]}
      alt={name}
      width={size}
      height={size}
      className="inline-block"
    />
  );
};

export default TechIcons;
