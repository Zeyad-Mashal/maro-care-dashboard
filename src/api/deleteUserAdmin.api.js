const URL = 'https://maro-cares.onrender.com/user/removeUser/';
const AccessTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwMDYzN2ExNjVlNmRlYzRmN2VjNCIsImlhdCI6MTcwNTcwNjIxOH0._jEOgPZadxZJmlnXHhRlIdhbiY0N2EwcvVZZgi4LO-U';
const deleteUserAdmin = (userId, setDeleteLoading, setDeleteError, setAllUsers) => {
    setDeleteLoading(true)
    fetch(`${URL}${userId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authrization": `maroTK${AccessTOKEN}`
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllUsers(responseJson.users)
                setDeleteLoading(false)
                document.querySelector(".admin_delete").classList.replace("d-flex", "d-none")
            } else {
                setDeleteError(responseJson.message)
                setDeleteLoading(false)
            }
        }).catch(error => {
            console.log('Error:', error.message);
            setDeleteLoading(false)
        })
}
export default deleteUserAdmin;