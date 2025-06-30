import express from "express";
const router = express.Router();

// Mock data for users
const mockUsers = [
  { _id: "1", name: "John Doe", email: "john@example.com" },
  { _id: "2", name: "Jane Smith", email: "jane@example.com" }
];

// <----------------------------------CRUD Operation for users----------------------------------->

router.get("/", (request, response) => {
  // Return all mock users
  return response.send(mockUsers);
});

router.get("/:id", (request, response) => {
  // Find user by id
  const user = mockUsers.find(u => u._id === request.params.id);
  if (user) return response.send(user);
  response.status(404).send("User not found");
});

router.get("/query/:email", (request, response) => {
  // Find user by email
  const user = mockUsers.filter(u => u.email === request.params.email);
  return response.send(user);
});

router.post("/", (request, response) => {
  // Add a new user to mock data
  const newUser = { _id: (mockUsers.length + 1).toString(), ...request.body };
  mockUsers.push(newUser);
  return response.send(newUser);
});

router.patch("/:id", (request, response) => {
  // Update user in mock data
  const idx = mockUsers.findIndex(u => u._id === request.params.id);
  if (idx === -1) return response.status(404).send("User not found");
  mockUsers[idx] = { ...mockUsers[idx], ...request.body };
  return response.send(mockUsers[idx]);
});

router.delete("/:id", (request, response) => {
  // Delete user from mock data
  const idx = mockUsers.findIndex(u => u._id === request.params.id);
  if (idx === -1) return response.status(404).send("User not found");
  const deleted = mockUsers.splice(idx, 1);
  return response.send(deleted[0]);
});

//export
export default router;