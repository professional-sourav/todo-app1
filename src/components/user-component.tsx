import Link from "next/link";

type PostUser = {
    id: number;
    firstName: string;
    lastName: string;
}

export default async function UserComponent({  userId }: { userId: number }) {

    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay

    const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    const userData: PostUser = await userResponse.json();

    return (
        <p>
            User ID: <Link href={`/users/${userData.id}`}>{userData.id}</Link> - Name: {userData.firstName} {userData.lastName}
        </p>
    );
}
