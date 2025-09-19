import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import * as S from "./MiddleBar.styles";

const MiddleBar = () => {
    return (
        <S.MiddleBar>
            <S.SearchWrapper>
                <input type="text" placeholder="איך נוכל לעזור לך?" />
            </S.SearchWrapper>
            < S.Logo
                src="/logo.png"
                alt="Party Concept Logo"
                objectFit="contain"
                height={150 + 5}
                width={Number(150 * 2.666666666666666)}
            />
            <S.Actions>
                <S.Button>התחברות </S.Button>
                < S.Button > <FiShoppingCart /> סל קניות</S.Button >
            </S.Actions>

        </S.MiddleBar>
    )
}

export default MiddleBar;
