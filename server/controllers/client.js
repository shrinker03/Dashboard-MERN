import Product from "../models/Product.js";
import ProductStats from "../models/ProductStats.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStats.find({
                    productId: product._id
                })
                return {
                    ...product._doc,
                    stat,
                }
            })
        )

        res.status(200).json(productsWithStats);  
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
