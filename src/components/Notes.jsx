// Parent

function Parent() {
    function clicked() {
        console.log('Parent notified')
    }
return (
    <Child clicked={clicked}/>
    );
}

// Child

function Child({clicked}) {
    return (
        <button onClick={clicked}>Child Button</button>
    )
}

