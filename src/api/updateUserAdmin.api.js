const URL = 'https://maro-cares.onrender.com/user/updateUser/';
const AccessTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwMDYzN2ExNjVlNmRlYzRmN2VjNCIsImlhdCI6MTcwNTcwNjIxOH0._jEOgPZadxZJmlnXHhRlIdhbiY0N2EwcvVZZgi4LO-U';
const updateUserAdmin = (data, setUpdateUserLoading, setUpdateUserError, setAllUsers, userId) => {
    setUpdateUserLoading(true)
    fetch(`${URL}${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "authrization": `maroTK${AccessTOKEN}`
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllUsers(responseJson.users)
                setUpdateUserLoading(false)
                document.querySelector(".update_admin").classList.replace("d-flex", "d-none");
            } else {
                setUpdateUserError(responseJson.message)
                setUpdateUserLoading(false)
            }
        }).catch(error => {
            console.log('Error:', error.message);
            setUpdateUserLoading(false)
        })
}
export default updateUserAdmin;