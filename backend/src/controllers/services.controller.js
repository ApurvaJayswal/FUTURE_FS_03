//<------------------Services CONTROLLER-------------------->

import express from "express";
const router = express.Router();

// Mock data for services
const mockServices = [
  { _id: "1", name: "Cleaning", id: "service1" },
  { _id: "2", name: "Plumbing", id: "service2" }
];

// <----------------------------------CRUD Operation for Servicess----------------------------------->

// post Servicess to the database 
router.post("/", (req, res) => {
    const newService = { _id: (mockServices.length + 1).toString(), ...req.body };
    mockServices.push(newService);
    return res.status(201).send(newService);
});

// get all Servicess from database
router.get("/", (req, res) => {
    return res.status(200).send(mockServices);
});

// get Servicess by Id
router.get("/:id", (req, res) => {
    const service = mockServices.find(s => s._id === req.params.id);
    if (service) return res.status(200).send(service);
    return res.status(404).send("Service not found");
});

// get Servicess by domestic Id
router.get("/query/:id", (req, res) => {
    const services = mockServices.filter(s => s.id === req.params.id);
    return res.status(200).send(services);
});

// Update the Servicess in the database
router.patch("/:id", (req, res) => {
    const idx = mockServices.findIndex(s => s._id === req.params.id);
    if (idx === -1) return res.status(404).send("Service not found");
    mockServices[idx] = { ...mockServices[idx], ...req.body };
    return res.status(200).send(mockServices[idx]);
});

// delete the Servicess from the database
router.delete("/:id", (req, res) => {
    const idx = mockServices.findIndex(s => s._id === req.params.id);
    if (idx === -1) return res.status(404).send("Service not found");
    const removed = mockServices.splice(idx, 1);
    return res.status(204).send(removed[0]);
});

//export
export default router;