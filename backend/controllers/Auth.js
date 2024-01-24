import Users from "../models/usersmodel.js";
import argon2 from "argon2";

export const login = async(req,res) => {
    const users = await Users.findOne({
        where:{
            username: req.body.username
        }
    });
    if(!users) return res.status(404).json({msg: "Pengguna tidak ditemukan"});
    const match = await argon2.verify(users.password, req.body.password);
    if (!match) return res.status(400).json({msg: "wrong password"})
    const uuid = users.uuid;
    const username = users.username;
    const role = users.role;
    res.status(200).json({uuid, username, role});
}


