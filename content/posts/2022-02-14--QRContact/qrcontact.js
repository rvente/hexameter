import React from "react";
import debounceRender from 'react-debounce-render';
import { useForm } from "react-hook-form";
import QRCode from "react-qr-code";
import VCard from 'vcard-creator';


/*
 * @author Blake Vente
 */

// styles
const inputField = {
  width: "50%",
  fontSize: "1rem",
  borderRadius: "10px",
  color: "var(--theme-ui-colors-text)",
  borderColor: "var(--theme-ui-colors-text)",
  borderStyle: "solid",
  borderWidth: "1px",
  backgroundColor: "var(--theme-ui-colors-transparent,transparent)",
  display: "block",
  margin: "10px",
  padding: "10px",
}

const fillContainer = {
  backgroundColor: "white",
  width: "276px", // 256 + 2 * padding
  padding: "10px"
}


function ContactQRCode({ firstName, lastName, phoneNumber, title, website, email, company}) {

  // Define a new vCard
  const myVCard = new VCard()

  // Some variables

  myVCard
    // Add personal data
    .addName(lastName, firstName)
    // Add work data
    .addCompany(company)
    .addJobtitle(title)
    .addEmail(email)
    .addPhoneNumber(phoneNumber.replace(/\D/g,''), 'PREF')
    .addURL(website);

  console.log(myVCard.toString());

  return (
    <div style={fillContainer} >
      <QRCode value={myVCard.toString()} />
    </div>
  )
}
const DbounceContactQRCode = debounceRender(ContactQRCode, 500);

export default function QRContact() {

  const formFields = {
    firstName: "First Name",
    lastName: "Last Name",
    phoneNumber: "999-999-9999",
    title: "Job Title",
    company: "Your Company, Inc",
    email: "email@example.com",
    website: "https://example.com",
  };

  const { register, watch } = useForm(
    { defaultValues: formFields }
  );

  return (
    <div>
      <form >
        {/* register your input into the hook by invoking the "register" function */}
        {Object.keys(formFields).map( (registerKey, i) => <input key={i} style={inputField} {...register(registerKey)} /> )}
      </form>
      <DbounceContactQRCode {...watch()} />
    </div>
  );
}
