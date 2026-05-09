import express from "express";
import {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getAllCategories); //menampilkan semua category
router.post("/", createCategory); //menyimpan data category baru
router.get("/:id", getCategoryById); //menampilkan data category berdasarkan id
router.put("/:id", updateCategory); //mengupdate data category berdasarkan id
router.delete("/:id", deleteCategory); //menghapus data category berdasarkan id

export default router;  