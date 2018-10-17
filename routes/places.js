/**
* File : ./routes/places.js 
* Tanggal Dibuat : 10/16/2018, 8:11:52 PM
* Penulis : edgarjeremy
*/

import { a } from '../middlewares/wrapper/request_wrapper';
import { requiredPost, requiredGet } from '../middlewares/validator/request_fields';
import { onlyAuth } from '../middlewares/validator/auth';

function places(app, models, socketListener) {
    let router = app.get("express").Router();

    /**
    * Daftar Place
    */
    router.get('/', a(async (req, res) => {
        // Ambil model
        const { Sequelize, Place, User } = models;

        // Variabel
        let { limit = 20, offset = 0, q = '' } = req.query;

        // Data Place
        let data = await Place.findAndCountAll({
            distinct: true,
            // Pagination
            limit, offset,
            // Search & Filter
            where: { name: { [Sequelize.Op.iLike]: '%' + q + '%' } },
            // Relasi
            include: [{
                    model: User
                }]
        });

        // Response
        res.setStatus(res.OK);
        res.setData(data);
        res.go();
    }));

    /**
     * Satu Place
     */
    router.get('/:id', a(async (req, res) => {
        // Ambil model
        const { Place, User } = models;

        // Variabel
        let { id } = req.params;

        // Data Place
        let data = await Place.findOne({ 
            where: { id }, 
            include: [{
                    model: User
                }] 
        });

        if (data) {
            // Response
            res.setStatus(res.OK);
            res.setData(data);
            res.go();
        } else {
            // Gagal
            res.status(404);
            res.setStatus(res.GAGAL);
            res.setMessage('Place tidak ditemukan');
            res.go();
        }
    }));

    /**
     * Buat Place
     */
    router.post('/', requiredPost(["name","room_length","room_width","dispenser","bed","wardrobe","tv","ac","desk","wifi","chair","family_stay","in_bathroom","out_bathroom","sit_toilet","shower","living_room","kitchen","clothesline","balcon","full_day_access","two_wheels_parking","four_wheels_parking"]), a(async (req, res) => {
        // Ambil model
        const { Place } = models;

        // Variabel
        let { name, room_length, room_width, dispenser, bed, wardrobe, tv, ac, desk, wifi, chair, family_stay, in_bathroom, out_bathroom, sit_toilet, shower, living_room, kitchen, clothesline, balcon, full_day_access, two_wheels_parking, four_wheels_parking } = req.body;

        // Buat Place
        let data = await Place.create({ name, room_length, room_width, dispenser, bed, wardrobe, tv, ac, desk, wifi, chair, family_stay, in_bathroom, out_bathroom, sit_toilet, shower, living_room, kitchen, clothesline, balcon, full_day_access, two_wheels_parking, four_wheels_parking });

        // Response
        res.setStatus(res.OK);
        res.setData(data);
        res.go();
    }));

    /**
     * Update Place
     */
    router.put('/:id', requiredPost(["name","room_length","room_width","dispenser","bed","wardrobe","tv","ac","desk","wifi","chair","family_stay","in_bathroom","out_bathroom","sit_toilet","shower","living_room","kitchen","clothesline","balcon","full_day_access","two_wheels_parking","four_wheels_parking"]), a(async (req, res) => {
        // Ambil model
        const { Place } = models;

        // Variabel
        let { id } = req.params;
        let { name, room_length, room_width, dispenser, bed, wardrobe, tv, ac, desk, wifi, chair, family_stay, in_bathroom, out_bathroom, sit_toilet, shower, living_room, kitchen, clothesline, balcon, full_day_access, two_wheels_parking, four_wheels_parking } = req.body;

        // Ambil Place
        let data = await Place.findOne({ where: { id } });

        if (data) {
            // Update Place
            data = await data.update({ name, room_length, room_width, dispenser, bed, wardrobe, tv, ac, desk, wifi, chair, family_stay, in_bathroom, out_bathroom, sit_toilet, shower, living_room, kitchen, clothesline, balcon, full_day_access, two_wheels_parking, four_wheels_parking });
            // Response
            res.setStatus(res.OK);
            res.setData(data);
            res.go();
        } else {
            // Gagal
            res.status(404);
            res.setStatus(res.GAGAL);
            res.setMessage('Place tidak ditemukan');
            res.go();
        }
    }));

    /**
     * Hapus Place
     */
    router.delete('/:id', a(async (req, res) => {
        // Ambil model
        const { Place } = models;

        // Variabel
        let { id } = req.params;

        // Ambil Place
        let data = await Place.findOne({ where: { id } });

        if (data) {
            // Hapus Place
            data.destroy();
            // Response
            res.setStatus(res.OK);
            res.setData(data);
            res.go();
        } else {
            // Gagal
            res.status(404);
            res.setStatus(res.GAGAL);
            res.setMessage('Place tidak ditemukan');
            res.go();
        }
    }));

    return router;
}

module.exports = places;