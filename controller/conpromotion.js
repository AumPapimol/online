const db = require("../server/connection")


async function getflashsale (req, res) {
    const [flashsale] =await db.query('SELECT product_name,sell_price ,category,subcategory,stock,image FROM  products  WHERE category = "เครื่องใช้ไฟฟ้า";');

    return res.json(flashsale)
}
async function getLod (req, res) {
    const [Lod] = await db.query('SELECT product_name,sell_price ,category,subcategory,stock,image FROM  products WHERE category = "ของใช้ภายในบ้าน";');


    return res.json(Lod)
}
async function getSuper (req, res) {
    const [Super] =await db.query('SELECT product_name,sell_price ,category,subcategory,stock,image FROM  products WHERE category = "ห้องนอนและเครื่องนอน";');


    return res.json(Super)
}

async function getFood (req, res) {
    const [lod] =await db.query('SELECT product_name,sell_price ,category,subcategory,stock,image FROM  products WHERE category = "ผลิตภัณฑ์สำหรับสัตว์เลี้ยง";');
    

    return res.json(lod)
}
async function getBeauty (req, res) {
    const [lod] =await db.query('SELECT product_name,sell_price ,category,subcategory,stock,image FROM  products WHERE category = "ความงาม";');
    

    return res.json(lod)
}

async function getFashion (req, res) {
    const [lod] =await db.query('SELECT product_name,sell_price ,category,subcategory,stock,image FROM  products WHERE category = "เฟอร์นิเจอร์";');
    

    return res.json(lod)
}
async function getHousehold (req, res) {
    const [lod] =await db.query('SELECT product_name,sell_price ,category,subcategory,stock,image FROM  products WHERE category = "บ้านและสวน";');
    

    return res.json(lod)
}
module.exports = {
    getflashsale,
    getLod,
    getSuper,
    getFood,
    getFashion,
    getHousehold,
    getBeauty
};
