import Product from "../models/Product.js"

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (req, res) => {
    const { title, price } = req.body
    try {
        if (!title && !price) return res.sendStatus(400);

        const checkData = await Product.findOne({
            where: {
                title: title
            }
        });

        if (checkData !== null) return res.sendStatus(403);

        await Product.create({
            title: title,
            price: price
        });
        res.sendStatus(201);
        
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
}
