const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    if (plainPassword) {
        return bcrypt.hashSync(plainPassword, 10)
    }
    return null
}

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}


module.exports = {
    hashPassword,
    comparePassword
}