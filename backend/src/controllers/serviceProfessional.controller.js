//<------------------ServiceProfessional CONTROLLER-------------------->

import express from "express";
const router = express.Router();

// Mock data for service professionals
const mockServiceProfessionals = [
  { _id: "1", name: "Service Pro 1", id: "sp1" },
  { _id: "2", name: "Service Pro 2", id: "sp2" }
];

// <----------------------------------CRUD Operation for ServiceProfessionals----------------------------------->

// post ServiceProfessionals to the database 
router.post("/", (req, res) => {
    const newSP = { _id: (mockServiceProfessionals.length + 1).toString(), ...req.body };
    mockServiceProfessionals.push(newSP);
    return res.status(201).send(newSP);
});

// get all ServiceProfessionals from database
router.get("/", (req, res) => {
    return res.status(200).send(mockServiceProfessionals);
});

// get ServiceProfessionals by Id
router.get("/:id", (req, res) => {
    const sp = mockServiceProfessionals.find(s => s._id === req.params.id);
    if (sp) return res.status(200).send(sp);
    return res.status(404).send("ServiceProfessional not found");
});

// get ServiceProfessionals by domestic Id
router.get("/query/:id", (req, res) => {
    const sps = mockServiceProfessionals.filter(s => s.id === req.params.id);
    return res.status(200).send(sps);
});

// Update the ServiceProfessionals in the database
router.patch("/:id", (req, res) => {
    const idx = mockServiceProfessionals.findIndex(s => s._id === req.params.id);
    if (idx === -1) return res.status(404).send("ServiceProfessional not found");
    mockServiceProfessionals[idx] = { ...mockServiceProfessionals[idx], ...req.body };
    return res.status(200).send(mockServiceProfessionals[idx]);
});

// delete the ServiceProfessionals from the database
router.delete("/:id", (req, res) => {
    const idx = mockServiceProfessionals.findIndex(s => s._id === req.params.id);
    if (idx === -1) return res.status(404).send("ServiceProfessional not found");
    const removed = mockServiceProfessionals.splice(idx, 1);
    return res.status(204).send(removed[0]);
});

//export
export default router;