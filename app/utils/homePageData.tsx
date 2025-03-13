import { baseContentProps } from './commonData'
import SummitOfficeImage from '@/public/summit_office.webp'
import { StaticImageData } from 'next/image';

interface homeImageProps {
  image: StaticImageData,
  alt: string
}
interface ourCoreValuesDataProps extends baseContentProps {
  data: baseContentProps[];
}
interface servicesOfferedDataProps {
  heading: string;
  data: string[];
}

export const homeImage: homeImageProps = {
  image: SummitOfficeImage,
  alt: "Summit Office"
}

export const aboutUsData: baseContentProps = {
  heading: "About Us",
  description: "Summit Engineering & Technology LLC is a multi-service Company providing comprehensive MEP services for a diverse range of projects. From concept to completion, we specialize in designing, installing, and maintaining cutting-edge electrical, mechanical and plumbing systems that meet the highest industry standards. Summit Engineering & Technology was established in 2012 with a sole motive to break new grounds in its business domain and provide turnkey solutions to the customers in Oman. Our expertise particularly extends to 11kV/415V electrical works, showcasing a profound focus on high-voltage and low-voltage electrical systems, covering everything from the design and installation to the maintenance of these specific electrical components. Our commitment lies in consistently delivering top-tier solutions within this focused and specialized field."
}

export const ourCoreValuesData: ourCoreValuesDataProps = {
  heading: "Our Core Values",
  description: "At Summit Engineering & Technology LLC, our core values define our approach to business:",
  data: [
    {
      heading: "Excellence",
      description: "We strive for excellence in every aspect of our work, ensuring that our clients receive top-notch MEP solutions tailored to their unique needs."
    },
    {
      heading: "Innovation",
      description: "Embracing the latest technologies and industry trends, we continuously innovate to deliver state-of-the-art MEP systems that enhance efficiency and sustainability."
    },
    {
      heading: "Integrity",
      description: "Transparency, honesty, and integrity form the foundation of our interactions with clients, partners, and employees."
    },
    {
      heading: "Client-Centric",
      description: "We prioritize client satisfaction, working collaboratively to understand their goals and delivering solutions that exceed expectations."
    }
  ]
}

export const servicesOfferedData: servicesOfferedDataProps[] = [
  {
    heading: "Electrical Systems",
    data: [
      "Installation of 11kV Substations & its Civil works",
      "Installation of Transformers, RMUs, Feeder Pillars etc.",
      "Overhead Lines & U/G Cables LV & 11kV",
      "Electrical Service connections for all kinds of buildings & Installations",
      "Supply & installation of Street Lighting & Area Lighting.",
      "Electrical Design and Installation",
      "Lighting Solutions",
      "Power Distribution",
      "ELV systems"
    ]
  },
  {
    heading: "Mechanical Systems",
    data: [
      "HVAC Design and Installation",
      "Ventilation Systems",
      "Energy Management"
    ]
  },
  {
    heading: "Plumbing Systems",
    data: [
      "Plumbing Design and Installation",
      "Water and Waste Management",
      "Fire Protection Systems"
    ]
  }
]

export const areasOfOperationData: baseContentProps = {
  heading: "Areas of operation",
  description: "Summit Engineering & Technology LLC is currently operating from Al Khuwair in the Sultanate of Oman. The infrastructure, equipment, and personnel give us the advantage in maintaining continuity of services to our valued customers. Our deep industry knowledge enables us to provide, our customers with innovative ideas that help them improve quality and security. We deliver our commitments; we build strong relationships with our customers and win a strong place in the market. Our high quality, cost-effective services provide the optimal mix that, our customers demand."
}