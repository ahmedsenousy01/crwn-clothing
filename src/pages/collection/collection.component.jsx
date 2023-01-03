import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import {
	selectCollection,
	selectCollectionsFetched
} from '../../redux/shop/shop.selectors';

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ fetchCollectionsStartAsync }) => {
	const { collectionId } = useParams();
	const collection = useSelector(selectCollection(collectionId));
	const isCollectionFetching = !(useSelector(selectCollectionsFetched));

	useEffect(() => {
		if (isCollectionFetching) fetchCollectionsStartAsync();
	}, [isCollectionFetching, fetchCollectionsStartAsync]);

  if(isCollectionFetching) return <h1>loading</h1>

	return (
		<CollectionPageContainer>
			<CollectionTitle>{collection?.title}</CollectionTitle>
			<CollectionItemsContainer>
				{collection?.items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(CollectionPage);
