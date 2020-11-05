const express = require('express')
const dotenv = require('dotenv')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')
const morgan = require('morgan')
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors());
app.use(morgan('dev'))
//app.use(webpackMiddleware(webpack(webpackConfig)));

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