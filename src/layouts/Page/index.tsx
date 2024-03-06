import {FC, ReactNode} from "react";
import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";


type Props = {
    children: ReactNode;
}
export const Page: FC<Props> = ({children}) => {
    const {top, bottom} = useSafeAreaInsets();
    return (
        <View style={{paddingTop: top, paddingBottom: bottom}}>
            {children}
        </View>
    )
}
