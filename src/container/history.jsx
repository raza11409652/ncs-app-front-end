import { useEffect, useState } from "react";
import { getLinks } from "../apis/link";
import SingleLinkView from "../component/link/single.view";

const History = () => {
  const [response, setResponse] = useState(null);

  const fetch = async () => {
    const data = await getLinks("", 1);
    setResponse(data);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="container mt-2">
        <div className="alert alert-warning">
          <>History</>
        </div>
        <>
          {response?.["records"].map((item, index) => {
            return <SingleLinkView key={index} item={item} />;
          })}
        </>
      </div>
    </>
  );
};
export default History;
