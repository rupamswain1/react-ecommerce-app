import React from 'react'
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component'
import {Route} from 'react-router-dom'
import CategoryPage from '../category/categoryPage.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils'; 
import {UpdateCollections} from '../../redux/shop/shop.actions'
import {connect} from 'react-redux';
import {WithSpinner} from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner=WithSpinner(CategoryPage);
class Shop extends React.Component{
   state={
       Loading:true,
   }
    
    unsubscribeFromSnapshot=null;
    componentDidMount(){
        const {updateCollections}= this.props;
        const collectionRef=firestore.collection('Collection');

        //To Fetch the Data using firebase API
        // fetch("https://firestore.googleapis.com/v1/projects/react-ecomm-4f435/databases/(default)/documents/Collection")
        // .then(Response=>Response.json()).
        // then(collections=>console.log(collections));

        this.unsubscribeFromSnapshot=collectionRef.onSnapshot(
            async snapshot=>{
                //console.log(snapshot);
                const collectionMap=convertCollectionsSnapshotToMap(snapshot);
                //console.log(collectionMap);
                updateCollections(collectionMap)
                this.setState({Loading:false});
            
                console.log(this.props)
        })

    }

    render(){
        const {match}=this.props;
        const {Loading}=this.state;
        return(
            <div className='shop-page'>   
            <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={Loading} {...props}/>}/>
            <Route path={`${match.path}/:categoryId`} render={(props)=><CategoryPageWithSpinner isLoading={Loading} {...props} />}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap =>
      dispatch(UpdateCollections(collectionMap))
  });


export default connect(null,mapDispatchToProps)(Shop);