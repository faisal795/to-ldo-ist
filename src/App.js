

import React, { useState } from "react";
import ToDo from "./ToDo";

const App = () => {
    const [inputList, setinputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setinputList(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setinputList("");
    }
    const deleteItem = (id) => {
        console.log('Deleted');
        setItems((oldItems) => {
            return oldItems.filter((arrElm, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>To-Do List</h1>
                    <br />
                    <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}>+</button>
                    <ol>
                       
                        {Items.map((itemsVal, index) => {
                          return <ToDo key={index} id={index} onSelect={deleteItem} text={itemsVal}/>;

                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;
