import {addExpense, removeExpense, editExpense} from '../actions/expenses';

//REMOVE_EXPENSE
test('should setup remove expense action object', () => {
  const action = removeExpense({id:'abc123'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
});

//EDIT_EXPENSE
test('should setup edit expense action object', () => {

  const action = editExpense('abc123', {note: 'add new note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      note: 'add new note value'
    }
  })
});

test('should setup add expense action object with values', () => {
  const expenseData = {
    description: 'rent',
    amount: 100,
    createdAt: 1000,
    note: 'This is test note'
  };
  
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense : {
      ...expenseData,
      id: expect.any(String)
    }
  });
});


test('should setup add expense action object with default values', () => {
 
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense : {
      id: expect.any(String),
      description : '',
      note : '',
      amount : 0,
      createdAt : 0,
    }
  });
});
/*
assetive options

toBe
toEqual = use to check objects are same


*/