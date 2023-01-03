import React, { useEffect } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections, fetchCollectionsStartAsync }) => {

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)};

export default CollectionsOverview;
