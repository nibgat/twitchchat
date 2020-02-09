export const WEB_SOCKET = "ws://localhost:4000/graphql";
export const REST_API = "http://localhost:4000/";

// Connection State:
export let connection = null;
export const setConnection = (state) => {
    connection = state;
}

// Apollo Client:
export let apolloClient = null;
export const setApolloClient = (data,link) => {
    apolloClient = data;
    if(link) {
        apolloClient.link = link;
        apolloClient.defaultOptions = {
            query: {
                fetchPolicy: "no-cache"
            }
        };
    }
}

// Apollo Subscription:
export let CLIENT = null;
export const setClient = (client) => {
    CLIENT = client;
}

// Apollo Link:
export let LINK = null;
export const setLink = (link) => {
    LINK = link;
}