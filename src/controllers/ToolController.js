const Tool = require("../models/Tool");

module.exports = {
  async index(req, res) {
    const tool = await Tool.find().sort("-createdAt");
    return res.json(tool);
  },

  async store(req, res) {
    // const { author, place, description, hashtags } = req.body;
    // const { size, key, location: url = "", filename: image } = req.file;
    // let toolObj = {};
    //
    // if (typeof key === "undefined") {
    //   await sharp(req.file.path)
    //     .resize(500)
    //     .jpeg({ quality: 70 })
    //     .toFile(path.resolve(req.file.destination, "resized", fileName));
    //
    //   fs.unlinkSync(req.file.path); // Apaga do diretório uploads (fotos sem resize)
    //
    //   const [name] = image.split(".");
    //   let fileName = `${name}.jpg`;
    //   fileName = fileName.replace(" ", "");
    //
    //   toolObj = {
    //     author,
    //     place,
    //     description,
    //     hashtags,
    //     image: fileName,
    //     key: fileName,
    //     size,
    //     url
    //   };
    // } else {
    //   toolObj = {
    //     author,
    //     place,
    //     description,
    //     hashtags,
    //     image: key,
    //     key,
    //     size,
    //     url
    //   };
    // }
    //
    // const tool = await Tool.create(toolObj);
    //
    // return res.json(tool);
  },

  async remove(req, res) {
    // const tool = await Tool.findById(req.params.id);
    // await tool.remove();
    // return res.send(`Tool ${req.params.id} has been deleted!`);
  }
};
