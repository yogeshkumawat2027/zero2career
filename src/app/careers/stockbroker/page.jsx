import { buildCareerMetadata } from '@/utils/careerSeo';
import { CareerGuideTemplate } from '@/components/CareerPageTemplate';
import { getThinCareerGuide } from '@/data/thinCareerGuides';

const careerData = getThinCareerGuide('stockbroker');

export const metadata = buildCareerMetadata({
  title: careerData.title,
  slug: careerData.slug,
  description: careerData.title + ' career guide covering responsibilities, eligibility, roadmap, skills, courses, exam direction, and practical growth options in India.',
});

export default function CareerPage() {
  return <CareerGuideTemplate data={careerData} />;
}

