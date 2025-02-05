import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UICard, UIGrid, UITypography, SkeletonCard, Pagination } from '../../components';
import { setCategory, setCurrentPage, setSortBy } from '../../redux/slices/filter/slice';
import { fetchPizzas } from '../../redux/slices/pizzas/asyncAction';
import { FilterWidget } from '../../widgets';
import { addItem } from '../../redux/slices/cart/slice';
import { SortTypes } from '../../redux/slices/filter/types';
import { catList } from '../../widgets/filter-widget/model';
import { Pizza } from '../../redux/slices/pizzas/types';
import { CartItem } from '../../redux/slices/cart/types';
import { useAppDispatch } from '../../redux/store';
import { filterSelector } from '../../redux/slices/filter/selectors';
import { pizzaSelector } from '../../redux/slices/pizzas/selectors';
import { settingsSelector } from '../../redux/slices/settings/selectors';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const { items, limit } = useSelector(pizzaSelector);
	const { isLoaded } = useSelector(settingsSelector);
	const { category, sortBy, searchText, currentPage } = useSelector(filterSelector);
	//test commit
	//First Fatching Pizzas
	useEffect(() => {
		dispatch(fetchPizzas({ category, sortBy, searchText, currentPage }));
		window.scrollTo(0, 0);
	}, [dispatch, category, sortBy, searchText, currentPage]);

	const selectCatHandler = useCallback(
		(cat: number | string) => {
			dispatch(setCategory(cat));
		},
		[dispatch],
	);

	const selectSortHandler = useCallback(
		(type: SortTypes) => {
			dispatch(setSortBy(type));
		},
		[dispatch],
	);

	const selectCurrentPage = (page: number) => {
		dispatch(setCurrentPage(page));
	};

	const addToCart = (item: CartItem) => {
		dispatch(addItem(item));
	};

	const pizzas = items.map((item: Pizza) => (
		<UICard key={item.id} {...item} addToCart={addToCart} />
	));
	const skeletons = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />);

	return isLoaded === 'error' ? (
		<>
			<UITypography variant="h2" fontWeight="bold" bottomSpace="sm" textAlign="center">
				An error has occurred!
			</UITypography>
			<UITypography variant="h5" fontWeight="regular" bottomSpace="none" textAlign="center">
				Sorry, we couldn't get pizzas. Please try again later.
			</UITypography>
		</>
	) : (
		<>
			<FilterWidget
				sortBy={sortBy}
				category={category}
				onCategory={selectCatHandler}
				onSort={selectSortHandler}
			/>
			<UITypography variant="h2" fontWeight="bold" bottomSpace="md">
				{category !== 'all' ? catList[Number(category)] : 'All'} Pizzas
			</UITypography>
			<UIGrid columns={4} gridGap={8}>
				{isLoaded === 'success' ? pizzas : skeletons}
			</UIGrid>
			<Pagination
				totalItemsCount={25}
				pageSize={limit}
				currentPage={currentPage}
				onChangedPage={selectCurrentPage}
			/>
		</>
	);
};
export default Home;
