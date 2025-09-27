"use client";

import React from "react";
import { FaWhatsapp, FaEnvelope, FaFacebookF } from "react-icons/fa";
import * as S from "./PromoSection.styles";

const PromoSection = () => {
  return (
    <S.PromoWrapper>
      {/* Wave Shape */}
      <S.WaveShape>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19
            c-82.26-17.34-168.06-16.33-250.45.39
            -57.84,11.73-114,31.07-172,41.86
            A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
            C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </S.WaveShape>

      {/* Content */}
      <S.ContentContainer>
        {/* Left Column */}
        <S.LeftColumn>
          <S.LogoImage
            src={"/logo.png"}
            alt="Party Concept Logo"
            width={350}
            height={180}
          />

          <S.PromoButton>בואו להזמין חלום</S.PromoButton>

          <S.Subheading>
            עקבו אחרינו והשארו מעודכנים לפני כולם!
          </S.Subheading>

          <S.SocialsWrapper>
            <S.IconLink href="#" className="whatsapp">
              <FaWhatsapp />
            </S.IconLink>
            <S.IconLink href="#" className="email">
              <FaEnvelope />
            </S.IconLink>
            <S.IconLink href="#" className="facebook">
              <FaFacebookF />
            </S.IconLink>
          </S.SocialsWrapper>
        </S.LeftColumn>

        {/* Right Column */}
        <S.RightColumn>
          <div>
            <S.Heading>ברוכים הבאים</S.Heading>
            <S.InfoText>
              היי, נעים להכיר, אנחנו Party Concept! חנות למוצרי ימי הולדת,
              מוצרי קיץ, מתנות ובלונים. מחפשים מוצרים איכותיים במחירים
              משתלמים? הגעתם למקום הנכון!
            </S.InfoText>
            <S.InfoText style={{ marginTop: "1rem" }}>
              הצוות שלנו ישמח לתת שירות ומענה לשאלותיכם ב{" "}
              <a href="#" style={{ color: "white", fontWeight: "600" }}>
                WhatsApp
              </a>{" "}
              (בשעות הפעילות).
            </S.InfoText>
          </div>

          <div>
            <S.Heading>מחלקת שירות לקוחות</S.Heading>
            <S.InfoList>
              <li>
                שירות לקוחות הזמנות באתר ובחנות פיזית חייגו: 03-5511233 /
                ווטסאפ: 054-9790070
              </li>
              <li>
                להזמנות: משלוחי בלונים, הדפסות ודפים אכילים חייגו:
                03-5511233
              </li>
              <li>כתובת חנות: רחוב הרב שלום שבזי 178, פסגת אפק ראש העין.</li>
              <li>ימים ושעות פעילות: א׳-ה׳: 8:00-21:00 שישי: 8:00-15:00</li>
            </S.InfoList>
          </div>
        </S.RightColumn>
      </S.ContentContainer>
    </S.PromoWrapper>
  );
};

export default PromoSection;
