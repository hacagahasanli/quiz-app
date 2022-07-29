import React from "react";

const Context = React.createContext({
    onLogout:() => {},
    onLoggedIn:false
});

export default Context;