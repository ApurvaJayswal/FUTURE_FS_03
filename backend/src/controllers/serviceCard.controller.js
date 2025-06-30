//<------------------ServiceCard CONTROLLER-------------------->

import express from "express";
const router = express.Router();

// Mock data for service cards
const mockServiceCards = [
  { _id: "1", name: "Card 1", id: "card1" },
  { _id: "2", name: "Card 2", id: "card2" }
];

// <----------------------------------CRUD Operation for ServiceCards----------------------------------->

// post ServiceCards to the database 
router.post("/", (req, res) => {
    const newCard = { _id: (mockServiceCards.length + 1).toString(), ...req.body };
    mockServiceCards.push(newCard);
    return res.status(201).send(newCard);
});

// get all ServiceCards from database
router.get("/", (req, res) => {
    return res.status(200).send(mockServiceCards);
});

// get ServiceCards by Id
router.get("/:id", (req, res) => {
    const card = mockServiceCards.find(c => c._id === req.params.id);
    if (card) return res.status(200).send(card);
    return res.status(404).send("ServiceCard not found");
});

// get ServiceCards by domestic Id
router.get("/query/:id", (req, res) => {
    const cards = mockServiceCards.filter(c => c.id === req.params.id);
    return res.status(200).send(cards);
});

// Update the ServiceCards in the database
router.patch("/:id", (req, res) => {
    const idx = mockServiceCards.findIndex(c => c._id === req.params.id);
    if (idx === -1) return res.status(404).send("ServiceCard not found");
    mockServiceCards[idx] = { ...mockServiceCards[idx], ...req.body };
    return res.status(200).send(mockServiceCards[idx]);
});

// delete the ServiceCards from the database
router.delete("/:id", (req, res) => {
    const idx = mockServiceCards.findIndex(c => c._id === req.params.id);
    if (idx === -1) return res.status(404).send("ServiceCard not found");
    const removed = mockServiceCards.splice(idx, 1);
    return res.status(204).send(removed[0]);
});

//export
export default router;