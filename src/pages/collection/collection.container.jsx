import React from 'react';
import Collection from './collection.component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
	selectCollection,
	selectCollectionsFetched,
} from '../../redux/shop/shop.selectors';

const CollectionContainer = (otherProps) => {
	const { collectionId } = useParams();
	const dispatch = useDispatch();

	const collection = useSelector(selectCollection(collectionId));
	const isCollectionFetching = !useSelector(selectCollectionsFetched);
	const fetchCollections = () => dispatch(fetchCollectionsStartAsync());

	const props = {
		collection,
		isCollectionFetching,
		fetchCollections,
	};

	return <Collection {...props} {...otherProps} />;
};

export default CollectionContainer;
