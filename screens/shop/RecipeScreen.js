import React from 'react';
import { FlatList, Button, Platform, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import Recipe from '../../components/shop/RecipeShow';


const RecipeScreen = props => {
    const orders = useSelector(state => state.orders.orders);
    
    return (
    
        <FlatList
        
            data={orders}
            
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <View>
                   
                <Recipe
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                   
                />


                </View>
                
            )}
       
        
        />
       
    );
    
    
};

RecipeScreen.navigationOptions = nevData => {
    return {
        headerTitle: 'Recipe'
    };
};

export default RecipeScreen;
