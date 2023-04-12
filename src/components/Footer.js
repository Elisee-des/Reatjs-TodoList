import React from 'react';

function Footer(props) {
    return (
        <div class="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all"/>
                ALL
            </label>
            <p>Vous avez 0 Tâche</p>
            <button id="delete">Supprimer</button>
        </div>
    );
}

export default Footer;