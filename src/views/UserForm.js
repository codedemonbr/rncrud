import React from "react";
import { Text } from "react-native";

export default (props) => {
    // console.warn(props);
    const user = props.route.params;
    return (
        <Text>
            {user.name} - {user.email}
        </Text>
    );
};
