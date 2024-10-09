import Product from './product.model.js';

export const getProduct = async (req,res)=>{
    try{
        const product = await Product.find();
        res.status(200).json(product);

    }catch(error){
        console.log("Error : " +  error);
        res.status(500).json(error)

    }
}

export const getById = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }); 
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Server error', error });
    }
};

export const addProduct = async (req, res) => {
    const { id ,name, price, image , description , date} = req.body;

    try {
        const createdUser = new Product({
            id,
            name,
            price,
            image,
            description,
            date
        });

        await createdUser.save();

        res.status(201).json({ message: "User created successfully"});
    } catch (error) {
        console.error("Error during add product:", error);
        res.status(500).json({ message: "Server error during add product" });
    }
};


export const editById = async(req,res) =>{
    const product = await Product.findOne({_id:req.params.id})
    product.id = req.body.id
    product.name = req.body.name
    product.image = req.body.image
    product.price = req.body.price
    product.description = req.body.description
    product.date = req.body.date

    const ans = await product.save();
    res.status(200).json(ans);
}

export const deleteById = async(req,res) =>{
    const ans = await Product.deleteOne({_id:req.params.id});
    // res.status(200).json(ans);
    res.json({message : "Deleted Sucessfully"});
}

export const deleteAll = async(req,res) =>{
    const ans = await Product.deleteMany({});
    res.json({message : "Deleted All sucessfully"});
}
