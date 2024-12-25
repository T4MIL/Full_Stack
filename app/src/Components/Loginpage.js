import React from 'react'
export default function Loginpage() {
    return (
        <>
            <div className='container  border border-1 rounded mb-3'>
                <form className="row mt-3">
                    <div className="col-md-6">
                        <label for="validationDefault01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" required />
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" required />
                    </div>
                    <div className="col-md-6">
                        <label for="validationDefault03" className="form-label">Email</label>
                        <input type="email" className="form-control" id="validationDefault03" required />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label for="validationDefault04" className="form-label">Password</label>
                        <input type="email" className="form-control" id="validationDefault03" required />
                    </div>
                    <div className="col-12 mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label className="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <button className="btn btn-primary" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
    </>
  )
}
