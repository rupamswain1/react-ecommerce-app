import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CategoryPage from './categoryPage.component';
import {compose} from 'redux';
import {SelectIsCollectionLoaded} from '../../redux/shop/shop.selector';

const mapStateToProps=createStructuredSelector({
    isLoading: (state)=>!SelectIsCollectionLoaded(state),
})

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryPage);

export default CategoryPageContainer;