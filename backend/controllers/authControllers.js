const db = require("../models");
const user = db.User;
const bcrypt = require("bcrypt");


module.exports = {
    register: async (req, res) => {
        try {

            // const result = await user.create(req.body);
            const { firstname, lastname, email, password } = req.body;

            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt);

            const result = await user.create({
                firstname,
                lastname,
                email,
                password: hashPass
            })

            res.status(200).send({
                status: true,
                message: "user has been registered",
                data: result
            })

        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }
}