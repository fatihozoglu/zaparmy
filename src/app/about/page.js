import PageTitle from '@/components/PageTitle';
import PageSubtitle from '@/components/PageSubtitle';
import PersonCard from '@/components/PersonCard';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Levent Çağlar",
    title: "SAP EWM Solution Architect | Co-Founder",
    description: "15+ years of experience in SAP implementations across multiple industries. Expert in SAP S/4HANA transformations.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGg2AqoW4FKNg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665513722627?e=1741219200&v=beta&t=7UyT-TL7u-qhPlJ_sJCCUyKSvU-1WGnK7Uv2oL89FAw"
  },
  {
    name: "Mert Akan",
    title: "SAP EWM Expert | Co-Founder",
    description: "Specialized in SAP ABAP development and technical architecture. Leading complex integration projects.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGF4lgeIl9xVA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662059928533?e=1741219200&v=beta&t=5hKN5l_1J1BAzBcyMQV0X-nEMoHx1tPGJhT0EPmjBkc"
  },
  {
    name: "Oltan Terzi",
    title: "SAP ABAP Developer",
    description: "Expert in SAP FI/CO modules with deep knowledge of financial processes and regulatory requirements.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQEC7bMqfUJ7Pg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1571689590064?e=1741219200&v=beta&t=hOBHaYy07Wemt3qqvPkzSMTiHvmdgcOf2OyxxPf9lds"
  },
  {
    name: "Hidanur Başak Göntürk",
    title: "Senior EWM Consultant",
    description: "PMP certified with extensive experience in managing large-scale SAP implementations.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFLHfqq6FNugA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1590005966803?e=1741219200&v=beta&t=_DvexdLl5sDQDuYwxJ2y7pW5iInNQ2UJPUevrRwZKRs"
  },
  {
    name: "Senem Gündoğdu Çağlar",
    title: "SAP Senior MM Consultant",
    description: "Specialized in Sales and Distribution processes with focus on customer experience optimization.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5603AQGWvBjQWqP9MA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1532961668504?e=1741219200&v=beta&t=0_hVMWBff94xdk3IVGL1Usu5J6wcbYqoQGuhbxMupEI"
  },
  {
    name: "Kaan Alperen Özen",
    title: "Senior SAP MM Consultant",
    description: "Expert in Materials Management and procurement processes. Specialized in supply chain optimization.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQEPgkpajJjU6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1595858148267?e=1741219200&v=beta&t=x--z7o_36apH2IwAkEeMjPQ_om_Bh9mCjzUgM8eMAo8"
  }
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <PageTitle>Hakkımızda</PageTitle>
      
      <div className="relative h-[300px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Modern office building"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Vizyonumuz</h1>
            <p className="max-w-2xl mx-auto text-lg">
              SAP çözümleriyle işletmelerin dijital dönüşüm yolculuğunda güvenilir bir partner olmak
            </p>
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
            alt="Innovation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <h3 className="text-white text-xl font-medium">İnovasyon</h3>
          </div>
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
            alt="Expertise"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <h3 className="text-white text-xl font-medium">Uzmanlık</h3>
          </div>
        </div>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
            alt="Teamwork"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <h3 className="text-white text-xl font-medium">Takım Çalışması</h3>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <PageSubtitle>Biz Kimiz?</PageSubtitle>
        <p className="text-gray-600 mb-6 text-justify">
            ZAPARMY, yenilikçi çözümler geliştiren deneyimli ve yetenekli mühendislerden oluşan dinamik bir ekiptir. Her ölçekteki işletmeye sunduğumuz yenilikçi çözümler ve özelleştirilmiş hizmetlerle sektörde öncü bir konuma sahibiz. Teknoloji ve uzmanlığın işletmeleri sürdürülebilir başarıya ulaştıracağına olan inancımızla, SAP ekosistemi içerisinde Procure to Pay (P2P), Internal Logistics (IL) ve Order to Cash (O2C) alanlarında kapsamlı lojistik hizmetler sunmaktayız. Sürekli öğrenme ve gelişim odaklı yaklaşımımızla, müşterilerimizle uzun vadeli iş birlikleri kurmayı hedefliyoruz.
        </p>
      </div>

      {/* Team Section */}
      <PageSubtitle>Ekibimiz</PageSubtitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <PersonCard
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
    </main>
  );
} 