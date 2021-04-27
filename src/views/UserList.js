import React from "react";
import { FlatList, View, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import users from "../data/users";

export default (props) => {
    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate("UserForm")}
            >
                <Avatar rounded source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            // <ListItem
            //     leftAvatar={{ source: { uri: user.avatarUrl } }}
            //     key={user.id}
            //     title={user.name}
            //     subtitle={user.email}
            //     bottomDivider
            // />
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={(user) => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    );
};
