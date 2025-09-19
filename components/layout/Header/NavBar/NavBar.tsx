import Link from 'next/link';
import React from 'react'
import * as S from "./NavBar.styles";

const NavBar = () => {
  return (
    < S.NavBar >
      <Link href="/">עמוד הבית</Link>
      <Link href="/school">לגן ולבית ספר ▾</Link>
      <Link href="/events">אירועים ▾</Link>
      <Link href="/summer">קיץ ▾</Link>
      <Link href="/balloons">בלונים</Link>
      <Link href="/decor">ציוד למסיבות</Link>
      <Link href="/once">חד פעמי</Link>
      <Link href="/sweets">בר מתוקים</Link>
      <Link href="/gifts">מתנות ומארזים מתוקים</Link>
    </S.NavBar >
  )
}

export default NavBar;
