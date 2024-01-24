import Laporan from "../models/LaporanModels.js";

export const getLaporan = async(req, res) =>{
    try {
        const response = await Laporan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getLaporanById = async(req, res) =>{
    try {
        const response = await Laporan.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createLaporan = async(req, res) => {
    try {
        await Laporan.create(req.body);
        res.status(201).json({msg: "Laporan created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateLaporan = async(req, res) => {
    try {
        await Laporan.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(201).json({msg: "Laporan updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteLaporan = async(req, res) => {
    try {
        await Laporan.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"Laporan deleted"});
    } catch (error) {
        console.log(error.message);
    }
}