import React from 'react'
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component'
import {Route} from 'react-router-dom'
import CategoryPage from '../category/categoryPage.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils'; 
import {fetchCollectionStart} from '../../redux/shop/shop.actions'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux';
import {WithSpinner} from '../../components/with-spinner/with-spinner.component';
import {SelectIsCollectionFetching,SelectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionOverview.container';
import CategoryPageContainer from '../../pages/category/categoryPage.component'
const CollectionOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner=WithSpinner(CategoryPage);
class Shop extends React.Component{
    
    componentDidMount(){
        console.log('shop.component component Did Mount')
        //To Fetch the Data using firebase API
        // fetch("https://firestore.googleapis.com/v1/projects/react-ecomm-4f435/databases/(default)/documents/Collection")
        // .then(Response=>Response.json()).
        // then(collections=>console.log(collections));
        const {fetchCollectionStart}=this.props;
        fetchCollectionStart();
    }

    render(){
        const {match}=this.props;
        
        return(
            <div className='shop-page'>   
            <Route exact path={`${match.path}`} component={CollectionOverviewWithSpinner}/>
            <Route path={`${match.path}/:categoryId`} component={CategoryPageWithSpinner}/>
            </div>
        );
    }
}

const mapStateTorProps=createStructuredSelector({
    isCollectionFetching: SelectIsCollectionFetching,
    
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStart:()=>dispatch(fetchCollectionStart())
  });


export default connect(mapStateTorProps,mapDispatchToProps)(Shop);