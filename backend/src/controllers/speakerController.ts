import type { Request, Response } from "express";
import type { Speaker } from "../types/speaker.js";

let speakers: Speaker[] = [
  {
    id: 1,
    nama: "Dery Agung Triyadi",
    biodata: "Amazon Web Services (AWS) Indonesia",
    keahlian: "Cloud Infrastructure Architect"
  },
  {
    id: 2,
    nama: "Sowam Habibi",
    biodata: "Google Cloud Indonesia",
    keahlian: "Customer Engineer, Data Management"
  },
  {
    id: 3,
    nama: "Lhuqita Fazry",
    biodata: "Developer, Founder Rumah Coding Indonesia",
    keahlian: "Mobile Development"
  },
  {
    id: 4,
    nama: "M. Dendi Purwanto",
    biodata: "Software Engineer, PT. Mayar Kernel Supernova",
    keahlian: "Artificial Intelligence"
  },
  {
    id: 5,
    nama: "Danang Avan M",
    biodata: "Security Analyst, Founder | Contributor TegalSec",
    keahlian: "Cyber Security"
  }
];

// 1. menampilkan semua pembicara
export const getAllSpeakers = (req: Request, res: Response) => {
  res.json(speakers);
};

// 2. menyimpan data pembicara baru
export const createSpeaker = (req: Request, res: Response) => {
  try {
    const { nama, biodata, keahlian } = req.body;

    if (!nama || !biodata || !keahlian) {
      return res.status(400).json({ message: "Nama, biodata, dan keahlian harus diisi" });
    }

    const newSpeaker: Speaker = {
      id: speakers.length + 1,
      nama,
      biodata,
      keahlian
    };

    speakers.push(newSpeaker);
    res.status(201).json({ message: "Pembicara berhasil ditambahkan", speaker: newSpeaker });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// 3. menampilkan data pembicara berdasarkan id
export const getSpeakerById = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const speaker = speakers.find(s => s.id === id);

  if (speaker) {
    res.json(speaker);
  } else {
    res.status(404).json({ message: "Pembicara tidak ditemukan" });
  }
};

// 4. mengupdate data pembicara
export const updateSpeaker = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const index = speakers.findIndex(s => s.id === id);

  if (index !== -1) {
    speakers[index] = { ...speakers[index], ...req.body, id };
    res.json({ message: "Pembicara berhasil diupdate", speaker: speakers[index] });
  } else {
    res.status(404).json({ message: "Pembicara tidak ditemukan" });
  }
};

// 5. menghapus data pembicara
export const deleteSpeaker = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const initialLength = speakers.length;
  speakers = speakers.filter(s => s.id !== id);

  if (speakers.length < initialLength) {
    res.status(200).json({ message: "Pembicara berhasil dihapus" });
  } else {
    res.status(404).json({ message: "Pembicara tidak ditemukan" });
  }
};
