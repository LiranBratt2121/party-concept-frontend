import React from 'react'
import { ContactUsWrapper, ContactField, ContactLink } from './ContactUs.styles'

const ContactUs = () => {
  const contactInfo = [
    {
      text: "מכירות:",
      value: "054-979-0070",
      type: "phone"
    },
    {
      text: "שירות לקוחות:",
      value: "054-790-0070", 
      type: "phone"
    },
    {
      text: "מעקב משלוחים לאחר הזמנה",
      value: "Partyconcept555@gmail.com",
      type: "email"
    },
    {
      text: "לפרטים נוספים / סיטונאי",
      value: "Partyconcept8@gmail.com",
      type: "email"
    },
    {
      text: "שירות לקוחות וואטספ לאחר קניה:",
      value: "054-7900070",
      type: "phone"
    }
  ];

  const formatContactItem = (item: typeof contactInfo[0]) => {
    if (item.type === "phone") {
      return (
        <ContactField key={item.value}>
          {item.text} <ContactLink href={`tel:${item.value}`}>{item.value}</ContactLink>
        </ContactField>
      );
    } else if (item.type === "email") {
      return (
        <div key={item.value}>
          <ContactField>{item.text}</ContactField>
          <ContactField>
            <ContactLink href={`mailto:${item.value}`}>{item.value}</ContactLink>
          </ContactField>
        </div>
      );
    }
    return null;
  };

  return (
    <ContactUsWrapper>
      {contactInfo.map(formatContactItem)}
    </ContactUsWrapper>
  )
}

export default ContactUs