
import { useParams } from "react-router";
import Card from "./Card";
export default function PackagesList({loading,data,error}) {
  // const {loading, data, error} = fetch
  // const uri = 'https://my.api.mockaroo.com/insta-orders.json?key=e49e6840'
  // const {loading, data, error} = useFetch()
  const cards = data.map((parcel) => <Card key={parcel.id} parcel={parcel} />)
  return (
    <div className="packages-wrapper">
      {loading && 'loading...'}
      {error && JSON.stringify(error, null, 2)}
      <ul>{cards}</ul>
    </div>
  );
}
