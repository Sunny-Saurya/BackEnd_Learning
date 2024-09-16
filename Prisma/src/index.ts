// import { PrismaClient } from "@prisma/client";
// import { log } from "console";

// const prisma = new PrismaClient();

// async function insertUser(username:string, password: string, firstName: string,  lastName: string)
// {
//     const res = await prisma.user.create({
//         data:{
//             email: username,
//             password,
//             firstName,
//             lastName
//         },
//         select: {
//             id: true,
//             password: true,
//             lastName: true,
//         },

//     })
//     console.log(res);
    
// }

// insertUser("Sunnykuma12r@gmail.com", "mysecretpass", "Sunny", "Kumar");

// insertUser("Sunnykumar123@gmail.com", "mysecretpass", "Sunny", "Kumar"); 






// update user info...

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//   const res = await prisma.user.update({
//     where: {email: username },
//     data: {
//       firstName,
//       lastName
//     }
//   });
//   console.log(res);
// }

// updateUser("Sunnykuma12r@gmail.com", {
//     firstName: "Sunnnny",
//     lastName: "Sauryaaa"
// })


// Delete user from db

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface DeleteParams {
    firstName: string;
    lastName: string;
}

async function deleteUser(username: string) {
    try {
        const res = await prisma.user.delete({
            where: { email: username },
        });
        console.log("User deleted:", res);
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

// Example call
// deleteUser("Sunnykuma12r@gmail.com");
deleteUser("Sunnykuma12r@gmail.com");
