import { useEffect, useState } from 'react';

export const usePresentationList = (list: string[]) => {
	const [lastVisibleListItemIndex, setLastVisibleListItemIndex] = useState(0);

	useEffect(() => {
		const onKeyDownHandler = (event) => {
			if (event.key === 'ArrowUp' && lastVisibleListItemIndex > 0) {
				setLastVisibleListItemIndex((previousLastVisibleFeatureIndex) => previousLastVisibleFeatureIndex - 1);
			} else if (event.key === 'ArrowDown' && lastVisibleListItemIndex < list.length) {
				setLastVisibleListItemIndex((previousLastVisibleFeatureIndex) => previousLastVisibleFeatureIndex + 1);
			}
		};

		window.addEventListener('keydown', onKeyDownHandler);

		return () => {
			window.removeEventListener('keydown', onKeyDownHandler);
		};
	}, [lastVisibleListItemIndex]);

	const presentationList = (
		<ul>{list.slice(0, lastVisibleListItemIndex).map((item, index) => item && <li key={item}>{item}</li>)}</ul>
	);
	const presentationListEnd = lastVisibleListItemIndex === list.length;

	return {
		presentationList,
		presentationListEnd,
	};
};
