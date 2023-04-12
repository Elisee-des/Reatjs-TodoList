import React from 'react';

function FormInput(props) {
    return (
        <div>
            <form autocomplete="">
                <input type="text" required name="todos" id="todos" placeholder="Que voulez-vous faire ?"/>
                <button type="submit">Créer</button>
            </form>
        </div>
    );
}

export default FormInput;