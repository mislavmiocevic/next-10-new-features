import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
	const images = [];
	const images2 = [];

	for (let i = 1; i <= 10; i++) {
		images.push(
			<div key={i} style={{ marginBottom: '64px' }}>
				<img src={`/image${i}.jpg`} width={600} height={400} />
			</div>
		);
	}

	for (let i = 11; i <= 20; i++) {
		images2.push(
			<div key={i} style={{ marginBottom: '64px' }}>
				<Image src={`/image${i}.jpg`} width={600} height={400} />
			</div>
		);
	}

	return (
		<div className="page-container">
			<Link href="/feature8-image-component">
				<a style={{ marginBottom: '32px', display: 'block' }}>Back</a>
			</Link>

			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
				<div>
					<h2>Native</h2>
					{images}
				</div>
				<div>
					<h2>Image</h2>
					{images2}
				</div>
			</div>
		</div>
	);
};

export default Page;
