module.exports={
    createPost: (req, res) => {
        const db = req.app.get('db');
        const time_posted = new Date().toUTCString().split(' ').splice(1, 4).join(' ');
        const {images, item, beginning_year, ending_year, description, price, category} = req.body;
        db.create_post([req.session.user.id, category, item, time_posted, beginning_year, ending_year, price, description, images])
        .then(() => res.status(200).send('post created'))
        .catch(err=> console.log('error in create post controller', err))
    },
    getAllPosts: (req, res) => {
        const db = req.app.get('db');
        db.get_all_posts()
        .then(posts => res.status(200).send(posts))
        .catch(err => console.log('error in get all posts controller', err))
    }
}