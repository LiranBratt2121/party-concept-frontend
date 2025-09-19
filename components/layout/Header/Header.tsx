"use client";

import React from "react";
import * as S from "./Header.styles";
import MiddleBar from "./MiddleBar/MiddleBar";
import NavBar from "./NavBar/NavBar";
import TopBar from "./TopBar/TopBar";

const Header: React.FC = () => {
    return (
        <S.HeaderWrapper>
            <TopBar />
            <MiddleBar />
            <NavBar />
        </S.HeaderWrapper>
    );
};

export default Header;
