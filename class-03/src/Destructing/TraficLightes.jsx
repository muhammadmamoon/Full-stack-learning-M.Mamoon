import React from 'react';

const lights = {
    red: "red",
    Yellow: "Yellow",
    Green: "Green"
}

function TraficLightes({ red, Green, Yellow }) {
    return (
        <div>
            <p>The light is {red} Stop</p>
            <p>The light is {Green} Run</p>
            <p>The light is {Yellow} Be ready</p>
        </div>
    );
}

export default TraficLightes;
