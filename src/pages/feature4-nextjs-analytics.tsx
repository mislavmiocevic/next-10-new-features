import Link from 'next/link';
import Image from 'next/image';

import { usePresentationList } from 'usePresentationList';

const metrics = [
	'Time to First Byte (TTFB)',
	'First Contentful Paint (FCP)',
	'Largest Contentful Paing (LCP)',
	'First Input Delay (FID)',
	'Cumulative Layout Shift (FID)',
	'Next.js-hydration',
	'Next.js-route-change-to-render',
	'Next.js-render',
];

const Page = () => {
	const { presentationList } = usePresentationList(metrics);

	return (
		<div className="page-container">
			<div className="navigation">
				<div>
					<Link href="/feature3-internationalized-routing">
						<a>Back to Feature #3</a>
					</Link>
				</div>
				<div>
					<Link href="/feature5-css-code-splitting">
						<a>Next to Feature #5</a>
					</Link>
				</div>
			</div>
			<h1>Feature #4: Next.js Analytics</h1>

			<div style={{ marginBottom: '16px' }}>
				<a href="https://www.virendrachandak.com/techtalk/web-vitals-metrics/">
					https://www.virendrachandak.com/techtalk/web-vitals-metrics/
				</a>
			</div>

			<div style={{ marginBottom: '32px' }}>
				<a href="https://github.com/GoogleChrome/web-vitals">https://github.com/GoogleChrome/web-vitals</a>
			</div>

			{presentationList}

			{/*<Image width="1200" height="720" src="/image1.jpg" unoptimized={true} quality={100} />*/}
		</div>
	);
};

export default Page;
