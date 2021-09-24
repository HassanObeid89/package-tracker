import Card from "./Card";
import { FaRegSmileBeam } from "react-icons/fa";
export default function PackagesList({ data }) {
  const cards = data.map((parcel) => <Card key={parcel.id} parcel={parcel} />);
  const name = data[0].user_name.split(" ");
  return (
    <div className="packages-wrapper">
      <section>
        <FaRegSmileBeam />
        <h2>Thanks {name[1]} for using boxTraker</h2>
      </section>
      <ul>{cards}</ul>
    </div>
  );
}
