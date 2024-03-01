import React, { useState } from "react";


const SiblingComponent = () => {
    const [text, showText] = useState('Zzz...');

    const showRedevFunc = () => showText('Redev');

    return (
        <div>
            <p>Привет,{text}</p>
            <button onClick={showRedevFunc}>Изменить текст</button>
        </div>

    )
};

export default SiblingComponent;