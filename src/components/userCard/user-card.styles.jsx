import styled from "styled-components";

export const UserCardContainer = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f1f1f1;
    margin: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 40%);
    border-radius: 10px;
    text-decoration: none;
    &:hover {
        transition: 0.2s;
        transition-timing-function: ease-in-out;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 20%);
    }
`;

export const UserCardIcon = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 1px solid #ffbfc5;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 10%);
    cursor: pointer;
`;
export const UserCardLogin = styled.h3`
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
    color: #131315;
`;
export const UserCardLink = styled.a`
    text-decoration: none;
    color: #ffbfc5;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 15px;
`;
