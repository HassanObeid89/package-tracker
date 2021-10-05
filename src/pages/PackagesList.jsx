import Card from "./components/Card";
import { FaRegSmileBeam } from "react-icons/fa";

// This could be on a separate folder to make it easier to organize.
export default function PackagesList({ data }) {
  const cards = data.map((parcel) => <Card key={parcel.id} parcel={parcel} />);
  const name = data[0].user_name.split(" ");

  return (
    <div className="packages-wrapper">
      <section>
        <FaRegSmileBeam />
        <h2>Thanks!!!s {name[0]} for using boxTraker</h2>
      </section>
      <ul>{cards}</ul>
    </div>
  );
}
