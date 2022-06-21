import styled from "styled-components";

export const UserDeatailContainer = styled.div`
    height: fit-content;
    padding: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: #e7e9ea;
`;

export const UserDetailIcon = styled.img`
    width: 350px;
    height: auto;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 30%);
    border-radius: 20px;
`;

export const UserDetailName = styled.h3`
    text-align: center;
    font-size: 40px;
    color: #757575;
    padding-bottom: 20px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
`;

export const BlockDetailInformation = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`;

export const DetailInform = styled.span`
    font-size: 20px;
    color: #242424;
    font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS";
    font-weight: 700;
    margin: 5px 0;
`;
export const DetailBlog = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: #ffbfc5;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    margin: 5px;
`;
