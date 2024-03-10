const URL = 'https://maro-cares.onrender.com/filter/deleteFilter/';
const AccessTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwMDYzN2ExNjVlNmRlYzRmN2VjNCIsImlhdCI6MTcwNTcwNjIxOH0._jEOgPZadxZJmlnXHhRlIdhbiY0N2EwcvVZZgi4LO-U';
const deleteFilter = (filterId, setDelteLoading, setDeleteFilterError, setAllFilter) => {
    setDelteLoading(true)
    fetch(`${URL}${filterId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authrization": `maroTK${AccessTOKEN}`
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllFilter(responseJson.allFilters)
                setDelteLoading(false)
                document.querySelector(".delete-product").classList.replace("d-block", "d-none")
            } else {
                setDeleteFilterError(responseJson.message)
                setDelteLoading(false)
            }
        }).catch(error => {
            console.log('Error:', error.message);
            setDelteLoading(false)
        })
}
export default deleteFilter;