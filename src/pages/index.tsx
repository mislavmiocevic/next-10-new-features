import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { usePresentationList } from 'usePresentationList';

const features = [
	'Automatic resolving of `href`',
	'Next.js Commerce',
	'Internationalized Routing',
	'Next.js Analytics',
	'CSS Code Splitting',
	'fallback blocking, redirect and notFound in data fetchers',
	'@next/codemod CLI',
	'Image Component',
	'',
];

const Page = () => {
	const router = useRouter();
	const { presentationList, presentationListEnd } = usePresentationList(features);

	return (
		<div className="page-container">
			{router.asPath.includes('loop') && (
				<div className="navigation">
					<div>
						<Link href="/feature8-image-component">
							<a>Back to Feature #8</a>
						</Link>
					</div>
					<div>
						<Link href="/feature1-automatic-resolving-of-href">
							<a>Next to Feature #1</a>
						</Link>
					</div>
				</div>
			)}
			<h1>Next.js 10 New Features!</h1>

			{presentationList}

			{presentationListEnd && (
				<Link href="/feature1-automatic-resolving-of-href">
					<a className="feature1-link">Click me to continue!</a>
				</Link>
			)}
		</div>
	);
};

export default Page;
