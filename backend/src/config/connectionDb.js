//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "urbanclone";

//database credentials;
const USERNAME = "urbanclone";
const PASSWORD = "urbanclone";

//default app port
const PORT =   5000;

//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb://localhost:27017/${DATABASE}`;

//mongoose options for connection
const MONGOOSE_OPTIONS = {
    useUnifiedTopology:true,
    useNewUrlParser:true
}

export  {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}