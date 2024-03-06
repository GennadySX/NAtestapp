import React, {useCallback, useEffect} from "react";
import {Button, FlatList, Image, InteractionManager, Text, TouchableOpacity, View} from "react-native";
import HomeVM from "./Home.vm.ts";
import {observer, useLocalObservable} from "mobx-react";
import {Page} from "../../layouts/Page";
import {useNavigation} from "@react-navigation/native";
import {SCREENS} from "../../routes/routes.ts";
import {observable} from "mobx";



 const HomeScreen =  observer(() => {

     const navigation = useNavigation()
     const vm = useLocalObservable(() => new HomeVM())

     //tem memo


     const goToProduct = (id: string) => {
         navigation.navigate(SCREENS.PRODUCT, {
             id
         })

     }

     const renderComponent = useCallback(({item, index}) => (

         <TouchableOpacity key={index} style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16
         }} onPress={() => goToProduct(item.id)}>
             <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
             <Text>{item?.title}</Text>
         </TouchableOpacity>
     ), [])



     useEffect(() => {
         InteractionManager.runAfterInteractions(async () => {
               await vm.getProductList()
         })
     },[])


    return (
        <Page>
            <Button title={'Get Product List'} onPress={vm.getProductList} />
            <FlatList
                data={vm.productListArray}
                 keyExtractor={(item, index) => index.toString()}
                  renderItem={renderComponent}
                contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 16}}
            />
        </Page>
    )
})



export default HomeScreen;
