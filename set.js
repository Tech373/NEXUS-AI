




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61UaY+bSBT8K6v+aivDfUkjhcsGe/CBzfhYrVYcDW5zummwceT/vsKeSSIlm8xKy6emaV5X1at6X0BRohpOYQeUL6DCqPUJ7JekqyBQgNbEMcRgCCKf+EABjdWmgrdzHcq7oKOteRLZjfxT/CKbtjkNB7FxTVk41Q06fQa3IaiaIEPhLwqeWBi1anviqrUc5uvtZKYunqJEZmbr1jpkLB11+/V0bZqm/QxufUUfYVQkZnWAOcR+NoXdwkf4Y/B3eoAnfL1xFz4yOQ66VsSuL8yMVnNcL3eiuF1j3Eq1zSw/Bp+q52Y14af1mRXcWWucNmMz03Aln+dVKyT6Xl5F60tELT3zAb9GSQEjO4IFQaT7sO5nRzqUeudttxOjw5y6Pl1TaO6LI94K0St/nFBLLjMXhlt4HwOeyk/Lg4WDbTqYMZ6uwcF52+LtYmna3jnl2XHD0WF7mOee+j3wBX73SvpfdA/1lz2fp9bBd+O2feUW9Y7er0eQZ7aZZTvEXTmF3sB9u/mg7i8ntHKqzdPAmRTnpsnDNGheqihonf35CIlUyPGhfJlk8pH7Bt8nDf4VSl1n40BcVfkl1jjPcVqt2FnWtRsIg6mczav50kyuaTF1g4w6STK7mVJmgB334lT6pPSd1LXkgf5KhVl8pCWGtXdTqJ6f74xS2NkRUOjbEGCYoJpgn6CyuO9R9BD4UbuCIYbkLi9AZ7cg5azD2XIEx0apCUhnLSMbhOXV3ayId7LsAO9OsV8/gyGocBnCuoaRhWpS4s6Bde0nsAbKn/dO9aQxzEsCJygCCmB4ThQYluUEiv9cfzoffFL7VfWpgAQMQYzL3IFAIbiBQ3D/YWTQhmTy5kjSmJHB0JxEqxxvsCOBl3VWV3uK+ePSNcphTfy8Agot8jTNcKzI34b/Dw6dMQ1WMmiB40WKMVmJpiRJFTRdpkye143f4BBufw1BAS/k4eNefZYeghjhmnhFU2WlH72b/P2jH4ZlU5BVV4R6v4AYKN9tQ0JQkdQ9s6bwcXhALdR7HkCJ/ayGXxsOMYzeubwNMb2Meh/uKG1nivoS9Nj7Qj9oo8g/qlP4/WGwNnVrZuu2OvvjbzAE2f1fmpFYhmZlhmElUaIV+XO/f/uKur8kgsRHWd2LOtEvglBbpg3XieOMx6qZqHqigm8s39PzcGeVoGQyrc7mxZpPzeN8HyAWSae5biX73CJjD124gNtGKzV5/kkRoIAYd7WI2YFztONUXYs5L65ey/GIJaVoZpq9yjFdJXQKd5dRcMkiiR/vkLvN0+CkXSO1mpaBkWkNoZYybtRd1DW8YPRRG4IItiiE31+meldBe5kk21c1vESW++JvD+pO5Nk6uywn+yeqyg1Mlvuj7Und2TpJ8Vx3FjBr66cCBiu9mi+s0lFdbjvyHPt1eSmk1FAfub7PlextnqO3xKH7a4zgfTy+Nep3/Xzg7l1H3YbflXibt/8yszR/Z5f66hRqjntFB/uabzjCtdNjcuDG+4PoZnYNx4MR6yU2uPX2rzKfxCXOgQLqPPDBEOCy6T1sF3H5q+moUraaPFhnfk3Ub7n4SdQE8XFqgcvK8usDUMBik/Ja7/FOraoV8cl7yoDaP3rWgNs/gzn0AJAIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "TECHNICIAN",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " TECHNICIAN01",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'NEXUS-AI',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/g86c1n.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '4' ,
    ETAT : process.env.PRESENCE || '2',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  CHATBOT : process.env.CHATBOT || "yes",
                  AUTO_BIO : process.env.AUTO_BIO || "yes",
                  AUTO_REACT : process.env.AUTO_REACT || "no",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
