import React from "react";

const AddExpenseForm = () => {
  return (
    <form>
      <div className='row'>
        <div className='col-sm'>
          <label for='name'>Name</label>
          <input
            type='text'
            required='required'
            className='form-control'
            id='name'
          />
        </div>
        <div className='col-sm'>
          <label for='cost'>Cost</label>
          <input
            type='text'
            required='required'
            className='form-control'
            id='name'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary mt-3'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
