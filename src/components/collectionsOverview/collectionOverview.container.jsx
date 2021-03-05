import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {WithSpinner} from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from './collectionsOverview.component';
import {compose} from 'redux';
import {SelectIsCollectionLoaded} from '../../redux/shop/shop.selector';
const mapStateTorProps=createStructuredSelector({
    isLoading: SelectIsCollectionLoaded,
})

const CollectionOverviewContainer=compose(
    connect(mapStateTorProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;