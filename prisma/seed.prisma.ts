import { prisma } from '../src/config/database.js'

async function main() {
    await prisma.customers.createMany({
        data: [
            {
                "name": "Mariana",
                "email": "mari@g.com",
                "password": "$2a$10$oc4O0/UTO0hgQlhv/hHpOuDF3GsLAJcOlAyQlJV450y8CfEnSDih."
            },
            {
                "name": "Thiago",
                "email": "thiago@g.com",
                "password": "$2a$10$zZyWyLzjWXv32NIglQx8XeYFzWpvn5RfcnKsT19o1KGaozcYgU.n."
            }
        ]
    })
}

try {
    main();
    console.log('Registros inseridos');
} catch (error) {
    console.log(error);
    process.exit(1);
} finally {
    await prisma.$disconnect();
}

// main().
//     then(() => {
//         console.log('Registros inseridos')
//     }).
//     catch((error) => {
//         console.log(error);
//         process.exit(1);
//     }).
//     finally(async () => {
//         await prisma.$disconnect();
//     })