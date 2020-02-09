import express, { Request, Response } from "express";
import User from "@server/models/User";
const router = express.Router();

router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ apiHealth: true });
});

router.get("/user", (req: Request, res: Response) => {
  res.status(200).json({ user: User.getName() });
});

export default router;
