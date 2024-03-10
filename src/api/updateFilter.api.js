const URL = 'https://maro-cares.onrender.com/filter/updateFilter/';
const AccessTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwMDYzN2ExNjVlNmRlYzRmN2VjNCIsImlhdCI6MTcwNTcwNjIxOH0._jEOgPZadxZJmlnXHhRlIdhbiY0N2EwcvVZZgi4LO-U';
const updateFilter = (data, setUpdateLoading, setUpdateFilterError, setAllFilter, filterId) => {
    setUpdateLoading(true)
    fetch(`${URL}${filterId}`, {
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
                setAllFilter(responseJson.allFilters)
                setUpdateLoading(false)
                document.querySelector(".filter-input-udpate").classList.replace("d-block", "d-none");
            } else {
                setUpdateFilterError(responseJson.message)
                setUpdateLoading(false)
            }
        }).catch(error => {
            console.log('Error:', error.message);
            setUpdateLoading(false)
        })
}
export default updateFilter;