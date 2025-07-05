const asyncHandler = require("express-async-handler");


//@desc Get all Contact
//@route Get /api/contacts
//@access public

const getContacts = asyncHandler ( async(req, res)=>{
  res.status(200).json({message: "Get all contacts"});
} )

//@desc Create New Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler( async (req, res)=>{

  console.log("The request of body  " , req.body);
  const {name, email, phone} = req.body;
 if (!name || !email || !phone) {
  res.status(400);
  throw new Error("All fields are mandatory!");
}

  
  res.status(201).json({message: "Create contacts"});
} )
//@desc Get New Contact
//@route Get /api/contacts/:id
//@access public
const getContact = asyncHandler (async(req,res)=>{
  res.status(201).json({message: `GET contacts for ${req.params.id}`});
} )

//@desc Update New Contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler(async  (req,res)=>{
  res.status(201).json({message: `Update Contacts form ${req.params.id}`});
 })

//@desc Delete New Contact
//@route Delete /api/contacts
//@access public
const deleteContact = asyncHandlerasync() ( (req,res) => {
  res.status(201).json({message:  `Delete contacts ${req.params.id}` });
 })

module.exports = { getContacts , createContact ,getContact , updateContact , deleteContact  };