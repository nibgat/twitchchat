import React from 'react';
import style from './stylesheet';
import injectSheet from 'react-jss';
import Home from './pages/home';
const NoStyledApp = ({ classes }) => {
    return <div className={classes.container}>
        <Home/>
    </div>
};
const App = injectSheet(style)(NoStyledApp);
export default App;