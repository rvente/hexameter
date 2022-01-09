import React, { useState, useEffect } from "react";


/*
 * @author Blake Vente
 * @reference https://p5js.org/examples/simulate-particle-system.html
 */

/*
 * @source https://stackoverflow.com/a/47317538
 */



export default function Convert() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "markup": "# hello world\n## numbered list example \n1. first item\n2. second item"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const [convertReponse, setConvertResponse] = useState("");

  useEffect(() => {
    const HitConvertEndpoint = async (r) => {
      const res = await fetch("", requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error));

      setConvertResponse(JSON.parse(res)?.result);
      console.log(process.env.ENABLE_GATSBY_REFRESH_ENDPOINT);
      console.log(res);
      console.log(JSON.parse(res));
    };
    HitConvertEndpoint("");
  }, []);

  const dropShadow = { color: "rgb(214, 222, 235)", backgroundColor: "rgb(1, 22, 39)"};
  return (
    <div style={dropShadow} className="gatsby-highlight">
      <pre className="prism-code language-xml">{convertReponse}</pre>
    </div>
  )
}
