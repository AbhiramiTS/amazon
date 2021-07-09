import moment from "moment";
import Currency from "react-currency-formatter";


function Order({id, amount, amountShipping, items, timestamp, images }) {
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
                </div>
            
            <div>
                <p className="text-xs font-bold">TOTAL</p>
                <p>
                    <Currency quantity={amount} currency="GBP" /> Next Day Delivery{" "}
                    <Currency quantity={amountShipping} currency="GBP" />
                </p>
            </div>
            </div>
            
        </div>
    )
}

export default Order
