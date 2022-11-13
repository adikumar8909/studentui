import React, {useState} from 'react';
function form() {
return (
      
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              
              <div className="number">
                  <label className="form__label" for="number">Phone Number</label>
                  <input className="form__input" type="string"  id="number" placeholder="Phone Number"/>
              </div>
              <div className="age">
                  <label className="form__label" for="age">Age</label>
                  <input className="form__input" type="string" id="Age" placeholder="Age"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Add Student</button>
          </div>
      </div>      
    )       }

export default form
