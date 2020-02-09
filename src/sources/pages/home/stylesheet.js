const style = {
    container: {
        width: "100%",
        height: "100%",
        overflow: "hidden"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "5%"
    },
    uri: {
        width: "80%",
        height: "100%",
        outline: "none",
        border: "none",
        backgroundColor: "rgb(245, 245, 245)",
        padding: "0px 10px",
        fontSize: 14,
        color: "#444444"
    },
    submit: {
        width: "20%",
        outline: "none",
        border: "none",
        backgroundColor: "rgb(0, 196, 168)",
        fontSize: 14,
        color: "#444444",
        "&:hover": {
            backgroundColor: "rgb(0, 210, 180)",
            cursor: "pointer"
        },
        "&:active": {
            transform: "scale(0.9)"
        }
    },
    iframe: {
        width: "100%",
        height: "95%"
    }
};
export default style;