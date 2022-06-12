import { faker } from "@faker-js/faker";
import List from "./List";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

export default function App() {
  const renderItem = (item) => (
    <div style={{ display: "flex" }}>
      <img src={item.avater} art={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );
  return (
    <List
      data={bigList}
      renderEmpty={<p>no items in list</p>}
      renderItem={renderItem}
    />
  );
}
