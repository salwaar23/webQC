import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../assets/image 1.png";
import { useNavigate, Link } from "react-router-dom";

const login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const logIn = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/login", {
            username,
            password,
          });
          setRole(response.data.role);
          
            switch(role){
                case "admin":
                    navigate("/admin");
                    break;
                case "manager":
                    navigate("/manager");
                    break;
                case "staf":
                    navigate("/staf");
                    break;
                default:
                    navigate("/");
                    break;
            }
            alert("Login berhasil!");
        } catch (error) {
            console.log(error);
        }
      };


    return(
        <div className="">
            <div className="flex justify-center text-6xl italic mt-32">Aplikasi Pengelolaan Kualitas Produk</div>
            <div className="inline-flex">
                <div className="mt-24 ml-[250px]">
                   <form onSubmit={logIn}> <label className="font-bold">Username</label>
                    <div><input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="username"
                      class="mb-5 w-72 bg-slate-200 rounded-xl hover:bg-slate-100 p-2"
                    /></div>
                    <label className="font-bold">Password</label>
                    <div><input
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="w-72 bg-slate-200 rounded-xl hover:bg-slate-100 p-2"
                    /></div>
                    <button type="submit" className="bg-blue-500 w-20 mt-10 text-center rounded-md py-1 text-white ml-24">Login</button>
                    </form>
                </div>
                <div className="ml-[250px]">
                    <img className="h-[400px] w-[400px]" src={image}/>
                </div>
            </div>
        </div>
    );
};

export default login;