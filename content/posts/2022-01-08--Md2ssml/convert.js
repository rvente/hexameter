import React, { useState, useEffect, useCallback } from "react";
import debounce from 'lodash.debounce';
import axios from 'axios';

/*
 * @author Blake Vente
 */


const ENDPOINT = process.env.GATSBY_PANDOC_ENDPOINT;
const MARKUP = "# edit me! \n## numbered list example \n1. first item\n2. second item";

// styles
const darkBackground = {
  color: "rgb(214, 222, 235)",
  backgroundColor: "rgb(1, 22, 39)",
};

const inputField = {
  width: "100%",
  height: "400px",
  border: "dotted",
  padding: "-10px",
  fontSize: "1rem",
  borderRadius: "10px",
  color: "var(--theme-ui-colors-text)",
  backgroundColor: "var(--theme-ui-colors-transparent,transparent)",
}
const breakStyle = {
  margin: '20px',
};

export default function Convert() {
  const [convertReponse, setConvertResponse] = useState("");
  const [markupRequest, setMarkupRequest] = useState(MARKUP);


  const HitConvertEndpoint = async (r) => {
    const res = await axios.post(ENDPOINT, {"markup": r}, {
      headers: {
      "Content-Type": "application/json"
      }
    })
      .then(response => response?.data)
      .then(response => {console.log(response); return response})
      .catch(error => console.log('error', error));

    setConvertResponse(res.result);
  };

  const handleInputChange = (e) => {
    // on input change debounce query api
    const requestString = e.target.value;
    setMarkupRequest(requestString);
    debouncedQuery(requestString);
  };

  useEffect(() => {
    // initially set to default string
    HitConvertEndpoint(MARKUP);
  }, []);

  const debouncedQuery = useCallback(debounce(m =>
    // don't repeat api request until this many ms of pause time
    HitConvertEndpoint(m), 500), []
  )
  return (
    <section>
      <textarea 
        value={markupRequest}
        onChange={handleInputChange}
        style={inputField}>
      </textarea>
      <div style={breakStyle}></div>
      <div style={darkBackground} className="gatsby-highlight">
        <pre className="prism-code language-xml">{convertReponse}</pre>
      </div>
    </section>
  )
}
