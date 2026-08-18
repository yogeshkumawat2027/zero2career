import { redirect } from 'next/navigation';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://zero2career.in/careers',
  },
};

export default function DemoCareerPage() {
  redirect('/careers');
}
