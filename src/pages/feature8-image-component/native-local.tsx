import Link from 'next/link';

const Page = () => {
	const images = [];

	for (let i = 1; i <= 10; i++) {
		images.push(
			<div key={i} style={{ marginBottom: '64px' }}>
				<img loading={'lazy'} src={`/image${i}.jpg`} width={1000} height={800} />
			</div>
		);
	}

	return (
		<div className="page-container">
			<Link href="/feature8-image-component">
				<a style={{ marginBottom: '32px', display: 'block' }}>Back</a>
			</Link>

			{images}
		</div>
	);
};

export default Page;
