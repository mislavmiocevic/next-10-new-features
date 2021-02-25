import { NextWebVitalsMetric } from 'next/app';

import 'styles/globals.css';
import 'react-datepicker/dist/react-datepicker.css';

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
	console.log(metric);
	// console.log(window.location.href);
};

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
