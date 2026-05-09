import type { Request, Response } from "express";
import type { Category } from "../types/category.js";

let categories: Category[] = [
  { 
    id: 1, 
    name: "Poster Design Competition", 
    description: "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif.",
    imageUrl: "/assets/competition/web_design.jpg"
  },
  { 
    id: 2, 
    name: "UI/UX Design Competition", 
    description: "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital.",
    imageUrl: "/assets/competition/ui_ux.jpg"
  },
  { 
    id: 3, 
    name: "Web Design Competition", 
    description: "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive.",
    imageUrl: "/assets/competition/software_dev.jpg"
  }
];

// 1. menampilkan semua category
export const getAllCategories = (req: Request, res: Response) => {
  res.json(categories);
};

// 2. menyimpan data category baru
export const createCategory = (req: Request, res: Response) => {
  try {
    const { name, description, imageUrl } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: "Nama dan deskripsi kategori harus diisi" });
    }

    const newCategory: Category = {
      id: categories.length + 1,
      name,
      description,
      imageUrl: imageUrl || ""
    };

    categories.push(newCategory);
    res.status(201).json({ message: "Kategori berhasil ditambahkan", category: newCategory });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// 3. menampilkan data category berdasarkan id
export const getCategoryById = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const category = categories.find(c => c.id === id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Kategori tidak ditemukan" });
  }
};

// 4. mengupdate data category berdasarkan id
export const updateCategory = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const index = categories.findIndex(c => c.id === id);

  if (index !== -1) {
    categories[index] = { ...categories[index], ...req.body, id };
    res.json({ message: "Kategori berhasil diupdate", category: categories[index] });
  } else {
    res.status(404).json({ message: "Kategori tidak ditemukan" });
  }
};

// 5. menghapus data category berdasarkan id
export const deleteCategory = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const initialLength = categories.length;
  categories = categories.filter(c => c.id !== id);

  if (categories.length < initialLength) {
    res.status(200).json({ message: "Kategori berhasil dihapus" });
  } else {
    res.status(404).json({ message: "Kategori tidak ditemukan" });
  }
};

