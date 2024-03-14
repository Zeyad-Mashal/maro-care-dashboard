const URL = 'https://maro-cares.onrender.com/filter/addFilter';
const AccessTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwMDYzN2ExNjVlNmRlYzRmN2VjNCIsImlhdCI6MTcwNTcwNjIxOH0._jEOgPZadxZJmlnXHhRlIdhbiY0N2EwcvVZZgi4LO-U';
const addDiscountBrand = (data, setLoading, setFilterError, setAllFilter, setFilterAr, setFilterEn) => {
    setLoading(true)
    fetch(URL, {
        method: "POST",
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
                setLoading(false)
                setFilterEn("");
                setFilterAr("");
            } else {
                setFilterError(responseJson.message)
                setLoading(false)
            }
        }).catch(error => {
            console.log('Error:', error.message);
            setLoading(false)
        })
}
export default addDiscountBrand;