import Keluar from "../models/KeluarModels.js";

export const getKeluar = async(req, res) =>{
    try {
        const response = await Keluar.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKeluarById = async(req, res) =>{
    try {
        const response = await Keluar.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKeluar = async(req, res) => {
    try {
        await Keluar.create(req.body);
        res.status(201).json({msg: "Keluar created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateKeluar = async(req, res) => {
    try {
        await Keluar.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(201).json({msg: "Keluar updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKeluar = async(req, res) => {
    try {
        await Keluar.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"Keluar deleted"});
    } catch (error) {
        console.log(error.message);
    }
}