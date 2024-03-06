import React, {useEffect} from "react";
import {Image, InteractionManager, Text, View} from "react-native";
import {observer, useLocalObservable} from "mobx-react";
import ProductVM from "./Product.vm.ts";
import {useRoute} from "@react-navigation/native";
import {Page} from "../../layouts/Page";
import {observable} from "mobx";



 const ProductScreen = observer(() => {
     const route = useRoute()
     const {id} = route.params || {}

     const vm = useLocalObservable(() => new ProductVM())



        useEffect(() => {
            InteractionManager.runAfterInteractions(async () => {
                if (!id) {
                    return
                }
                await vm.getProduct(id)
            })
        }, [])

    return (
        <Page>

            <Image source={{uri: vm.productItem?.image}} style={{width: 100, height: 100}} />

            <View>
                <Text>{vm.productItem?.title}</Text>
            </View>

        </Page>
    )
})

export default ProductScreen
