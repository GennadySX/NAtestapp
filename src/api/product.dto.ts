import {appInstance} from "./api.ts";
import {ApiUrls} from "./ApiUrls.ts";
import {Product} from "../types.ts";


export const productListApi = () =>  appInstance.get<{}, {data: Product[]}>(ApiUrls.productList).then((response) => response?.data);


export const productByIdApi = (id: number) => appInstance.get<{}, {data: Product}>(ApiUrls.productById(id)).then((response) => response?.data);
