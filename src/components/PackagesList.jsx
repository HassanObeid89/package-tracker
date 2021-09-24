import Card from "./Card";
import HashLoader from "react-spinners/HashLoader";

export default function PackagesList({loading, data,error}) {
  if(loading) return <div className='spinner'><HashLoader /></div>;
  const cards = data.map((parcel) => <Card key={parcel.id} parcel={parcel} />)
  return (
    <div className="packages-wrapper">
      {error && JSON.stringify(error, null, 2)} 
      <ul>{cards}</ul>
    </div>
  );
}
