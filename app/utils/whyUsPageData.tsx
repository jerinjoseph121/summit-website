import { baseContentProps } from './commonData'

interface ourVisionDataProps extends baseContentProps {
  subHeading: string;
  data: string[];
}
interface whyChooseUsDataProps {
  heading: string;
  data: baseContentProps[];
}

export const ourMissionData: baseContentProps = {
  heading: "Our Mission",
  description: "In a perfect world, things wouldn’t break down. Until then, it is our mission to respond with urgency, expertise and professionalism to minimize the length and frequency of downtime. We are committed to a high quality of workmanship and provide a safe work environment on all projects. We know that people do business with companies that meet their needs and provide reliable service. We attribute our success to building strategic partnerships and treating customers the way we want to be treated. We believe the quality in our work will represent us for years to come."
}

export const ourVisionData: ourVisionDataProps = {
  heading: "Our Vision",
  description: "Summit Engineering and Technology’s corporate vision is “to become the world’s premier digital industrial company, Transforming industry with software-defined machines and solutions that are connected, responsive and predictive.” In addition to this corporate vision statement, GE specifies that these machines and solutions are for “executing critical outcomes for our customers.” The company caters to the needs of a diverse population of customers. For example, customers in the oil and gas, aerospace/aviation, healthcare, power, transportation, and electric lighting industries are considered.",
  subHeading: "The following components are most notable in Summit Engineering and Technology vision statement:",
  data: [
    "To become the world’s premier digital industrial company",
    "Transforming industry with software-defined machines and solutions that are connected, responsive and predictive",
    "Executing critical outcomes for our customers"
  ]
}

export const whyChooseUsData: whyChooseUsDataProps = {
  heading: "Why choose us?",
  data: [
    {
      heading: "Proven Track Record",
      description: "We have successfully completed many projects, demonstrating our expertise and reliability in the industry."
    },
    {
      heading: "Skilled Team",
      description: "Our team of qualified engineers, technicians, and project managers are dedicated to delivering projects on time and within budget."
    },
    {
      heading: "Commitment to Sustainability",
      description: "We prioritize environmentally-friendly solutions, integrating energy-efficient technologies into our MEP systems."
    }
  ]
}