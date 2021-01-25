import React from 'react'
import SHOP_DATA from './shopData';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component'


class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA,
        };
        
    }
    render(){
        const {collections}=this.state;
        return(
             
            collections.map(({id,title, items, ...otherProps})=>
                 <CollectionsPreview key={id} title={title} items={items} {...otherProps}/>
                )
        );
    };
}

export default Shop;