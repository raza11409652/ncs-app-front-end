import { useState } from "react";
import { createNewLink } from "../../apis/link";
import { notifySuccess } from "../../component/alert";
import { isValidURL } from "../../utils/url.validator";

const HomePageApp = () => {
  const x = {
    longUrl: "",
    shortUrl: "",
    timestamp: 0,
    qrCode: "",
    encoded: "",
    _id: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  };
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState(x);
  const validateUrl = (e) => {
    const flag = isValidURL(e);
    setError(!flag && e ? "Invalid URL" : "");
  };

  /**
   * Submit form
   */

  const submitForm = async () => {
    const body = { long_url: url };
    try {
      const result = await createNewLink(body);
      setResponse(result);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * On click copy content to clipboard
   * @param response
   */
  const copyToClipboard = (response) => {
    navigator.clipboard.writeText(response.shortUrl);
    notifySuccess("Link copied success");
  };

  /**
   * Download bas64 image to PNG on click
   * @param base64Data
   */

  function downloadBase64File(base64Data) {
    const linkSource = `${base64Data}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = "qr_" + new Date().getTime() + ".png";
    downloadLink.click();
    // notifySuccess("Link copied success");
  }
  return (
    <>
      <div>
        <div className="container p-5">
          <div className="form-wrapper">
            <div className="link-form">
              <h5 className="mb-3">Link Shortener and QR Generator</h5>
              <input
                className={`form-control ${
                  url ? (error ? "is-invalid" : "is-valid") : ""
                }`}
                placeholder="Please enter a valid URL"
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                onKeyUp={() => {
                  validateUrl(url);
                }}
              />
              {error && <span className="link-error">{error}</span>}
              <div className="mt-4">
                <button
                  className="btn btn-primary "
                  onClick={submitForm}
                  disabled={!url || (error && url) ? true : false}
                >
                  Create
                </button>
              </div>

              <div className="response">
                {response.shortUrl ? (
                  <>
                    <div className="short-link">
                      <p>{response.shortUrl}</p>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => {
                          copyToClipboard(response);
                        }}
                      >
                        copy
                      </button>
                    </div>
                    <div className="qr-code">
                      <img src={response.qrCode} alt={response.encoded}></img>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => {
                          downloadBase64File(response.qrCode);
                        }}
                      >
                        Download PNG
                      </button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageApp;
