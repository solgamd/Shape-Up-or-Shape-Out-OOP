const express = require('express');

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(post, () => {
    console.log(`Server listning on port: ${port}`)
})