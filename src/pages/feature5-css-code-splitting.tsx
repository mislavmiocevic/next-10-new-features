import Link from 'next/link';

import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';

const Page = () => {
	return (
		<div className="page-container">
			<div className="navigation">
				<div>
					<Link href="/feature4-nextjs-analytics">
						<a>Back to Feature #4</a>
					</Link>
				</div>
				<div>
					<Link href="/feature6-fallback-blocking-redirect-notfound">
						<a>Next to Feature #6</a>
					</Link>
				</div>
			</div>
			<h1>Feature #5: CSS Code Splitting</h1>

			<DatePicker />
		</div>
	);
};

export default Page;
