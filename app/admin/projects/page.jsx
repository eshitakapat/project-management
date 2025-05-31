import React from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaUsers } from "react-icons/fa";

const projects = [
  {
    id:"1",
    title: "E-commerce Platform",
    domain: "Web",
    description: "A full-featured e-commerce platform with product management, cart, and checkout.",
    teamLead: "John Doe",
    assistantLead: "Jane Smith",
    members: 3,
    github: "#",
    live: "#",
    status: "In Progress",
    statusColor: "bg-blue-700",
    enrolled: true,
  },
  {
    id:"2",
    title: "Sentiment Analysis Tool",
    domain: "AI/ML",
    description: "A tool that analyzes text sentiment using machine learning algorithms.",
    teamLead: "Emily Johnson",
    assistantLead: "Michael Brown",
    members: 2,
    github: "#",
    live: "#",
    status: "Completed",
    statusColor: "bg-green-700",
    enrolled: false,
  },
  { 
    id:"3",
    title: "Mobile Fitness App",
    domain: "App",
    description: "A fitness tracking mobile application with workout plans and progress tracking.",
    teamLead: "Sarah Wilson",
    assistantLead: "James Taylor",
    members: 3,
    github: "#",
    live: "#",
    status: "Due Soon",
    statusColor: "bg-yellow-500 text-black",
    enrolled: true,
  },
];

function StatusBadge({ status, color }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
      {status}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-[#4d4d53] border border-[#27272a] rounded-lg p-6 flex flex-col gap-3 min-w-[320px] max-w-[350px]">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-xl font-bold">{project.title}</h3>
        <StatusBadge status={project.status} color={project.statusColor} />
      </div>
      <span className="text-white text-sm">{project.domain}</span>
      <p className="text-white">{project.description}</p>
      <div className="text-sm text-gray-400">
        <div>Team Lead: <span className="text-gray-200">{project.teamLead}</span></div>
        <div>Assistant Lead: <span className="text-gray-200">{project.assistantLead}</span></div>
        <div className="flex items-center gap-1 mt-1"><FaUsers /> {project.members} members</div>
      </div>
      <div className="flex gap-2 mt-2">
        <a href={project.github} className="btn btn-sm bg-[#23272f] text-white px-3 py-1 rounded flex items-center gap-1"><FaGithub /> GitHub</a>
        <a href={project.live} className="btn btn-sm bg-[#23272f] text-white px-3 py-1 rounded flex items-center gap-1"><FaExternalLinkAlt /> Live</a>
      </div>
      <div className="flex gap-2 mt-2">
        {project.enrolled ? (
          <span className="bg-green-800 text-green-200 px-2 py-1 rounded text-xs">Enrolled</span>
        ) : (
          <button className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Enroll</button>
        )}
        <Link href={`/admin/projects/${project.id}`}>
         <button className="bg-white text-black px-2 py-1 rounded text-xs">Open Project</button>
        </Link>
        <button className="bg-red-700 text-white px-2 py-1 rounded text-xs">Delete</button>
      </div>
    </div>
  );
}

export default function AdminProjects() {
  return (
    <div className="pl-2 py-8">
      <h2 className="text-4xl font-bold mb-2 pt-10">Projects</h2>
      <p className="text-gray-400 mb-6">
        View and manage projects across your domains
      </p>
      {/* Tabs */}
      <div className="flex gap-2 mb-6 ">
        <button className="bg-[#23272f] text-white px-4 py-2 rounded font-semibold">All Projects</button>
        <button className="bg-[#18181b] text-gray-400 px-4 py-2 rounded">Enrolled</button>
        <button className="bg-[#18181b] text-gray-400 px-4 py-2 rounded">Available</button>
      </div>
      {/* Projects Grid */}
      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
