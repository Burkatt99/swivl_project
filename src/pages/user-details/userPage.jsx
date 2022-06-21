import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
    selectedUser,
    removeSelectedUser
} from "../../redux/actions/userActions";
import UserDetail from "../../components/userDetail/userDetail";

const UserPage = () => {
    const userName = useParams().id;
    const dispatch = useDispatch();

    const fetchDetails = async () => {
        const result = await axios
            .get(`https://api.github.com/users/${userName}`)
            .catch((err) => {
                console.log("Err:", err);
            });
        dispatch(selectedUser(result.data));
    };
    useEffect(() => {
        if (userName && userName !== "") fetchDetails();
        return () => {
            dispatch(removeSelectedUser());
        };
    }, [userName]);
    return <UserDetail />;
};

export default UserPage;
