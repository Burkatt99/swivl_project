import React, { useEffect } from "react";
import axios from "axios";
import UserCard from "../userCard/user-card";
import { UsersListContainer } from "./users-list.styles";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/actions/userActions";

const UsersList = () => {
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const result = await axios
            .get("https://api.github.com/users")
            .catch((err) => {
                console.log("Err:", err);
            });
        dispatch(setUsers(result.data));
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <UsersListContainer>
            <UserCard />
        </UsersListContainer>
    );
};
export default UsersList;
