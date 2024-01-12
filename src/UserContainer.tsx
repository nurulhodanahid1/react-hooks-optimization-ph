import { useEffect, useState } from "react";
import UserItem from "./UserItem";

const url = "https://jsonplaceholder.typicode.com/users";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const getUsers = async () => {
        setIsLoading(true);
        try {
            const res  = await fetch(url);
            const data = await res.json();
            setIsLoading(false);
            setUsers(data);
        } catch (error) {
            setError(true)
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    const props = {
        isLoading,
        error,
        users
    }
    
    return (
        <UserItem {...props} />
    );
};

export default UserContainer;