"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
    const {data:session}: {data: any} = useSession();
    return (
        <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
            <h1>Profile</h1>
            <h2>{session?.user?.fullname}</h2>
        </div>
    )
}