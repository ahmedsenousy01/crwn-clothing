import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import collectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(collectionsOverview);

export default CollectionsOverviewContainer;