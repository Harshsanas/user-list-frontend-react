import { useState, useEffect } from 'react'
export default function UserList() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const userListData = await response.json();
                setUserList(userListData);
            } catch (error) {
                console.log(error, 'errre')
            }
        }
        fetchUserData();
    })
    console.log(userList)
    return (
        <div>
            <table>
            </table>
        </div>
    )
}
