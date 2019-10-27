import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate } from '../../src/actions/filters';


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    }) 
});


test('should generate text filder object', () => {
    const action = setTextFilter('Test Filter');
    expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Test Filter'
    })
});


test('should generate set text sortByDate with value', () => {
      const action = sortByDate();
      expect(action).toEqual({
        type: 'SORT_BY_DATE',

    })
});


test('should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
});