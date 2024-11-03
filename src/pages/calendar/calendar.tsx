import { Calendar as ReactCalendar } from 'rsuite';

import 'rsuite/Calendar/styles/index.css';
import './calendarOverrides.css';

const Calendar = () => {
	return (
		<div className='w-full h-full flex justify-center items-center self-center'>
			<ReactCalendar className='bg-white' bordered />
		</div>
	);
};

export default Calendar;
