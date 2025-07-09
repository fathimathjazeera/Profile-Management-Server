import users from "../models/user.js";

export const createProfile = async (req, res) => {
const {name,gender,age,avatar,bio} = req.body
  const data = await users.create({
name,
gender,
age,
avatar,
bio
  });
  console.log(data,"data");
  res.status(200).json({
    status: "success",
    message: "successfully created profile",
    data: data,
  });
};


export const fetchAllProfiles = async (req, res) => {
    const data = await users.find({});
    console.log(data,"data");
    res.status(200).json({
      status: "success",
      message: "successfully fetched all profiles",
      data: data,
    });
  };


  

 export const fetchSingleProfile = async (req, res) => {
    const {userId} = req.params
    const data = await users.findById(userId);
    res.status(200).json({
      status: "success",
      message: "successfully fetched all profiles",
      data: data,
    });
  };

   
