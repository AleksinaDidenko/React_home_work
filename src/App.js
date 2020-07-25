import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import { ColorButton } from "./components/CustomButton/index";
import Blocks from "./components/Blocks";

import "./App.scss";

// function App() {
//   return(
//     <div className="Wrapper">
//         <p>Function component</p>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    newInputText: "",
    blocks: [
      {
        id: 1,
        text: "block №1",
        done: false,
        deleted: false,
      },

      {
        id: 2,
        text: "block №2",
        done: false,
        deleted: false,
      },
    ],
  };
  inputChange = (event) => {
    this.setState({
      newInputText: event.target.value,
    });
  };

  addBlock = () => {
    this.setState({
      blocks: [
        ...this.state.blocks,
        {
          id: new Date().getTime(),
          text: this.state.newInputText,
          done: false,
        },
      ],
      newInputText: "",
    });
  };

  doneBlock = (event, id) => {
    this.setState({
      blocks: this.state.blocks.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            done: event.target.checked,
          };
        }
        return elem;
      }),
    });
  };

  deleteBlock = (id) => {
    this.setState(
      {
        blocks: this.state.blocks.map((elem) => {
          if (elem.id === id) {
            return {
              ...elem,
              deleted: true,
            };
          }
          return elem;
        }),
      },
      () => console.log(this.state.blocks)
    );
  };

  render() {
    const { newInputText, blocks } = this.state; //деструктуризация для сокращения кода
    return (
      <>
        <div className="Wrapper">
          <div className="blocks">
            <h1>My homework blocks</h1>
            <div className="filterButtons">
              <Button variant="contained">all</Button>
              <ColorButton variant="contained">done</ColorButton>
              <Button variant="contained" color="primary">
                in progress
              </Button>
              <Button variant="contained" color="secondary">
                deleted
              </Button>
            </div>
            {blocks.filter(elem => elem.deleted === false).map((elem) => (
              <div className={`block ${elem.done ? "done" : ""}`} key={elem.id}>
                <Checkbox
                  color="primary"
                  checked={elem.done}
                  onChange={(event) => {
                    this.doneBlock(event, elem.id);
                  }}
                />
                <p>{elem.text}</p>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => this.deleteBlock(elem.id)}
                >
                  delete
                </Button>
              </div>
            ))}
            <form>
              <input
                type="text"
                value={newInputText}
                onChange={this.inputChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={this.addBlock}
              >
                add block
              </Button>
            </form>
          </div>
        </div>
        {/* <div className="Blocks__wrapper">
          <Blocks items={4} column={2}/>
          <Blocks items={9} column={3} />
        </div> */}
      </>
    );
  }
}

export default App;
