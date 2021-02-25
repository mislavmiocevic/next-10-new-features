import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
	return (
		<div className="page-container">
			<div className="navigation">
				<div>
					<Link href="/feature1-automatic-resolving-of-href">
						<a>Back to Feature #1</a>
					</Link>
				</div>
				<div>
					<Link href="/feature3-internationalized-routing">
						<a>Next to Feature #3</a>
					</Link>
				</div>
			</div>
			<h1>Feature #2: Next.js Commerce</h1>

			<div style={{ marginBottom: '32px' }}>
				<a href="https://github.com/vercel/commerce" target="_blank">
					https://github.com/vercel/commerce
				</a>
			</div>

			<div className="iframe-container">
				<iframe width="1440" height="700" src="https://demo.vercel.store/" />
			</div>
		</div>
	);
};

export default Page;
