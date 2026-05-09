import express from "express";
import {
    getAllSpeakers,
    createSpeaker,
    getSpeakerById,
    updateSpeaker,
    deleteSpeaker
} from "../controllers/speakerController.js";

const router = express.Router();

router.get("/", getAllSpeakers);
router.post("/", createSpeaker);
router.get("/:id", getSpeakerById);
router.put("/:id", updateSpeaker);
router.delete("/:id", deleteSpeaker);

export default router;
