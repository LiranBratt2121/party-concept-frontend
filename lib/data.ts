import { Product } from "@/types/product";
import { Catagory } from "@/types/catagory";

export const heroSlides = [
    {
        id: 1,
        imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/%D7%91-%D7%90%D7%A0%D7%A8-%D7%A2%D7%93%D7%9B%D7%A0%D7%99.jpg",
        alt: "Slide 1: Sweet treats for the new year",
    },
    {
        id: 2,
        imageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/06/%D7%91%D7%90%D7%A0%D7%A8%D7%99%D7%9D-%D7%97%D7%93%D7%A9%D7%99%D7%9D-%D7%9C%D7%90%D7%AA%D7%A8-%D7%A4%D7%90%D7%A8%D7%98%D7%99-%D7%A7%D7%95%D7%A0%D7%A1%D7%A4%D7%98-1920-%C3%97-500-%D7%A4%D7%99%D7%A7%D7%A1%D7%9C-1-1.jpg",
        alt: "Slide 2: Cool Shirts",
    },
];

export const featuredProducts: Product[] = [
    {
        id: "p1",
        name: "כפפות אגרוף מתנפחות - 2 זוגות",
        priceShekel: 99.10,
        description: "כפפות אגרוף מתנפחות איכותיות לילדים ונוער. מושלמות למסיבות, פעילויות חוף ובריכה. עשויות מחומר PVC עמיד ובטוח, קלות לניפוח ולאחסון. מגיעות בחבילה של 2 זוגות בצבעים עזים וזוהרים.",
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2022/09/אירועים-jpg.webp",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2023/06/white-boxes-with-plates-white-sweets-1_600x600.jpg",
            "https://partyconcept.co.il/wp-content/uploads/2022/06/צדבקות-מיתוג-לאירועים-jpeg.webp"
        ],
        category: { 
            name: "צעצועים",
            imageUrl: "https://partyconcept.co.il/wp-content/uploads/2022/09/אירועים-jpg.webp"
        }
    },
    {
        id: "p2",
        name: "בריכת מלבנית מתנפחת לילדים", 
        priceShekel: 80.55,
        description: "בריכה מתנפחת מלבנית לילדים בגודל משפחתי. עשויה מחומרים איכותיים ועמידים, עם דפנות מחוזקות לבטיחות מירבית. מתאימה לחצר הבית, למרפסת או לטיולים. קלה להרכבה ופירוק.",
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2022/06/חולצות-חתונה-יאללה-בלאגן-פארטי-קונספט_500x500-jpg.webp",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2023/12/Depositphotos_366547178_S.jpg",
            "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg"
        ],
        category: {
            name: "קיץ",
            imageUrl: "https://partyconcept.co.il/wp-content/uploads/2022/06/חולצות-חתונה-יאללה-בלאגן-פארטי-קונספט_500x500-jpg.webp"
        }
    },
    {
        id: "p3",
        name: "מאוורר נטען עם ספריי מים אישי",
        priceShekel: 90.42,
        description: "מאוורר אישי נטען עם פונקציית ספריי מים מרעננת. מושלם לימי חום, חופים, טיולים ואירועי קיץ. עם מיכל מים נתיק ובטריה נטענת לשעות ארוכות של פעילות. קומפקטי ונוח לנשיאה.",
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/06/white-boxes-with-plates-white-sweets-1_600x600.jpg",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2025/08/ChatGPT-Image-Aug-27-2025-12_10_27-PM-247x296.png",
            "https://partyconcept.co.il/wp-content/uploads/2022/10/logoty2_optimized-jpg.webp"
        ],
        category: {
            name: "קיץ",
            imageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/06/white-boxes-with-plates-white-sweets-1_600x600.jpg"
        }
    },
    {
        id: "p4",
        name: "בריכה מרובעת משפחתית INTEX",
        priceShekel: 99.44,
        description: "בריכה משפחתית מרובעת של חברת INTEX המובילה. בנייה איכותית ועמידה עם דפנות מחוזקות ומערכת ניקוז מתקדמת. מתאימה לכל המשפחה, קלה להקמה ולאחסון בסוף העונה.",
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2022/06/צדבקות-מיתוג-לאירועים-jpeg.webp",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2025/05/2_9324974-247x296.jpg",
            "https://partyconcept.co.il/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-13.46.18-247x296.jpeg"
        ],
        category: {
            name: "קיץ",
            imageUrl: "https://partyconcept.co.il/wp-content/uploads/2022/06/צדבקות-מיתוג-לאירועים-jpeg.webp"
        }
    },
    {
        id: "p5",
        name: "מכלי נופש עם ספריי מים",
        priceShekel: 99.44,
        description: "מכלי נופש רב-תכליתי עם מערכת ספריי מים מובנית. מושלם לימי קיץ חמים, משלב בין רענון למשחק מהנה. עשוי מחומרים איכותיים ועמידים בפני קרינת UV. מתאים לילדים ומבוגרים.",
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/12/Depositphotos_366547178_S.jpg",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2025/07/ChatGPT-Image-Jul-22-2025-01_23_36-PM-247x296.png",
            "https://partyconcept.co.il/wp-content/uploads/2022/05/images-7-jpg.webp"
        ],
        category: {
            name: "קיץ",
            imageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/12/Depositphotos_366547178_S.jpg"
        }
    },
    {
        id: "p6",
        name: "מאוורר נטען עם ספריי מים אישי - דגם מיוחד",
        priceShekel: 90.42,
        description: "גרסה משופרת של המאוורר הנטען עם ספריי מים. כולל 3 מהירויות רוח, מיכל מים גדול יותר ועיצוב ארגונומי משופר. בטריה חזקה יותר למשך פעילות ארוך יותר.",
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/06/white-boxes-with-plates-white-sweets-1_600x600.jpg",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-05-at-12.41.18-1-247x296.jpeg",
            "https://partyconcept.co.il/wp-content/uploads/2022/10/305491400_508789364586310_6446194831057751015_n-jpg.webp"
        ],
        category: {
            name: "קיץ",
            imageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/06/white-boxes-with-plates-white-sweets-1_600x600.jpg"
        }
    },
    {
        id: "p7",
        name: "בריכה מרובעת משפחתית INTEX - דגם פרימיום",
        priceShekel: 99.44,
        description: "הדגם הפרימיום של בריכת INTEX המרובעת. כוללת מערכת פילטרציה מתקדמת, כיסוי מגן ועמדת תחזוקה נוחה. מתאימה למשפחות גדולות ולשימוש אינטנסיבי במשך כל עונת הקיץ.",
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2022/06/צדבקות-מיתוג-לאירועים-jpeg.webp",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2022/10/לוגו-דקל-מסגרת-טורקיז.png",
            "https://partyconcept.co.il/wp-content/uploads/2025/09/%D7%91-%D7%90%D7%A0%D7%A8-%D7%A2%D7%93%D7%9B%D7%A0%D7%99.jpg"
        ],
        category: {
            name: "קיץ",
            imageUrl: "https://partyconcept.co.il/wp-content/uploads/2022/06/צדבקות-מיתוג-לאירועים-jpeg.webp"
        }
    },
    {
        id: "p8",
        name: "מכלי נופש עם ספריי מים - מהדורה מוגבלת",
        priceShekel: 99.44,
        description: "מהדורה מוגבלת של מכלי הנופש עם ספריי מים. עיצוב ייחודי בצבעים חדשים, חזק יותר ועם פונקציות נוספות. מושלם למתנה או לאוספנים של מוצרי קיץ איכותיים.",
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/12/Depositphotos_366547178_S.jpg",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2023/06/%D7%91%D7%90%D7%A0%D7%A8%D7%99%D7%9D-%D7%97%D7%93%D7%A9%D7%99%D7%9D-%D7%9C%D7%90%D7%AA%D7%A8-%D7%A4%D7%90%D7%A8%D7%98%D7%99-%D7%A7%D7%95%D7%A0%D7%A1%D7%A4%D7%98-1920-%C3%97-500-%D7%A4%D7%99%D7%A7%D7%A1%D7%9C-1-1.jpg",
            "https://partyconcept.co.il/wp-content/uploads/2022/09/אירועים-jpg.webp"
        ],
        category: {
            name: "קיץ",
            imageUrl: "https://partyconcept.co.il/wp-content/uploads/2023/12/Depositphotos_366547178_S.jpg"
        }
    }
];

export const featuredCategories: (Catagory)[] = [
    {
        name: "חולצות חתונה",
        imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/08/ChatGPT-Image-Aug-27-2025-12_10_27-PM-247x296.png"
    },
    {
        name: "ציוד ואביזרים למסיבות",
        imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/07/ChatGPT-Image-Jul-22-2025-01_23_36-PM-247x296.png"
    },
    {
        name: "בריכות ומתנפחים",
        imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-15-at-13.46.18-247x296.jpeg"
    },
    {
        name: "בר מתוקים",
        imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-05-at-12.41.18-1-247x296.jpeg"
    },
    {
        name: "מוזיקה",
        imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/05/2_9324974-247x296.jpg"
    },
    {
        name: "בלונים מכל הסוגים",
        imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-05-at-12.41.18-1-247x296.jpeg"
    }
];

export const brands = [
    {
        name: "Ty",
        logoUrl: "https://partyconcept.co.il/wp-content/uploads/2022/10/logoty2_optimized-jpg.webp"
    },
    {
        name: "INTEX",
        logoUrl: "https://partyconcept.co.il/wp-content/uploads/2022/05/images-7-jpg.webp"
    },
    {
        name: "Mendelberg",
        logoUrl: "https://partyconcept.co.il/wp-content/uploads/2022/10/305491400_508789364586310_6446194831057751015_n-jpg.webp"
    },
    {
        name: "Dekel",
        logoUrl: "https://partyconcept.co.il/wp-content/uploads/2022/10/לוגו-דקל-מסגרת-טורקיז.png"
    }
];

export const exampleProducts: Product[] = [
    {
        id: "1",
        name: "בלון הליום לבן",
        description: "בלון הליום איכותי צבע לבן, מושלם לאירועים חגיגיים ומסיבות. עמיד ואיכותי, נשאר מנופח לזמן רב.",
        priceShekel: 5,
        category: { name: "בלונים", imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg" },
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2023/06/white-boxes-with-plates-white-sweets-1_600x600.jpg"
        ]
    },
    {
        id: "2",
        name: "בלון הליום אדום",
        description: "בלון הליום איכותי צבע אדום עז, מושלם לאירועי אהבה ומסיבות רומנטיות. איכות פרימיום וצבע זוהר.",
        priceShekel: 5,
        category: { name: "בלונים", imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg" },
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2025/08/ChatGPT-Image-Aug-27-2025-12_10_27-PM-247x296.png"
        ]
    },
    {
        id: "3",
        name: "בלון הליום כחול",
        description: "בלון הליום איכותי צבע כחול שמיים, מושלם לאירועי בנים ומסיבות בנושא ימי. איכות מעולה ועמידות גבוהה.",
        priceShekel: 5,
        category: { name: "בלונים", imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg" },
        headImageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg",
        additionalImageUrls: [
            "https://partyconcept.co.il/wp-content/uploads/2025/05/2_9324974-247x296.jpg"
        ]
    }
]