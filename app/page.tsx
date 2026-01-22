import { Project as ProjectType, Service as ServiceType } from '@/types';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedWork from '@/components/FeaturedWork';
import ContactSection from '@/components/ContactSection';

// Mock data to display immediately
const mockProjects: ProjectType[] = [
  {
    _id: '1',
    title: 'Brand Redesign Portal',
    description: 'Complete redesign of brand identity and digital presence for a Fortune 500 company.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    tags: ['Branding', 'Web Design', 'UI/UX'],
    link: '#',
    featured: true,
  },
  {
    _id: '2',
    title: 'E-commerce Platform',
    description: 'High-performance e-commerce platform built with Next.js and Shopify integration.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
    tags: ['Next.js', 'Shopify', 'Frontend'],
    link: '#',
    featured: true,
  },
  {
    _id: '3',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization for B2B SaaS platform.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    tags: ['React', 'Data Viz', 'Backend'],
    link: '#',
    featured: false,
  },
  {
    _id: '4',
    title: 'Mobile App Design',
    description: 'Native iOS app design and development for fitness tracking application.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
    tags: ['iOS', 'Mobile', 'Design'],
    link: '#',
    featured: false,
  },
  {
    _id: '5',
    title: 'AI Content Platform',
    description: 'Full-stack AI-powered content management and generation platform.',
    image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?w=1200&h=800&fit=crop',
    tags: ['AI', 'Backend', 'Full Stack'],
    link: '#',
    featured: false,
  },
];

const mockServices: ServiceType[] = [
  {
    _id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like Next.js, React, and Node.js.',
    iconName: 'Code',
    priceRange: 'Custom Quote',
  },
  {
    _id: '2',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that convert visitors into customers with a focus on user experience.',
    iconName: 'Palette',
    priceRange: '$5,000 - $15,000',
  },
  {
    _id: '3',
    title: 'Mobile Development',
    description: 'Native iOS and Android apps designed and developed to deliver exceptional user experiences.',
    iconName: 'Smartphone',
    priceRange: '$10,000 - $50,000',
  },
  {
    _id: '4',
    title: 'Web Performance',
    description: 'Optimization services to make your website faster, more secure, and more reliable.',
    iconName: 'Zap',
    priceRange: '$2,000 - $8,000',
  },
  {
    _id: '5',
    title: 'Digital Strategy',
    description: 'Strategic consulting to align your digital initiatives with business goals and market opportunities.',
    iconName: 'BarChart3',
    priceRange: '$3,000 - $10,000',
  },
  {
    _id: '6',
    title: 'Team Augmentation',
    description: 'Scale your team with dedicated developers, designers, and consultants on-demand.',
    iconName: 'Users',
    priceRange: 'Custom Quote',
  },
];

// Async function to fetch data from database without blocking render
async function fetchDataOptimized() {
  try {
    const { default: connectDB } = await import('@/lib/db');
    const { default: ProjectModel } = await import('@/models/Project');
    const { default: ServiceModel } = await import('@/models/Service');

    await connectDB();

    const [dbProjects, dbServices] = await Promise.all([
      ProjectModel.find({}).sort({ featured: -1, createdAt: -1 }).lean().catch(() => null),
      ServiceModel.find({}).lean().catch(() => null),
    ]);

    return {
      projects: (dbProjects && dbProjects.length > 0) ? (dbProjects as ProjectType[]) : mockProjects,
      services: (dbServices && dbServices.length > 0) ? (dbServices as ServiceType[]) : mockServices,
    };
  } catch (error) {
    console.error('Failed to fetch from database, using mock data:', error);
    return {
      projects: mockProjects,
      services: mockServices,
    };
  }
}

export default async function Home() {
  const { projects, services } = await fetchDataOptimized();

  return (
    <>
      <Hero />
      <ServicesGrid services={services} />
      <FeaturedWork projects={projects} />
      <ContactSection />
    </>
  );
}
