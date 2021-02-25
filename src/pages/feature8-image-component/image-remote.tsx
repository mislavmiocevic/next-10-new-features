import Link from 'next/link';
import Image from 'next/image';

const imagesSrc = [
	'https://photos.infinum.com/store/4db5ce1a94d11ea5a2657829eb9cf788.png',
	'https://photos.infinum.com/store/5d0c2625b05e93fa24c59d6dac3d61e3.png',
	'https://photos.infinum.com/store/6ea45d7841ac57060cf210c3b20038d9.jpg',
	'https://photos.infinum.com/store/28fcc652f9c6520995b4c21d814ba501.jpg',
	'https://photos.infinum.com/store/ad8eb2402fb349d94c0376b5b04ffed7.png',
	'https://photos.infinum.com/store/59ee3c288dcf7a7bae06f9a2ad6d078b.jpg',
	'https://photos.infinum.com/store/d4d01d56c18bf718cae57fe62041ad65.png',
	'https://photos.infinum.com/store/a2f88e996aff715bf7a846f2205c90c8.jpg',
	'https://photos.infinum.com/store/9a3fbfb0e38becd06661b31ad3d33e03.jpg',
	'https://photos.infinum.com/store/edcca8543105e5c7f9f9704793bb0370.jpg',
];

const Page = () => {
	const images = [];

	for (let i = 0; i < 10; i++) {
		images.push(
			<div key={i} style={{ marginBottom: '64px' }}>
				<Image src={imagesSrc[i]} width={1000} height={800} />
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
