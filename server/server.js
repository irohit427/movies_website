const express = require('express')
const dotenv = require('dotenv')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')
const cors = require('cors')

dotenv.config();
const app = express();
//app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening on port 4000');
})