import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    UserCardContainer,
    UserCardIcon,
    UserCardLogin,
    UserCardLink
} from "./user-card.styles";

const UserCard = () => {
    const users = useSelector((state) => state.allUsers.users);
    const listOfUsers = users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
            <UserCardContainer key={id}>
                <Link to={`/user/${login}`}>
                    <UserCardIcon src={avatar_url} />{" "}
                </Link>
                <UserCardLogin>{login}</UserCardLogin>
                <UserCardLink href={html_url} target="_blank">
                    Open Profile
                </UserCardLink>
            </UserCardContainer>
        );
    });
    return <>{listOfUsers}</>;
};

export default UserCard;
