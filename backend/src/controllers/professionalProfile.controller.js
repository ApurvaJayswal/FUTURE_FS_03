//<------------------ProfessionalProfile CONTROLLER-------------------->

import express from "express";
const router = express.Router();

// Mock data for professional profiles
const mockProfessionalProfiles = [
  { _id: "1", name: "Profile 1", id: "profile1" },
  { _id: "2", name: "Profile 2", id: "profile2" }
];

// <----------------------------------CRUD Operation for ProfessionalProfiles----------------------------------->

// post ProfessionalProfiles to the database 
router.post("/", (req, res) => {
    const newProfile = { _id: (mockProfessionalProfiles.length + 1).toString(), ...req.body };
    mockProfessionalProfiles.push(newProfile);
    return res.status(201).send(newProfile);
});

// get all ProfessionalProfiles from database
router.get("/", (req, res) => {
    return res.status(200).send(mockProfessionalProfiles);
});

// get ProfessionalProfiles by Id
router.get("/:id", (req, res) => {
    const profile = mockProfessionalProfiles.find(p => p._id === req.params.id);
    if (profile) return res.status(200).send(profile);
    return res.status(404).send("ProfessionalProfile not found");
});

// get ProfessionalProfiles by domestic Id
router.get("/query/:id", (req, res) => {
    const profiles = mockProfessionalProfiles.filter(p => p.id === req.params.id);
    return res.status(200).send(profiles);
});

// Update the ProfessionalProfiles in the database
router.patch("/:id", (req, res) => {
    const idx = mockProfessionalProfiles.findIndex(p => p._id === req.params.id);
    if (idx === -1) return res.status(404).send("ProfessionalProfile not found");
    mockProfessionalProfiles[idx] = { ...mockProfessionalProfiles[idx], ...req.body };
    return res.status(200).send(mockProfessionalProfiles[idx]);
});

// delete the ProfessionalProfiles from the database
router.delete("/:id", (req, res) => {
    const idx = mockProfessionalProfiles.findIndex(p => p._id === req.params.id);
    if (idx === -1) return res.status(404).send("ProfessionalProfile not found");
    const removed = mockProfessionalProfiles.splice(idx, 1);
    return res.status(204).send(removed[0]);
});

//export
export default router;