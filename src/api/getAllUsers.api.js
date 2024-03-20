const URL = 'https://maro-cares.onrender.com/user/getAllUser';
const AccessTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwMDYzN2ExNjVlNmRlYzRmN2VjNCIsImlhdCI6MTcwNTcwNjIxOH0._jEOgPZadxZJmlnXHhRlIdhbiY0N2EwcvVZZgi4LO-U';
const getAllUsers = (setAllUsers) => {
    fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authrization": `maroTK${AccessTOKEN}`
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllUsers(responseJson.users)
            } else {
                console.log(responseJson.message);
            }
        }).catch(error => {
            console.log('Error:', error.message);
        })
}
export default getAllUsers;