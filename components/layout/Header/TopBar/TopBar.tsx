import React from 'react'
import { FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import * as S from "./TopBar.styles";

const TopBar = () => {
    return (
        <S.TopBarContainer>
            <S.TopLeft>
                <S.IconLink href="tel:0000000"><FaPhoneAlt /></S.IconLink>
                <S.IconLink href="mailto:info@partyconcept.com"><FaEnvelope /></S.IconLink>
                <S.IconLink href="https://facebook.com"><FaFacebookF /></S.IconLink>
                <S.StoreLink href="/contact">כתובת חנות ויצירת קשר</S.StoreLink>
            </S.TopLeft>
            <S.TopRight>משלוח חינם בקנייה מעל 249 ש״ח</S.TopRight>
        </S.TopBarContainer>
    )
}

export default TopBar;
