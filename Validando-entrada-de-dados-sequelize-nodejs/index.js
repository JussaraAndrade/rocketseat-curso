const app = require('express')();
const bodyParser = require('body-parser');

const Post = require('./models/post');

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    try{
        const { title, content, author_email, author_name, author_ip } = req.body;
        const post = await Post.create({
            title,
            content,
            author_name,
            author_email,
            author_ip
        });

        return res.status(200).send(post);
    } catch(err){
        return res.status(400).send({ error: err });
    }
});

app.listen(3000);