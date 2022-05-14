import { copyToClipboard, downloadBase64File } from "../../utils/qr.util";

const SingleLinkView = ({ item }) => {
  console.log(item);
  return (
    <div className="single-view">
      <p>Long URL :{item?.["longUrl"]}</p>
      <div className="short-url">
        <p>Short URL :{item?.["shortUrl"]}</p>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => {
            copyToClipboard(item);
          }}
        >
          Copy
        </button>
      </div>
      <div className="qr">
        <img src={item?.["qrCode"]} alt="QR CODE" />
        <button
          className="btn btn-sm btn-warning"
          onClick={() => {
            downloadBase64File(item?.["qrCode"]);
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default SingleLinkView;
