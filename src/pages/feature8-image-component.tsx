import Link from 'next/link';
import Image from 'next/image';

const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod ultricies nibh blandit mattis. Duis
mollis sagittis lectus, eu pellentesque libero semper eu. Vivamus id rutrum dolor, eget iaculis ante. Mauris
varius facilisis felis pellentesque tempor. Curabitur euismod quam sed tellus dictum, non sagittis ipsum
convallis. Integer et mauris vulputate, varius neque vel, placerat purus. Ut placerat est purus, vel tincidunt
massa lacinia nec. Nulla accumsan, arcu sed tincidunt faucibus, ipsum justo posuere urna, et blandit purus
odio non magna. Morbi porttitor est a fermentum imperdiet. Mauris vitae convallis sem. Aenean ac risus erat.
	Nullam pharetra id risus nec tristique.`;

const Page = () => {
	return (
		<div className="page-container" style={{ overflow: 'hidden' }}>
			<div className="navigation">
				<div>
					<Link href="/feature7-next-codemod-cli">
						<a>Back to Feature #7</a>
					</Link>
				</div>
				<div>
					<Link href="/?loop">
						<a>Back to index</a>
					</Link>
				</div>
			</div>
			<h1>Feature #8: Image Component</h1>

			<a
				style={{ marginBottom: '64px', display: 'block' }}
				href="https://github.com/vercel/next.js/blob/master/packages/next/client/image.tsx"
			>
				https://github.com/vercel/next.js/blob/master/packages/next/client/image.tsx
			</a>

			<div style={{ marginBottom: '32px' }}>
				<Link href="/feature8-image-component/native-local">
					<a>Native local</a>
				</Link>
			</div>
			<div style={{ marginBottom: '32px' }}>
				<Link href="/feature8-image-component/image-local">
					<a>Image local</a>
				</Link>
			</div>
			<div style={{ marginBottom: '32px' }}>
				<Link href="/feature8-image-component/native-and-image-local">
					<a>Native and Image local</a>
				</Link>
			</div>
			<div style={{ marginBottom: '32px' }}>
				<Link href="/feature8-image-component/native-remote">
					<a>Native remote</a>
				</Link>
			</div>
			<div style={{ marginBottom: '32px' }}>
				<Link href="/feature8-image-component/image-remote">
					<a>Image remote</a>
				</Link>
			</div>
			<div style={{ marginBottom: '32px' }}>
				<Link href="/feature8-image-component/native-and-image-remote">
					<a>Native and Image remote</a>
				</Link>
			</div>

			<h2>Intrinsic</h2>
			<Image src="/image1.jpg" width="1200" height="720" />

			<h2>Fixed</h2>
			<Image layout="fixed" src="/image2.jpg" width="1200" height="720" />

			<h2>Responsive</h2>
			<Image layout="responsive" src="/image3.jpg" width="1200" height="720" />

			<h2>Fill</h2>
			<div style={{ position: 'relative', width: '100%', height: '500px' }}>
				<Image layout="fill" src="/image4.jpg" />
			</div>

			<h2>Background image</h2>
			<div style={{ position: 'relative' }}>
				<div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1, top: 0 }}>
					<Image layout="fill" src="/image5.jpg" objectFit="cover" />
				</div>

				<p>{loremText}</p>
				<p>{loremText}</p>
				<p>{loremText}</p>
			</div>
		</div>
	);
};

export default Page;
