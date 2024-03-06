import {action, computed, makeAutoObservable, makeObservable, observable} from "mobx";
import {productByIdApi} from "../../api/product.dto.ts";
import {Product} from "../../types.ts";


class ProductVM {

    @observable
    product = observable.set<Product | null>(null, {deep: true})



    @computed
    get productItem() {
        return Array.from(this.product)[0]
    }

    constructor() {
        makeAutoObservable(this)
    }



    @action.bound
    async getProduct(id: number) {
       const value = await productByIdApi(id)
        this.product.add(value)
    }
}



export default ProductVM
