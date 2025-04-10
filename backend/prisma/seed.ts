import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seeding roles
    const roles = ['Admin', 'User'];
    for (const roleName of roles) {
        await prisma.roles.upsert({
            where: { name: roleName },
            update: {},
            create: { name: roleName },
        });
    }
    console.log('Roles have been seeded');

    // Seeding social media platforms
    const socialMediaPlatforms = ['Youtube', 'Facebook', 'Instagram', 'TikTok'];
    for (const platform of socialMediaPlatforms) {
        await prisma.social_media_platform.upsert({
            where: { name: platform },
            update: {},
            create: { name: platform },
        });
    }
    console.log('Social Media Platforms have been seeded');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
