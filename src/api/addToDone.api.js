const URL = 'https://maro-cares.onrender.com/order/completedOrder/';
const AccessTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwMDYzN2ExNjVlNmRlYzRmN2VjNCIsImlhdCI6MTcwNTcwNjIxOH0._jEOgPZadxZJmlnXHhRlIdhbiY0N2EwcvVZZgi4LO-U';
const addToDone = (setCheckedLoading, setCheckedError, setAllOrders, orderId) => {
    setCheckedLoading(true)
    fetch(`${URL}${orderId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "authrization": `maroTK${AccessTOKEN}`
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllOrders(responseJson.orders)
                setCheckedLoading(false)
                document.querySelector(".checked_order_done")
                    .classList.replace("d-block", "d-none");
            } else {
                setCheckedError(responseJson.message)
                setCheckedLoading(false)
            }
        }).catch(error => {
            console.log('Error:', error.message);
            setCheckedLoading(false)
        })
}
export default addToDone;