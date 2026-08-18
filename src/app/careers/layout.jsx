import CareerBreadcrumbs from '@/components/CareerBreadcrumbs';

export default function CareersLayout({ children }) {
  return (
    <>
      <CareerBreadcrumbs />
      {children}
    </>
  );
}
