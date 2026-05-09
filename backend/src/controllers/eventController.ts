import type { Request, Response } from "express";
import type { Event } from "../types/event.js";

let events: Event[] = [
  {
    id: 1,
    nama: "Mobile Development",
    tanggal: "2025-11-25",
    waktu: "08.00 WIB - 16.30 WIB",
    lokasi: "Lab Kom D.1",
    deskripsi: "Workshop pengembangan aplikasi mobile"
  },
  {
    id: 2,
    nama: "Artificial Intelligence",
    tanggal: "2025-11-25",
    waktu: "08.00 WIB - 16.30 WIB",
    lokasi: "Lab Kom D.2",
    deskripsi: "Seminar kecerdasan buatan"
  },
  {
    id: 3,
    nama: "Cyber Security",
    tanggal: "2025-11-26",
    waktu: "08.00 WIB - 16.30 WIB",
    lokasi: "Lab Kom D.1",
    deskripsi: "Pelatihan keamanan siber"
  }
];

// 1. menampilkan semua event 
export const getAllEvents = (req: Request, res: Response) => {
  res.json(events);
};

// 2. menyimpan data event baru
export const createEvent = (req: Request, res: Response) => {
  try {
    const { nama, tanggal, waktu, lokasi, deskripsi } = req.body;

    // validasi jika ada data yang belum diisi
    if (!nama || !tanggal || !waktu || !lokasi) {
      return res.status(400).json({ message: "Nama, tanggal, waktu, dan lokasi harus diisi" });
    }

    // jika data sudah valid, buat event baru
    const newEvent: Event = {
      id: events.length + 1,
      nama,
      tanggal,
      waktu,
      lokasi,
      deskripsi: deskripsi || ""
    };

    // simpan ke array
    events.push(newEvent);

    // kirim response sukses
    res.status(201).json({ message: "Event berhasil ditambahkan", event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// 3. menampilkan data event berdasarkan id
export const getEventById = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const event = events.find(e => e.id === id);

  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: "Event tidak ditemukan" });
  }
};

// 4. mengupdate data event
export const updateEvent = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const index = events.findIndex(e => e.id === id);

  if (index !== -1) {
    events[index] = { ...events[index], ...req.body, id };
    res.json({ message: "Event berhasil diupdate", event: events[index] });
  } else {
    res.status(404).json({ message: "Event tidak ditemukan" });
  }
};

// 5. menghapus data event
export const deleteEvent = (req: Request, res: Response) => {
  const { id: idParam } = req.params;
  const id = parseInt(typeof idParam === "string" ? idParam : "");
  const initialLength = events.length;
  events = events.filter(e => e.id !== id);

  if (events.length < initialLength) {
    res.status(200).json({ message: "Event berhasil dihapus" });
  } else {
    res.status(404).json({ message: "Event tidak ditemukan" });
  }
};