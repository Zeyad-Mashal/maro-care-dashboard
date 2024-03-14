const URL = 'https://maro-cares.onrender.com/order/getOrder/';
const getNewOrder = (setAllOrders, pageNumber) => {
    fetch(`${URL}${pageNumber}?orderStatus=New`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                setAllOrders(responseJson.orders)
            } else {
                console.log(responseJson.message);
            }
        }).catch(error => {
            console.log('Error:', error.message);
        })
}
export default getNewOrder;