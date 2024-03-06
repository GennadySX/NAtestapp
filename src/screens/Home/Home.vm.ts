import {action, computed, makeObservable, observable, ObservableSet} from "mobx";
import {Product} from "../../types.ts";
import {productListApi} from "../../api/product.dto.ts";


class HomeVM {
    @observable.ref
    productList: ObservableSet<Product> = observable.set([], {deep: true})




    @computed
    get productListArray() {
        return Array.from(this.productList)
    }


    constructor() {
        makeObservable(this)
    }



    @action.bound
    async getProductList() {
      const products =  await productListApi()
        this.productList.replace(products)
    }

}


export default HomeVM
