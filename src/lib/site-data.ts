const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const heroImage = asset("images/survey-hero-4k.webp");
const fieldImage = asset("images/survey-field.jpg");
const roadImage = asset("images/survey-road.jpg");
const equipmentImage = asset("images/survey-equipment.jpg");
export const images = { heroImage, fieldImage, roadImage, equipmentImage };

export const stats = [
  { value: "00+", label: "Total Projects", dominant: true },
  { value: "00+", label: "Completed Projects", dominant: true },
  { value: "00", label: "Ongoing Projects", dominant: true },
  { value: "00+", label: "Clients Served" },
];

export const services = [
  ["Topographical Survey", "Mapping terrain, levels, contours, structures and existing site features for engineering planning and design."],
  ["Total Station Survey", "Precise field measurement of coordinates, angles, distances, elevations and engineering points."],
  ["DGPS / GNSS Survey", "Geospatial positioning and control-point establishment for land and infrastructure projects."],
  ["Boundary & Demarcation", "Measurement and marking of project or property boundaries according to project requirements."],
  ["Construction Layout", "Transferring engineering drawings onto the construction site for accurate positioning of structures."],
  ["Road & Infrastructure", "Support for road alignment, levels, longitudinal sections, cross-sections and infrastructure development."],
  ["As-Built Survey", "Verification and documentation of constructed elements and their actual final positions."],
  ["Contour & Level Survey", "Elevation and terrain mapping supporting site development, drainage and earthwork planning."],
] as const;

export type Project = {
  id: number; title: string; location: string; type: string; status: "COMPLETED" | "ONGOING"; year: string; description: string; image: string; gallery: string[];
};

export const projects: Project[] = [
  { id: 1, title: "Project 01", location: "Location to be added", type: "Total Station", status: "COMPLETED", year: "Year to be added", description: "Actual project scope and field details will be added with the client photographs.", image: fieldImage, gallery: [fieldImage, equipmentImage, heroImage] },
  { id: 2, title: "Project 02", location: "Location to be added", type: "Road", status: "ONGOING", year: "Year to be added", description: "Actual project scope and field details will be added with the client photographs.", image: roadImage, gallery: [roadImage, heroImage, equipmentImage] },
  { id: 3, title: "Project 03", location: "Location to be added", type: "DGPS", status: "COMPLETED", year: "Year to be added", description: "Actual project scope and field details will be added with the client photographs.", image: equipmentImage, gallery: [equipmentImage, roadImage, fieldImage] },
  { id: 4, title: "Project 04", location: "Location to be added", type: "Topographical", status: "ONGOING", year: "Year to be added", description: "Actual project scope and field details will be added with the client photographs.", image: heroImage, gallery: [heroImage, fieldImage, roadImage] },
];