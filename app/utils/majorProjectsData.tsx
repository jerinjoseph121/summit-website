import MajorProjectImg1 from '@/public/majorProjectImages/major_project_1.webp'
import MajorProjectImg2 from '@/public/majorProjectImages/major_project_2.webp'
import MajorProjectImg3 from '@/public/majorProjectImages/major_project_3.webp'
import MajorProjectImg4 from '@/public/majorProjectImages/major_project_4.webp'
import { StaticImageData } from 'next/image';


interface installationProps {
  description?: string;
  installationItems: string[]
}

export interface scopeOfWorkProps {
  electricalInstallation?: installationProps;
  mechanicalInstallation?: installationProps;
  elvInstallation?: installationProps;
  cathodicProtectionInstallation?: installationProps;
}

interface majorProjectsDataProps {
  projectDescription: string;
  projectImage: StaticImageData;
  projectImageDescription: string;
  client: string;
  scopeOfWork: scopeOfWorkProps;
  projectValue: string;
  projectDuration: string;
}

export const majorProjectsData: majorProjectsDataProps[] = [
  {
    projectDescription: "Foreign Ministry Refurbishment Works",
    projectImage: MajorProjectImg1,
    projectImageDescription: "Foreign Ministry, Muscat",
    client: "Foreign Ministry",
    scopeOfWork: {
      electricalInstallation: {
        description: "Procurement, Installation, Testing & Commissioning of",
        installationItems: [
          "Transformer/11kV UG cable/terminations/415V form 4 Type 6 switchgear/SMDBs",
          "Lights/sockets/tray/trunking/power cables/instrument cables."
        ]
      },
      mechanicalInstallation: {
        description: "Procurement, Installation, Testing & Commissioning of",
        installationItems: [
          "Plumbing system"
        ]
      },
      elvInstallation: {
        description: "Procurement, Installation, Testing & Commissioning of",
        installationItems: [
          "Access control system/PA system/IT system",
          "Fire Alarm and Gas detection system"
        ]
      }
    },
    projectValue: "OMR 838,530.201/-",
    projectDuration: "2 years {2023-2024}"
  },
  {
    projectDescription: "Liwa Plastics EPC Building MEP works",
    projectImage: MajorProjectImg2,
    projectImageDescription: "Liwa Plastics Industrial Complex, Sohar",
    client: "OQ",
    scopeOfWork: {
      electricalInstallation: {
        installationItems: [
          "Lights/sockets/tray/trunking/power cables/instrument cables."
        ]
      },
      mechanicalInstallation: {
        installationItems: [
          "HVAC system",
          "Plumbing system"
        ]
      },
      cathodicProtectionInstallation: {
        installationItems: [
          "CP installation for UG piping/Tanks etc",
          "Installation of CP equipment {Transformers/JBs etc}"
        ]
      }
    },
    projectValue: "OMR 852,257.495/-",
    projectDuration: "2 years {2018-2020}"
  },
  {
    projectDescription: "Integrated HSE Building MEP works",
    projectImage: MajorProjectImg3,
    projectImageDescription: "Integrated HSE Building, Sohar",
    client: "OQ",
    scopeOfWork: {
      electricalInstallation: {
        description: "Procurement, Installation, Testing & Commissioning of",
        installationItems: [
          "Transformer/11kV UG cable/terminations/415V form 4 Type 6 switchgear/SMDBs",
          "Lights/sockets/tray/trunking/power cables/instrument cables."
        ]
      },
      mechanicalInstallation: {
        description: "Procurement, Installation, Testing & Commissioning of",
        installationItems: [
          "Plumbing system",
          "Fire Protection system: Sprinkler system/FHR",
          "Fire suppression system: Novec & Vesda"
        ]
      },
      elvInstallation: {
        description: "Procurement, Installation, Testing & Commissioning of",
        installationItems: [
          "Access control system/PA system/IT system",
          "Fire Alarm and Gas detection system"
        ]
      }
    },
    projectValue: "OMR 439,463.430/-",
    projectDuration: "12 months {2019-2020}"
  },
  {
    projectDescription: "Duqum Refinery EPC 1 Package 1 & 2",
    projectImage: MajorProjectImg4,
    projectImageDescription: "Duqum Refinery EPC 1, Duqum",
    client: "OQ",
    scopeOfWork: {
      electricalInstallation: {
        installationItems: [
          "Installation of earthing and lightning protection system",
          "Installation of lighting and power in substation buildings"
        ]
      },
      mechanicalInstallation: {
        installationItems: [
          "Underground HDPE piping works",
          "Fire Protection system device installation",
          "Steam tracing piping installation"
        ]
      }
    },
    projectValue: "OMR 555,713.228/-",
    projectDuration: "3 years {2019-2022}"
  }
]
