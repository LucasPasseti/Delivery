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

    try{
        const services = await Service.find();

        res.status(200).json(services);
    }catch(err) {
        next(err);
    } 
}