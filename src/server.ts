import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.findMany();
  console.log(result);

  // const result = await prisma.user.create({
  //   data: {
  //     email: "shamim2@gmail.com",
  //     name: "shamim2",
  //   },
  // });

  console.log(result);
}

main();
