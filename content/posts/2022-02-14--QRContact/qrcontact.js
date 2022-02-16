import React from "react";
import debounceRender from 'react-debounce-render';
import { useForm } from "react-hook-form";
import QRCode from "react-qr-code";
import VCard from 'vcard-creator';


/*
 * @author Blake Vente
 */

// styles
const marginPad = {
  margin: "10px",
  padding: "10px",
}

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
  ...marginPad
}

const fillContainer = {
  backgroundColor: "white",
  width: "276px", // 256 + 2 * padding
  ...marginPad
}


function ContactQRCode({ firstName, lastName, phoneNumber, title, website, email, company }) {

  const myVCard = new VCard()

  myVCard
    .addName(lastName, firstName)
    .addCompany(company)
    .addJobtitle(title)
    .addEmail(email)
    // strip out any non-numeric chars from phone number
    // gets coerced to a string so no need for parsing the int
    .addPhoneNumber(phoneNumber.replace(/\D/g, ''), 'PREF')
    .addURL(website);

  return (
    <div style={fillContainer} >
      <QRCode value={myVCard.toString()} />
    </div>
  )
}
const DbounceContactQRCode = debounceRender(ContactQRCode, 500);

export default function QRContact() {

  const formPlaceholders = {
    firstName: "First Name",
    lastName: "Last Name",
    phoneNumber: "999-999-9999",
    title: "Job Title",
    company: "Your Company, Inc",
    email: "email@example.com",
    website: "https://example.com",
  };

  // same keys but with the values cleared
  const formdefaultValues = Object.fromEntries(Object.keys(formPlaceholders).map((k) => [k, ""]));

  const { register, watch } = useForm(
    { defaultValues: formdefaultValues }
  );

  return (
    <div>
      <form>
        {
          Object.keys(formPlaceholders).map(
            (registerKey, i) =>
              <input key={i}
                style={inputField}
                placeholder={formPlaceholders[registerKey]}
                {...register(registerKey)}
              />
          )}
      </form>
      <DbounceContactQRCode {...watch()} />
    </div>
  );
}
