// new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

// const navColor = new Color( 'carrot', [230, 126 , 34] );
// const logoColor = new Color( );


function hex(r, g, b) {
    return '#' + (( 1 << 24 ) + ( r << 16 ) + ( g << 8 ) + b).toString(16).slice(1);
}

console.log(hex( 255, 100, 25));

function makeColor( r, g, b) {
    const color = { };
        color.r =  r;
        color.g =  g;
        color.b =  b;

    color.rgb = function () {
        const { r, g, b } = this;
    return  `rgb(${r}, ${g}, ${b})`
    };

    color.hex = function () {
        const { r, g, b } = this;
    return '#' + (( 1 << 24 ) + ( r << 16 ) + ( g << 8 ) + b).toString(16).slice(1);
    };

    return color;
}

const firstColor = makeColor(35, 255, 255)
console.log( firstColor.rgb() );
console.log( firstColor.hex() );
// 
document.querySelector('h1').style.backgroundColor = firstColor.rgb()
document.querySelector('h2').style.backgroundColor = firstColor.hex()

// 
const secondColor = makeColor(3, 100, 200)
console.log( secondColor.rgb());

document.body.style.backgroundColor = secondColor.hex()