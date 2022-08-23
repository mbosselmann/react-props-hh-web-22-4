import Header from "./components/Header.js";
import Button from "./components/Button.js";
import List from "./components/List.js";
import Item from "./components/Item.js";

export default function App() {
  return (
    <>
      <Header />
      <Button text="Submit" type="submit" />
      <Button text="Click!" type="button" />
      <Button text="Reset" type="reset" danger />
      <Button text="No danger" type="button" danger={false} />
      <List color="papayawhip">
        <Item name="Bulbasaur" />
        <Item name="Charmander" />
        <Item name="Squirtle" />
      </List>
      <List color="skyblue">
        <Item name="Bulbasaur" />
        <Item name="Charmander" />
        <Item name="Squirtle" />
      </List>
    </>
  );
}
