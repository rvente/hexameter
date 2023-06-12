import React from "react";


/*
 * @author Blake Vente
 */

// styles
const marginPad = {
  margin: "10px",
  padding: "10px",
}

const fillContainer = {
  backgroundColor: "white",
  width: "100%", // 256 + 2 * padding
  whiteSpace: 'pre-line',
  ...marginPad
}

// if I want to add a copy button later https://stackoverflow.com/a/74018673
export default function ShareFromUrl() {
   if (typeof window === `undefined`) {
      return <pre>It doesn't look like anything to me</pre>;
   }
  const maybeHref = window?.location?.href ?? "";

    const currentLocation = new URL(maybeHref).searchParams.get("urlData") ?? "I got nothing to show. The query parameter `urlData` was empty";
  return (
    <pre style={fillContainer}>
      {decodeURI(currentLocation)}
    </pre>
  );
}
