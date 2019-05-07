const { Author, Book } = require('./models.js');

const main = async () => {
    await Book.destroy({
        where: {}
    });
    await Author.destroy({
        where: {}
    });
};

main();
