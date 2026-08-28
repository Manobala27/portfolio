import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  technologies: string[];
  githubUrl: string;
  features: string[];
  architecture: string;
}

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: 1,
      title: "CloudVault – Secure Cloud Storage Platform",
      shortDesc: "A cloud-based file storage platform focused on secure file management using AWS and Python.",
      longDesc: "CloudVault is a secure object storage gateway interface. It bridges standard web operations with Amazon Web Services (AWS) infrastructure. By hosting a Flask application on Amazon EC2, it provides users with an intuitive file manager interface to upload, download, and structure files inside AWS S3 buckets without exposing private credentials. Security is maintained through localized IAM policies and temporary pre-signed URLs.",
      technologies: ["AWS", "Amazon S3", "IAM", "EC2", "Flask", "MySQL", "Python"],
      githubUrl: "https://github.com/manobala/cloudvault-storage",
      features: [
        "User authentication and multi-tenant file separation.",
        "Secure file transfers directly to/from S3 via temporary pre-signed URLs.",
        "EC2 instance profile setup with fine-grained IAM roles (no hardcoded keys).",
        "MySQL relational schema mapping folder hierarchies and metadata information."
      ],
      architecture: "Flask Application (EC2) ──> IAM Authorized Calls ──> Amazon S3 Storage"
    },
    {
      id: 2,
      title: "CloudPulse – Serverless Log Analytics Platform",
      shortDesc: "A serverless platform for processing logs and generating alerts using AWS cloud services.",
      longDesc: "CloudPulse is an event-driven system built to consume log payloads from external services, evaluate them against predefined thresholds, and immediately dispatch alerts. It completely bypasses physical servers, leveraging AWS serverless compute and stream processors to achieve automatic scaling and minimize idle operational costs.",
      technologies: ["Kinesis", "Lambda", "S3", "DynamoDB", "SNS", "CloudWatch", "Python"],
      githubUrl: "https://github.com/manobala/cloudpulse-analytics",
      features: [
        "Real-time stream ingestion of raw log payloads using Amazon Kinesis.",
        "Filtering, parsing, and threshold detection in Python-based AWS Lambda functions.",
        "Persistent metadata and incident telemetry storage in Amazon DynamoDB tables.",
        "Instant alerts dispatched to administrators via Amazon SNS email channels.",
        "System metrics and scaling behavior logs cataloged in CloudWatch."
      ],
      architecture: "Log Stream ──> Kinesis ──> Lambda ──> DynamoDB (Storage) & SNS (Alerts)"
    },
    {
      id: 3,
      title: "Vehicle Speed Detection System",
      shortDesc: "A computer vision project for detecting vehicles, tracking movement, and estimating vehicle speed.",
      longDesc: "This is a computer vision and video analytics project built in Python. By processing traffic camera feeds, the system detects moving elements, applies tracking filters to isolate individual vehicles, and computes speed estimations based on geometric reference calibration. The tracking logs are stored in a database and rendered on a light Flask monitoring dashboard.",
      technologies: ["Python", "OpenCV", "SQLite", "Flask"],
      githubUrl: "https://github.com/manobala/vehicle-speed-detector",
      features: [
        "Vehicle segmentation and object contours calculation using OpenCV algorithms.",
        "Centroid tracking to follow individual vehicles across consecutive video frames.",
        "Speed calculation based on frame rate and calibrated real-world markers.",
        "Persistent logging of speed events, counts, and timestamps in SQLite.",
        "Flask-based interface to review speed violations and average traffic charts."
      ],
      architecture: "Camera/Video Feed ──> OpenCV Analytics ──> Database (SQLite) ──> Web UI (Flask)"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 relative inline-block">
            Projects
            <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-brand-red md:w-12"></span>
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest mt-4">
            Recent Work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-white border border-gray-100 hover:border-gray-200 shadow-sm rounded-xl p-5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-semibold bg-red-50/80 px-2 py-1 rounded">
                  System / App
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors duration-200 mb-3 leading-snug">
                {project.title.split(" – ")[0]}
              </h3>

              <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                {project.shortDesc}
              </p>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 text-xs font-semibold rounded-md border border-gray-200/60 transition-colors duration-200"
                >
                  <FaGithub /> GitHub
                </a>
                <button
                  onClick={() => {
                    console.log("Setting active project:", project);
                    setActiveProject(project);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-semibold rounded-md transition-colors duration-200"
                >
                  Details <FaExternalLinkAlt size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {/* Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 bg-gray-950/45 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Modal Box */}
          <div
            className="relative bg-white border border-gray-100 rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 transform transition-all duration-300"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-xl font-bold text-gray-900">
                {activeProject.title}
              </h3>
              <button
                onClick={() => setActiveProject(null)}
                className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {activeProject.longDesc}
                </p>
              </div>

              {/* Architecture workflow */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">
                  System Pipeline / Flow
                </h4>
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3.5 font-mono text-[11px] text-brand-red overflow-x-auto whitespace-nowrap">
                  {activeProject.architecture}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2.5">
                  Core Technical Features
                </h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1.5">
                  {activeProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2.5">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200/50 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-end gap-3 bg-gray-50/50">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:text-gray-900 text-xs font-semibold rounded-md shadow-sm transition-colors cursor-pointer"
              >
                <FaGithub /> GitHub Repository
              </a>
              <button
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center px-4 py-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-semibold rounded-md shadow-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
