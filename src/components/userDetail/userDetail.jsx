import React from "react";
import moment from "moment";
import {
    UserDeatailContainer,
    BlockDetailInformation,
    UserDetailIcon,
    UserDetailName,
    DetailInform,
    DetailBlog
} from "./userDetail.styles";
import { useSelector } from "react-redux";

const UserDetail = () => {
    const userDetails = useSelector((state) => state.user);
    const {
        avatar_url,
        name,
        followers,
        following,
        created_at,
        company,
        email,
        location,
        blog,
        bio
    } = userDetails;
    const date_create = moment(created_at).format("LL");
    return (
        <UserDeatailContainer>
            <UserDetailIcon src={avatar_url} />
            <BlockDetailInformation>
                <UserDetailName>{name}</UserDetailName>
                <DetailInform>Followers: {followers}</DetailInform>
                <DetailInform>Following: {following}</DetailInform>
                <DetailInform>Created at {date_create}</DetailInform>
                <DetailInform>Company: {company}</DetailInform>
                <DetailInform>Email: {email}</DetailInform>
                <DetailInform>Location: {location}</DetailInform>
                <DetailInform>
                    Blog:
                    <DetailBlog href={blog} target="_blank">
                        Open blog
                    </DetailBlog>
                </DetailInform>
                <DetailInform>Bio: {bio}</DetailInform>
            </BlockDetailInformation>
        </UserDeatailContainer>
    );
};

export default UserDetail;
