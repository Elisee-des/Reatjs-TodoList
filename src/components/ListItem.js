import React from 'react';

function ListItem(props) {
    return (
        <li>
            <label htmlFor="">
                <input type="checkbox" name="" id=""/>
                    Cooking to do
                </label>
                <button >Editer</button>
            </li>
    );
}

export default ListItem;