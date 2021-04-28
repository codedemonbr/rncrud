import React, { useContext } from "react";
import { FlatList, View, Alert } from "react-native";
import { ListItem, Avatar, Icon, Button } from "react-native-elements";
import UsersContext from "../context/UsersContext";
import users from "../data/users";

export default (props) => {
    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDeletion(user) {
        Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
            {
                text: "Sim",
                onPress() {
                    dispatch({
                        type: "deleteUser",
                        payload: user,
                    });
                },
            },
            {
                text: "Não",
            },
        ]);
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        );
    }

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
                {getActions(user)}
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={(user) => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    );
};
