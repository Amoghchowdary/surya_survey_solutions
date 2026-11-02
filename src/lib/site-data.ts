const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const heroImage = asset("images/survey-hero-4k.webp");
const fieldImage = asset("images/survey-field.jpg");
const roadImage = asset("images/survey-road.jpg");
const equipmentImage = asset("images/survey-equipment.jpg");
export const images = { heroImage, fieldImage, roadImage, equipmentImage };

export const stats = [
  { value: "120+", label: "Total Projects", dominant: true },
  { value: "95+", label: "Completed Projects", dominant: true },
  { value: "12", label: "Ongoing Projects", dominant: true },
  { value: "13", label: "Upcoming Projects", dominant: true },
  { value: "40+", label: "Clients Served" },
];

export type ClientLogo = {
  name: string;
  src: string;
  alt: string;
  projectSlug?: string;
};

export const clientLogos: ClientLogo[] = [
  { name: "Advaita Properties", src: asset("images/client-logos/advaita-properties.png"), alt: "Advaita Properties logo" },
  { name: "Sri Lakshmi Developers", src: asset("images/client-logos/sri-lakshmi-developers.png"), alt: "Sri Lakshmi Developers logo" },
  { name: "Yashoda Infra Developers", src: asset("images/client-logos/yashoda-infra-developers.png"), alt: "Yashoda Infra Developers logo", projectSlug: "yashoda-villa-site" },
  { name: "Bheemaa Infra Solutions Pvt. Ltd.", src: asset("images/client-logos/bheemaa-infra-solutions.png"), alt: "Bheemaa Infra Solutions Private Limited logo", projectSlug: "bheemaa-amaravati-gad-tower" },
  { name: "Greater Infra", src: asset("images/client-logos/greater-infra.png"), alt: "Greater Infra logo", projectSlug: "greater-infra-villa-project" },
  { name: "Sri Eswar Ram", src: asset("images/client-logos/sri-eswar-ram.png"), alt: "Sri Eswar Ram logo" },
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

export type ProjectMedia = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  originalName: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  client?: string;
  location: string;
  type: string;
  status: "FIELDWORK";
  year: string;
  description: string;
  scope: string;
  equipment: string;
  sourceAlbum: string;
  image: string;
  media: ProjectMedia[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "amaravati-site",
    title: "Amaravati Site Survey",
    location: "Amaravati, Andhra Pradesh",
    type: "Construction Survey",
    status: "FIELDWORK",
    year: "2026",
    description: "Complete client-supplied media library from the Amaravati site, including field surveying, construction progress, Total Station observations and site documentation.",
    scope: "Construction-site measurement, field observation and survey documentation visible across the supplied media library.",
    equipment: "Total Station and construction-site survey activity are visible in the supplied media.",
    sourceAlbum: "Amaravati site",
    image: asset("images/projects/amaravati-site/image-001.jpg"),
    media: [
      { kind: "image", src: asset("images/projects/amaravati-site/image-001.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.16.50 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-002.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.16.53 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-003.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.16.57 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-004.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.48 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-005.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.53 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-006.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.02 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-007.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.02 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-008.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.05 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-009.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.06 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-010.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.12 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-011.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.13 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-012.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.14 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-013.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.14 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-014.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.18 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-015.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.18 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-016.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.22 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-017.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.23 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-018.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.23 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-019.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.24 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-020.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.24 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-021.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.25 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-022.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.27 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-023.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.28 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-024.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.47 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-025.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.48 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-026.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.48 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-027.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.48 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-028.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.49 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-029.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.49 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-030.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.49 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-031.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.50 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-032.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.50 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-033.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.00 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-034.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.00 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-035.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.01 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-036.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.01 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-037.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.02 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-038.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.02 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-039.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.02 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-040.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.03 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-041.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.03 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-042.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.04 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-043.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.04 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-044.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.04 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-045.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.05 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-046.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.05 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-047.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.05 AM (3).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-048.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.05 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-049.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.06 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-050.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.06 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-051.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.06 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-052.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.07 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-053.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.07 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-054.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.07 AM.jpeg" },
      { kind: "image", src: asset("images/projects/amaravati-site/image-055.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.19.08 AM.jpeg" }
    ],
  },
  {
    id: 2,
    slug: "bheemaa-amaravati-gad-tower",
    title: "Bheemaa Amaravati GAD Tower Survey",
    client: "Bheemaa Infra Solutions Pvt. Ltd.",
    location: "Amaravati, Andhra Pradesh",
    type: "Industrial / Total Station",
    status: "FIELDWORK",
    year: "2026",
    description: "Complete client-supplied image and video library for the Bheemaa Amaravati GAD Tower assignment, covering Total Station setups, industrial construction activity and technical site documentation.",
    scope: "Industrial construction surveying and measurement work documented across the supplied images and videos.",
    equipment: "Total Station is visible throughout the supplied project evidence.",
    sourceAlbum: "bheema amaravati Gad tower",
    image: asset("images/projects/bheemaa-amaravati-gad-tower/image-022.jpg"),
    media: [
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-001.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.00 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-002.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.03 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-003.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.12 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-004.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.15 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-005.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.16 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-006.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.17 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-007.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.19 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-008.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.20 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-009.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.23 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-010.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.25 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-011.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.26 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-012.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.30 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-013.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.32 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-014.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.35 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-015.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.17.37 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-016.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.00 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-017.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.00 AM (3).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-018.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.01 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-019.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.01 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-020.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.01 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-021.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.02 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-022.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.03 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-023.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.03 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-024.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.03 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-025.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.04 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-026.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.04 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-027.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.04 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-028.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.05 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-029.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.05 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-030.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.06 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-031.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.06 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-032.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.11 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-033.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.13 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-034.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.13 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-035.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.15 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-036.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.16 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-037.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.17 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-038.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.19 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-039.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.19 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-040.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.20 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-041.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.20 AM (2).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-042.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.21 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-043.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.22 AM (1).jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-044.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.18.22 AM.jpeg" },
      { kind: "image", src: asset("images/projects/bheemaa-amaravati-gad-tower/image-045.jpg"), originalName: "WhatsApp Image 2026-11-01 at 12.20.17 AM.jpeg" },
      { kind: "video", src: asset("images/projects/bheemaa-amaravati-gad-tower/video-01.mp4"), poster: asset("images/projects/bheemaa-amaravati-gad-tower/video-01-poster.webp"), originalName: "WhatsApp Video 2026-11-01 at 12.21.32 AM.mp4" },
      { kind: "video", src: asset("images/projects/bheemaa-amaravati-gad-tower/video-02.mp4"), poster: asset("images/projects/bheemaa-amaravati-gad-tower/video-02-poster.webp"), originalName: "WhatsApp Video 2026-11-01 at 12.28.06 AM.mp4" },
      { kind: "video", src: asset("images/projects/bheemaa-amaravati-gad-tower/video-03.mp4"), poster: asset("images/projects/bheemaa-amaravati-gad-tower/video-03-poster.webp"), originalName: "WhatsApp Video 2026-11-01 at 12.28.12 AM.mp4" },
      { kind: "video", src: asset("images/projects/bheemaa-amaravati-gad-tower/video-04.mp4"), poster: asset("images/projects/bheemaa-amaravati-gad-tower/video-04-poster.webp"), originalName: "WhatsApp Video 2026-11-01 at 12.28.18 AM.mp4" }
    ],
  },
  {
    id: 3,
    slug: "greater-infra-villa-project",
    title: "Greater Infra Villa Project Survey",
    client: "Greater Infra",
    location: "Location not specified in supplied folder",
    type: "Residential / Construction",
    status: "FIELDWORK",
    year: "2026",
    description: "Complete client-supplied image library documenting surveying activity across a villa/residential construction project, including foundations, structural work and Total Station setups.",
    scope: "Residential construction surveying, layout observation and field measurement visible in the supplied media.",
    equipment: "Total Station is visible in the supplied project media.",
    sourceAlbum: "greater infra villa project",
    image: asset("images/projects/greater-infra-villa-project/image-001.jpg"),
    media: [
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-001.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.00.59 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-002.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.00 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-003.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.00 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-004.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.01 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-005.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.01 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-006.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.02 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-007.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.02 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-008.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.03 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-009.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.03 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-010.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.04 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-011.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.05 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-012.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.06 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-013.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.06 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-014.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.07 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-015.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.07 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-016.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.08 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-017.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.09 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-018.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.09 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-019.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.10 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-020.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.10 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-021.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.11 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-022.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.12 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-023.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.12 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-024.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.13 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-025.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.13 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-026.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.14 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-027.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.14 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-028.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.15 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-029.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.15 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-030.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.16 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-031.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.16 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-032.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.17 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-033.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.17 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-034.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.18 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-035.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.18 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-036.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.19 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-037.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.19 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-038.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.30 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-039.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.31 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-040.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.31 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-041.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.31 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-042.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.32 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-043.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.01.32 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-044.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.06 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-045.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.06 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-046.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.06 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-047.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.07 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-048.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.07 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-049.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.08 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-050.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.08 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-051.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.08 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-052.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.09 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-053.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.09 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-054.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.09 PM.jpeg" },
      { kind: "image", src: asset("images/projects/greater-infra-villa-project/image-055.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.10 PM.jpeg" }
    ],
  },
  {
    id: 4,
    slug: "yashoda-villa-site",
    title: "Yashoda Villa Site Survey",
    client: "Yashoda Infra Developers",
    location: "Location not specified in supplied folder",
    type: "Residential / Construction",
    status: "FIELDWORK",
    year: "2026",
    description: "Complete client-supplied image and video library from the Yashoda villa site showing foundations, columns, structural construction stages and field progress.",
    scope: "Villa-site construction survey and layout support represented by the supplied photographs and video.",
    equipment: "Survey activity and construction progress are represented by the supplied media; exact equipment model is not consistently visible.",
    sourceAlbum: "yashoda villa site",
    image: asset("images/projects/yashoda-villa-site/image-001.jpg"),
    media: [
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-001.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.32 PM.jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-002.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.33 PM.jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-003.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.34 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-004.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.34 PM.jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-005.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.35 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-006.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.35 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-007.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.35 PM (3).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-008.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.35 PM.jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-009.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.36 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-010.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.36 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-011.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.36 PM.jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-012.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.37 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-013.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.37 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-014.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.37 PM.jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-015.jpg"), originalName: "WhatsApp Image 2026-10-31 at 8.38.38 PM.jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-016.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.00 PM (3).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-017.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.01 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-018.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.01 PM (3).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-019.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.02 PM (1).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-020.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.02 PM (2).jpeg" },
      { kind: "image", src: asset("images/projects/yashoda-villa-site/image-021.jpg"), originalName: "WhatsApp Image 2026-10-31 at 9.02.02 PM (3).jpeg" },
      { kind: "video", src: asset("images/projects/yashoda-villa-site/video-01.mp4"), poster: asset("images/projects/yashoda-villa-site/video-01-poster.webp"), originalName: "WhatsApp Video 2026-11-01 at 5.07.09 PM.mp4" }
    ],
  }
];
