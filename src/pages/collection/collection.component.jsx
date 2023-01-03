import React, { useEffect } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ fetchCollections, collection, isCollectionFetching }) => {

	useEffect(() => {
		if (isCollectionFetching) fetchCollections();
	}, [isCollectionFetching, fetchCollections]);

	if (isCollectionFetching) return <h1>loading</h1>;

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

export default CollectionPage;
