import Link from 'next/link';
import { useRouter } from 'next/router';

const Page = () => {
	const router = useRouter();

	return (
		<div className="page-container">
			<h1>Feature #1: Automatic resolving of href - {router.asPath.split('/')[2]}</h1>

			<Link href="/feature1-automatic-resolving-of-href">Return</Link>
		</div>
	);
};

export default Page;
