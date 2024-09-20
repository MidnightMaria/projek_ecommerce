import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const categories = await prisma.category.createMany({
        data: [
            {name: 'Brankas Digital'},
            {name: 'Brankas Analog'},
            {name: 'Brankas Fingerprint'},
        ],
    });

    const products = await prisma.product.createMany({
        data: [
            {
            }
        ]
    })
}