const { Router } = require("express"); /* 1 */
const router = Router(); /* 2 */
const Product = require("../models/product"); /* 3 */
//tenemos que conectar nuestro model correspondiente

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();

    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    // const id = req.params.id
    const {id} = req.params //64ed43d04ca8c73767cf6d6c
    
    
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
