import Service from "../models/Service.js";

export const createService = async (req, res, next) => {
    const newService = new Service(req.body);

    try{
        const savedService = await newService.save();
        res.status(200).json(savedService);
    }catch(err) {
        next(err);
    } 
}

export const updateService = async (req, res, next) => {

    try{
        const updateService = await Service.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
             {new:true}
              );

        res.status(200).json(updateService);
    }catch(err) {
        next(err);
    } 
}

export const deleteService = async (req, res, next) => {

    try{
        await Service.findByIdAndDelete(req.params.id);

        res.status(200).json("Serviço Deletado");
    }catch(err) {
        next(err);
    } 
}

export const getService = async (req, res, next) => {

    try{
        const service = await Service.findById(req.params.id);

        res.status(200).json(service);
    }catch(err) {
        next(err);
    } 
}

export const getAllservice = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const query = {
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999 },
    };

    const services = await Service.find(query).limit(parseInt(limit));
    res.status(200).json(services);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Service.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  }

  export const countByType = async (req, res, next) => { // criando tipos de estabelecimentos, comida, mercado etc...
    try {
      const constructionCount = await Service.countDocuments({ type: "construction" });
      const foodCount = await Service.countDocuments({ type: "food" });
      const pharmacyCount = await Service.countDocuments({ type: "pharmacy" });
      const toolCount = await Service.countDocuments({ type: "tool" });
      const marketCount = await Service.countDocuments({ type: "market" });
  
      res.status(200).json([
        { type: "construction", count: constructionCount },
        { type: "foods", count: foodCount },
        { type: "pharmacys", count: pharmacyCount },
        { type: "tools", count: toolCount },
        { type: "markets", count: marketCount },
      ]);
    } catch (err) {
      next(err);
    }
  };

