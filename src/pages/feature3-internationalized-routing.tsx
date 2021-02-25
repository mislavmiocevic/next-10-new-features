import Link from 'next/link';

const Page = () => {
	return (
		<div className="page-container">
			<div className="navigation">
				<div>
					<Link href="/feature2-nextjs-commerce">
						<a>Back to Feature #2</a>
					</Link>
				</div>
				<div>
					<Link href="/feature4-nextjs-analytics">
						<a>Next to Feature #4</a>
					</Link>
				</div>
			</div>
			<h1>Feature #3: Internationalized Routing</h1>

			<div style={{ marginBottom: '16px' }}>
				<Link href="/feature3-internationalized-routing/subpath1" locale="en">
					<a>To /en</a>
				</Link>
			</div>

			<div style={{ marginBottom: '16px' }}>
				<Link href="/feature3-internationalized-routing/subpath1" locale="de">
					<a>To /de</a>
				</Link>
			</div>

			<div style={{ marginBottom: '16px' }}>
				<Link href="/feature3-internationalized-routing/subpath1" locale="hr">
					<a>To /hr</a>
				</Link>
			</div>

			<div style={{ marginBottom: '16px' }}>
				<Link href="/hr/feature3-internationalized-routing/subpath1" locale={false}>
					<a>To /hr as above link</a>
				</Link>
			</div>
		</div>
	);
};

export default Page;
