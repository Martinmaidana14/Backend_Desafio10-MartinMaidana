
import { faker } from '@faker-js/faker'

const products = []

const createRandomProducts = () => {
    return {
        title: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        stock: faker.number.int(),
        category: faker.commerce.department(),
        code: faker.commerce.isbn(),
        price: faker.commerce.price(),
    }
}

for (let i = 0; i < 100; i++) {
    products.push(createRandomProducts())
}

console.log(products)


//MAIL - PASSWORD - USERNAME - ID - Avatar - Img - birthdate - registeredAt
        /*userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        avatar: faker.image.avatarGitHub(),
        birthdate: faker.date.birthdate(),
        registerAt: faker.date.past(),
        loginAt: faker.date.recent(),
        biografy: faker.person.bio(),
        sex: faker.person.sex(),
        gender: faker.person.gender(),
        telephone: faker.phone.number()*/

        