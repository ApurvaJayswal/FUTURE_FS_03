//<------------------Professional CONTROLLER-------------------->

import express from "express";
const router = express.Router();

// Mock data for professionals
const mockProfessionals = [
  { _id: "1", name: "Alice Professional", id: "domestic1" },
  { _id: "2", name: "Bob Expert", id: "domestic2" }
];

// <----------------------------------CRUD Operation for Professionals----------------------------------->

// post Professionals to the database 
router.post("/", (req, res) => {
    const newProf = { _id: (mockProfessionals.length + 1).toString(), ...req.body };
    mockProfessionals.push(newProf);
    return res.status(201).send(newProf);
});

// get all Professionals from database
router.get("/", (req, res) => {
    return res.status(200).send(mockProfessionals);
});

// get Professionals by Id
router.get("/:id", (req, res) => {
    const prof = mockProfessionals.find(p => p._id === req.params.id);
    if (prof) return res.status(200).send(prof);
    return res.status(404).send("Professional not found");
});

// get Professionals by domestic Id
router.get("/query/:id", (req, res) => {
    const profs = mockProfessionals.filter(p => p.id === req.params.id);
    return res.status(200).send(profs);
});

// Update the Professionals in the database
router.patch("/:id", (req, res) => {
    const idx = mockProfessionals.findIndex(p => p._id === req.params.id);
    if (idx === -1) return res.status(404).send("Professional not found");
    mockProfessionals[idx] = { ...mockProfessionals[idx], ...req.body };
    return res.status(200).send(mockProfessionals[idx]);
});

// delete the Professionals from the database
router.delete("/:id", (req, res) => {
    const idx = mockProfessionals.findIndex(p => p._id === req.params.id);
    if (idx === -1) return res.status(404).send("Professional not found");
    const removed = mockProfessionals.splice(idx, 1);
    return res.status(204).send(removed[0]);
});

//export
export default router;