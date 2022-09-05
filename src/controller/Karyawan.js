import Karyawan from "../models/Karyawan.js";

export const getData = async (req, res) => {
    try {
        const karyawan = await Karyawan.findAll()
        res.send(karyawan);
    } catch (error) {
        console.log(error);
    }
};

export const createData = async (req, res) => {
    const { nama, bidang, bon } = req.body
    try {
        if (!nama && !bidang && !bon) return res.sendStatus(400)
        await Karyawan.create({
            nama_karyawan: nama,
            bidang_kerja: bidang,
            bon: bon
        });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
};

export const updateData = async (req, res) => {
    try {
        await Karyawan.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
};

export const deleteData = async (req, res) => {
    try {
        await Karyawan.destroy({
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
};