import { Item } from "./types/item";
import { useState } from "react";
import { ListItem } from "./components/ListItem";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea";
const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {/* Área de adcionar nota tarefa */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
