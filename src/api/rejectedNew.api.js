const URL = 'https://maro-cares.onrender.com/order/cancellingOrder/';
const AccessTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWIwMDYzN2ExNjVlNmRlYzRmN2VjNCIsImlhdCI6MTcwNTcwNjIxOH0._jEOgPZadxZJmlnXHhRlIdhbiY0N2EwcvVZZgi4LO-U';
const rejectedNew = (setCheckedLoading, setCheckedError, setAllOrders, orderId, orderStatus) => {
    setCheckedLoading(true)
    fetch(`${URL}${orderId}/${orderStatus}`, {
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
                document.querySelector(".rejected_check").classList.replace("d-block", "d-none");
            } else {
                setCheckedError(responseJson.message)
                setCheckedLoading(false)
            }
        }).catch(error => {
            console.log('Error:', error.message);
            setCheckedLoading(false)
        })
}
export default rejectedNew;