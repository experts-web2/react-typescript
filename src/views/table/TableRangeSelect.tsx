import "react-datepicker/dist/react-datepicker.css";
import { TableRangeHandle } from '../../models/interface'
import DatePicker from "react-datepicker";
const TableRangeSelect = (props: TableRangeHandle) => {
    const handleDate = (date: any) => {
        props.setDateRange(date)
    }
    return (
        <>
            <div className="mb-3 border-2 drop-shadow rounded p-2">
                <DatePicker
                    selectsRange={true}
                    startDate={props.startDate}
                    endDate={props.endDate}
                    onChange={handleDate}
                    isClearable={true}
                    placeholderText="Select Date"
                />
            </div>

        </>
    )
}

export default TableRangeSelect