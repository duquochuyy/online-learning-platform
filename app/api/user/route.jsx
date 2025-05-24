import { db } from "@/config/db";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { usersTable } from "@/config/schema";

export async function POST(req) {
    const {email, name} = await req.json()
    // user already exists ?
    const users = await db.select().from(usersTable)
    .where(eq(usersTable.email, email));
    
    // if not create new user
    if (users?.length == 0) {
        const result = await db.insert(usersTable).values({
            email: email,
            name: name
        }).returning(usersTable);

        console.log(result);
        return NextResponse.json(result);
    }

   return NextResponse.json(users[0])
}