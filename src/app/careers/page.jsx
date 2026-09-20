import React from 'react';
import Link from 'next/link';
import { careersList } from '../career';
import { HiArrowRight } from 'react-icons/hi2';
import InArticleAd from '@/components/InArticleAd';

const getDifficultyColor = (difficulty) => {
	switch (difficulty) {
		case 'Easy':
			return 'bg-green-100 text-green-800';
		case 'Medium':
			return 'bg-yellow-100 text-yellow-800';
		case 'Hard':
			return 'bg-red-100 text-red-800';
		default:
			return 'bg-gray-100 text-gray-800';
	}
};

const getCategoryColor = (category) => {
	const colors = {
		Government: 'bg-blue-100 text-blue-800',
		Aviation: 'bg-sky-100 text-sky-800',
		Technology: 'bg-purple-100 text-purple-800',
		Healthcare: 'bg-green-100 text-green-800',
		Finance: 'bg-orange-100 text-orange-800',
		Defense: 'bg-red-100 text-red-800',
		Legal: 'bg-indigo-100 text-indigo-800',
	};

	return colors[category] || 'bg-gray-100 text-gray-800';
};

export const metadata = {
	title: 'All Careers in India | Zero2Career',
	description:
		'Browse Zero2Career career guides with eligibility, roadmap, and skill requirements across technology, government, healthcare, finance, and creative fields.',
	alternates: {
		canonical: 'https://zero2career.in/careers',
	},
};

export default function CareersPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pb-16 pt-6">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
						All <span className="text-blue-600">Careers</span>
					</h2>
					<p className="mx-auto max-w-3xl text-xl text-gray-600">
						Explore detailed guides for every major career in India. Click any
						career to see the full path, eligibility, and success tips.
					</p>
				</div>

				<div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{careersList.map((career, index) => (
						<React.Fragment key={`${career.id}-${career.link}`}>
							<Link
								href={career.link}
								className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
							>
								<div className="relative h-40 overflow-hidden">
									<img
										src={career.image}
										alt={career.title}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div
										className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow ${getCategoryColor(career.category)}`}
									>
										{career.category}
									</div>
								</div>

								<div className="flex flex-1 flex-col justify-between p-5">
									<h3 className="mb-2 text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
										{career.title}
									</h3>
									<p className="mb-4 line-clamp-2 text-sm text-gray-600">
										{career.description}
									</p>

									<div className="mb-4 flex items-center justify-between">
										<span
											className={`rounded-full px-2 py-1 text-xs font-semibold ${getDifficultyColor(career.difficulty)}`}
										>
											{career.difficulty}
										</span>
										<span className="text-xs font-medium text-gray-500">
											{career.duration}
										</span>
									</div>

									<span className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2 font-semibold text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
										Explore More
										<HiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
									</span>
								</div>
							</Link>

							{index === 4 ? <InArticleAd /> : null}
						</React.Fragment>
					))}
				</div>
			</div>
		</main>
	);
}
