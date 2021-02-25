import Link from 'next/link';
import { useRouter } from 'next/router';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps = (params) => {
	console.log(params);

	return {
		props: {},
	};
};

// export const getServerSideProps = (params) => {
// 	console.log(params);
//
// 	return {
// 		props: {},
// 	};
// };

const Page = () => {
	const router = useRouter();

	return (
		<div className="page-container">
			<h1>Feature #3: Internationalized Routing - {router.asPath.split('/')[2]}</h1>

			<div style={{ marginBottom: '32px' }}>
				<JSONPretty data={router} theme={JSONPrettyMon} />
			</div>

			<Link href="/feature3-internationalized-routing">Return</Link>
		</div>
	);
};

export default Page;
