import Masuk from "../models/MasukModels.js";

export const getMasuk = async(req, res) =>{
    try {
        const response = await Masuk.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMasukById = async(req, res) =>{
    try {
        const response = await Masuk.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createMasuk = async(req, res) => {
    try {
        await Masuk.create(req.body);
        res.status(201).json({msg: "Masuk created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateMasuk = async(req, res) => {
    try {
        await Masuk.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(201).json({msg: "Masuk updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMasuk = async(req, res) => {
    try {
        await Masuk.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"Masuk deleted"});
    } catch (error) {
        console.log(error.message);
    }
}