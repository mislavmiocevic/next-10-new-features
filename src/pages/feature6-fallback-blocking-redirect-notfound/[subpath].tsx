import Link from 'next/link';
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
		// fallback: 'blocking',
	};
};

export const getStaticProps = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return {
		// notFound: true,
		// redirect: {
		// 	destination: '/hello-there',
		// 	permanent: false,
		// },
		// revalidate: 1, // seconds
		props: {},
	};
};

const Page = () => {
	const router = useRouter();

	if (router.isFallback) {
		return <div style={{ fontSize: '80px', padding: '24px' }}>Wait!!!!</div>;
	}

	return (
		<div className="page-container">
			<h1>Feature #6: fallback blocking, redirect and notFound in data fetchers</h1>

			<div style={{ marginBottom: '32px', fontSize: '100px', color: 'blue' }}>Do you see me?</div>

			<Link href="/feature6-fallback-blocking-redirect-notfound">Return</Link>
		</div>
	);
};

export default Page;
