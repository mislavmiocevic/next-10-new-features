import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
	return (
		<div className="page-container">
			<div className="navigation">
				<div>
					<Link href="/">
						<a>Back to index</a>
					</Link>
				</div>
				<div>
					<Link href="/feature2-nextjs-commerce">
						<a>Next to Feature #2</a>
					</Link>
				</div>
			</div>
			<h1>Feature #1: Automatic resolving of href</h1>

			<Link href="/feature1-automatic-resolving-of-href/subpage1">
				<a>Click me to go to dynamic page</a>
			</Link>
		</div>
	);
};

export default Page;
