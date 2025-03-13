interface imageProps {
  label: string;
}

interface teamMembersDataProp {
  name: string;
  position: string;
  description: string;
  image: imageProps;
}

export const teamMembersData: teamMembersDataProp[] = [
  {
    name: "Benny Joseph",
    position: "General Manager",
    description: "Summit Engineering & Technology was established by Mr. Benny Joseph in the year 2012. With a B-Tech in Electrical Engineering and over 30 years’ experience out of which almost 24 years in Muscat. He has handled various responsibilities which includes but is not limited to Company registration with DCRP, Water dept. etc. for carrying out Electrical & Water supply works and prequalification for various projects. Project design, materials and drawings approval and supervision of all Electro mechanical works for all types of building and 11kV substation projects. Project Estimation & Costing for various Electro-Mechanical & 11 KV Substation projects. Project negotiations, presentations etc. and finalization of Projects. Project allocation to engineers and monitoring their progresses. Project co-ordination and supervision including liaising with Clients. Project Planning, Execution, Billing, Project costing & Budgetary Control. Project reporting and various management information report regarding project status/ progress and market survey / information. Manpower recruitment and management. Material procurement and management. Complete project execution, Testing, commissioning and after support. Project safety documentation and updating. Project evaluation and competitor analysis plan.",
    image: {
      label: "BJ"
    }
  },
  {
    name: "Devasahayam Cabah Naphthali",
    position: "AGM (Projects)",
    description: "Equipped with a BE in Mechanical Engineering with 20+ year of experience and he joined the Summit Team in 2024. He has Strong knowledge in Construction, Engineering, Contract, procurement, estimation, execution, managing manpower & engineers for installation and execution of Construction works. Involved in Setting up our company for the approvals of the PDO and OQ registration of our company, well versed in all requirement of standards set up by PDO with respect to HSE and QC & management Certified for EST (Electrical safety training) Have strong knowledge in QC procedure with respect the supply of the materials & installation works and its requirement as per ISO standards Have attend various HSE training (Hot, cold, confined, work at height etc). He Have strong knowledge in fire & safety, well versed in NFPA & Local ROP requirement. He is handled a value of 8 million Omani riyal project also he is Efficient in handling a team of 300 + and executing the site work as per HSE and QC requirements & HO STAFF Ever since he has been executing all the Electrical Works, preparing materials, Supervising Foremen and Electricians. He also interacts with site engineer, project manager, clients and consultants, Co-ordinates with sub-contractors and follows up with site work progress and last but not the least handles Quality Control.",
    image: {
      label: "DCN"
    }
  }
]