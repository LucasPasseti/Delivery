import Product from "../models/Product.js";
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
      const constructionCount = await Service.countDocuments({ type: "construcao" });
      const foodCount = await Service.countDocuments({ type: "comida" });
      const pharmacyCount = await Service.countDocuments({ type: "farmacia" });
      const toolCount = await Service.countDocuments({ type: "ferramenta" });
      const marketCount = await Service.countDocuments({ type: "mercado" });
  
      res.status(200).json([
        { type: "Construções", count: constructionCount },
        { type: "Comidas", count: foodCount },
        { type: "Fármacias", count: pharmacyCount },
        { type: "Ferramentas", count: toolCount },
        { type: "Mercados", count: marketCount },
      ]);
    } catch (err) {
      next(err);
    }
  };

 
export const getServiceProducts = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    
    const productIds = service.products; // Array de IDs dos produtos do serviço
    
    const products = await Product.find({ _id: { $in: productIds } }); // Encontra todos os produtos cujos IDs estão no array
    
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};