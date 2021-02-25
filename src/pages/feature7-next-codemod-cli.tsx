import Link from 'next/link';

import { usePresentationList } from 'usePresentationList';

const codemods = ['npx @next/codemod add-missing-react-import', 'npx @next/codemod name-default-component'];

const Page = () => {
	const { presentationList } = usePresentationList(codemods);

	return (
		<div className="page-container">
			<div className="navigation">
				<div>
					<Link href="/feature6-fallback-blocking-redirect-notfound">
						<a>Back to Feature #6</a>
					</Link>
				</div>
				<div>
					<Link href="/feature8-image-component">
						<a>Next to Feature #8</a>
					</Link>
				</div>
			</div>
			<h1>Feature #7: @next/codemod CLI</h1>

			<code style={{ fontSize: '32px', marginBottom: '32px' }}>npx @next/codemod &lt;transform&gt; &lt;?path&gt;</code>

			{presentationList}
		</div>
	);
};

export default Page;
