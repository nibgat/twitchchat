import React, { useState } from 'react';
import injectSheet from 'react-jss';
import style from './stylesheet';
const NoStyledHome = ({ classes }) => {
    const [tempUri, setTempUri] = useState("cay_core");
    const [uri, setUri] = useState("cay_core");
    return  <div
        className={classes.container}
    >
        <div
            className={classes.header}
        >
            <input
                className={classes.uri}
                type="text"
                value={tempUri}
                onChange={e => setTempUri(e.target.value)}
                onKeyPress={e => e.key === "Enter" ? setUri(tempUri) : null}
            />
            <button
                className={classes.submit}
                onClick={() => setUri(tempUri)}
            >
                Bağlan
            </button>
        </div>
        <iframe
            className={classes.iframe}
            frameborder="0"
            scrolling="no"
            id="chat_embed"
            src={"https://www.twitch.tv/embed/" + uri + "/chat"}
            height="500"
            width="350">
        </iframe>
    </div>
};
const Home = injectSheet(style)(NoStyledHome);
export default Home;