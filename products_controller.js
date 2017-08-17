module.exports = {
    create: (req, res, next) => {
        console.log("in create");
        const db = req.app.get('db');
        let { name, description, price, imageurl } = req.body;
        db.create_product(name, description, price, imageurl)
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());

    },
    getOne: (req, res, next) => {
        console.log("in getOne");
        const db = req.app.get('db');
        let { id } = req.params;
        db.read_product(id)
            .then((products) => res.status(200).send(products))
            .catch((err) => res.status(500).send(err));
    },
    getAll: (req, res, next) => {
        console.log("in getAll");
        const db = req.app.get('db');
        db.read_products()
            .then((products) => res.status(200).send(products))
            .catch((err) => res.status(500).send(err));

    },
    update: (req, res, next) => {
        console.log("in update");
        const db = req.app.get('db');
        let { id } = req.params;
        let { desc } = req.query;
        db.update_product(desc, id)
            .then((products) => res.status(200).send(products))
            .catch((err) => res.status(500).send(err));
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        console.log("in delete");
        let { id } = req.params;
        db.delete_product(id)
            .then((products) => res.status(200).send(products))
            .catch((err) => res.status(500).send(err));
    }
}