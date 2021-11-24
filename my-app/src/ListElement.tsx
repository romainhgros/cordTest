import { DataContent, } from "./utils/Types";

export function ListElement(dataContent: DataContent) {
  return (
    <div className="list-box">
      <img className="list-image" src={dataContent.thumbnail} alt="" />
      <div className="list-data">
        <a className="list-headline" href={dataContent.url}>
          {dataContent.headline}
        </a>
        <p className="list-website">{dataContent.website}</p>
      </div>
    </div>
  );
}
