import Card from "./Card";
import HashLoader from "react-spinners/HashLoader";

export default function PackagesList({ loading, data, error }) {
  if (loading)
    return (
      <div className="spinner">
        <HashLoader />
      </div>
    );
  if (error) return <p>ooopppss</p>;
  const cards = data.map((parcel) => <Card key={parcel.id} parcel={parcel} />);
  return (
    <div className="packages-wrapper">
      <ul>{cards}</ul>
    </div>
  );
}
