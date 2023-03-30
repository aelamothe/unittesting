
function greet(name) {
    let statement = "";
    if (typeof(name) == 'string') {
        if (name == name.toUpperCase()) {
            statement = "HELLO " + name;
        }
        else {
            statement = "Hello " + name;
        }
    }
    else if (Array.isArray(name)) {
        statement = "Hello " + name.join(', ');
    }
    else {
        statement = "Hello there";
    }
    return statement;
}