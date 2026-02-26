const { userSchema } = require("../validaty/user.schema");

const validateUser = (req, res, next) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "I dati dell'utente non sono validi",
            errors: result.error.issues.map(err => ({
                field: err.path[0],
                message: err.message
            }))
        });
    }

    req.body = result.data;
    next();
};

module.exports = validateUser;
