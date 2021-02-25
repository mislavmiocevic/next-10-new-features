import Link from 'next/link';

const Page = () => {
	return (
		<div className="page-container">
			<div className="navigation">
				<div>
					<Link href="/feature5-css-code-splitting">
						<a>Back to Feature #5</a>
					</Link>
				</div>
				<div>
					<Link href="/feature7-next-codemod-cli">
						<a>Next to Feature #7</a>
					</Link>
				</div>
			</div>
			<h1>Feature #6: fallback blocking, redirect and notFound in data fetchers</h1>

			<div>
				<Link href="/feature6-fallback-blocking-redirect-notfound/subpath">
					<a>Go to subpage</a>
				</Link>
			</div>
		</div>
	);
};

export default Page;
