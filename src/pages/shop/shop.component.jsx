import React from 'react'
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component'
import {Route} from 'react-router-dom'
import CategoryPage from '../category/categoryPage.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils'; 
import {UpadteCollections} from '../../redux/shop/shop.actions'
import {connect} from 'react-redux';
class Shop extends React.Component{
    unsubscribeFromSnapshot=null;

    componentDidMount(){
        const {updatecollections}= this.props;
        const collectionRef=firestore.collection('Collection');
        this.unsubscribeFromSnapshot=collectionRef.onSnapshot(
            async snapshot=>{
                //console.log(snapshot);
                const collectionMap=convertCollectionsSnapshotToMap(snapshot);
                //console.log(collectionMap);
                updatecollections(collectionMap)

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

const mapDispatchToProps = dispatch=>({
    updatecollections: collectionMap=>dispatch(UpadteCollections(collectionMap)),
})


export default connect(null,mapDispatchToProps)(Shop);