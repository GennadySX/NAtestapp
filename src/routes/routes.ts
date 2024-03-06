import HomeScreen from "../screens/Home";
import ProductScreen from "../screens/Product";



export enum SCREENS  {
    HOME= "Home",
    PRODUCT = "Product"
}

export const APP_ROUTES = [
    {
        name: SCREENS.HOME,
        component: HomeScreen,
        options: {
            title: "Home",
        }
    },
    {
      name: SCREENS.PRODUCT,
      component: ProductScreen,
        options: {
            title: "Product",
        }
    }
]
