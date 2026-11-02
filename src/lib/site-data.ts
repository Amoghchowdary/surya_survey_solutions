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
  gallery: string[];
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
    description: "Client-supplied project media from the Amaravati site showing field surveying, construction progress, Total Station observations and site documentation.",
    scope: "Construction-site measurement, field observation and survey documentation visible in the supplied media.",
    equipment: "Total Station visible in supplied project media.",
    sourceAlbum: "Amaravati site",
    image: asset("images/projects/amaravati-site/project-01.webp"),
    gallery: [
      asset("images/projects/amaravati-site/project-01.webp"),
      asset("images/projects/amaravati-site/project-02.webp"),
      asset("images/projects/amaravati-site/project-03.webp"),
      asset("images/projects/amaravati-site/project-04.webp"),
      asset("images/projects/amaravati-site/project-05.webp"),
      asset("images/projects/amaravati-site/project-06.webp"),
      asset("images/projects/amaravati-site/project-07.webp"),
      asset("images/projects/amaravati-site/project-08.webp"),
      asset("images/projects/amaravati-site/project-09.webp"),
      asset("images/projects/amaravati-site/project-10.webp"),
      asset("images/projects/amaravati-site/project-11.webp"),
      asset("images/projects/amaravati-site/project-12.webp")
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
    description: "Field evidence supplied for the Bheemaa Amaravati GAD Tower assignment, including Total Station setups, industrial construction activity and technical site documentation.",
    scope: "Industrial construction surveying and measurement work visible in the supplied project album.",
    equipment: "Total Station visible throughout the supplied project media.",
    sourceAlbum: "bheema amaravati Gad tower",
    image: asset("images/projects/bheemaa-amaravati-gad-tower/project-01.webp"),
    gallery: [
      asset("images/projects/bheemaa-amaravati-gad-tower/project-01.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-02.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-03.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-04.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-05.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-06.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-07.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-08.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-09.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-10.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-11.webp"),
      asset("images/projects/bheemaa-amaravati-gad-tower/project-12.webp")
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
    description: "Client-supplied field photographs documenting surveying activity across a villa/residential construction project, including foundations, structural work and Total Station setups.",
    scope: "Residential construction surveying, layout observation and field measurement visible in the supplied project media.",
    equipment: "Total Station visible in supplied project media.",
    sourceAlbum: "greater infra villa project",
    image: asset("images/projects/greater-infra-villa-project/project-01.webp"),
    gallery: [
      asset("images/projects/greater-infra-villa-project/project-01.webp"),
      asset("images/projects/greater-infra-villa-project/project-02.webp"),
      asset("images/projects/greater-infra-villa-project/project-03.webp"),
      asset("images/projects/greater-infra-villa-project/project-04.webp"),
      asset("images/projects/greater-infra-villa-project/project-05.webp"),
      asset("images/projects/greater-infra-villa-project/project-06.webp"),
      asset("images/projects/greater-infra-villa-project/project-07.webp"),
      asset("images/projects/greater-infra-villa-project/project-08.webp"),
      asset("images/projects/greater-infra-villa-project/project-09.webp"),
      asset("images/projects/greater-infra-villa-project/project-10.webp"),
      asset("images/projects/greater-infra-villa-project/project-11.webp"),
      asset("images/projects/greater-infra-villa-project/project-12.webp"),
      asset("images/projects/greater-infra-villa-project/project-13.webp"),
      asset("images/projects/greater-infra-villa-project/project-14.webp"),
      asset("images/projects/greater-infra-villa-project/project-15.webp")
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
    description: "Client-supplied progress photographs from the Yashoda villa site showing foundations, columns and structural construction stages relevant to surveying and layout support.",
    scope: "Villa-site construction survey and layout support represented by the supplied project photographs.",
    equipment: "Exact equipment model is not consistently visible in the selected project photographs.",
    sourceAlbum: "yashoda villa site",
    image: asset("images/projects/yashoda-villa-site/project-01.webp"),
    gallery: [
      asset("images/projects/yashoda-villa-site/project-01.webp"),
      asset("images/projects/yashoda-villa-site/project-02.webp"),
      asset("images/projects/yashoda-villa-site/project-03.webp"),
      asset("images/projects/yashoda-villa-site/project-04.webp"),
      asset("images/projects/yashoda-villa-site/project-05.webp"),
      asset("images/projects/yashoda-villa-site/project-06.webp"),
      asset("images/projects/yashoda-villa-site/project-07.webp"),
      asset("images/projects/yashoda-villa-site/project-08.webp"),
      asset("images/projects/yashoda-villa-site/project-09.webp")
    ],
  },
];
