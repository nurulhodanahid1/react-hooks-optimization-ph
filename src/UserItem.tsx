
const UserItem = ({error, isLoading, users}) => {
    if(!error && isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            {
                users.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    );
};

export default UserItem;