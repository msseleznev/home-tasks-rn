import {View} from "react-native";
import React from "react";

type ItemDividerPropsType = {
    color?: string
}
export const ItemDivider: React.FC<ItemDividerPropsType> = ({color}) => {
    const finalColor = color || '#EEF8FD'
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: finalColor,
            }}
        />
    );
}
