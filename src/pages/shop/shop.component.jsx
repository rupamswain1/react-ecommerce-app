import React from 'react'
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component'
import {Route} from 'react-router-dom'
import CategoryPage from '../category/categoryPage.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils'; 
class Shop extends React.Component{
    unsubscribeFromSnapshot=null;

    componentDidMount(){
        const collectionRef=firestore.collection('Collection');
        collectionRef.onSnapshot(
            async snapshot=>{
                //console.log(snapshot);
                convertCollectionsSnapshotToMap(snapshot);
        })
    }

    render(){
        const {match}=this.props;
        return(
            <div className='shop-page'>   
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
            </div>
        );
    }
}




export default Shop;