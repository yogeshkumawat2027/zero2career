'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function formatSegment(segment) {
  return segment
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function CareerBreadcrumbs() {
  const pathname = usePathname();

  if (!pathname?.startsWith('/careers')) {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const items = [{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers' }];

  if (segments.length > 1) {
    const slug = segments[1];
    items.push({ label: formatSegment(slug), href: `/careers/${slug}` });
  }

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pb-3 pt-24 text-sm text-slate-600 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-medium text-slate-900">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-blue-700">
                  {item.label}
                </Link>
              )}
              {!isLast ? <span>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
