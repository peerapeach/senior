const variables = {
    development: {
        googleApiKey: 'AIzaSyD345oI4VfyZb3u-6hrTlRstQlq5-kYp_g'
    },
    production: {
        googleApiKey: 'AIzaSyD345oI4VfyZb3u-6hrTlRstQlq5-kYp_g'
    }
};
 
const getEnvVariables = () => {
    if (__DEV__) {
        return variables.development; // return this if in development mode
    }
    return variables.production; // otherwise, return this
};
 
export default getEnvVariables;