import React from 'react'

const Contact = () => {
  return (
    <div>
      <div class="text-center p-5 light-bg">
        <div class="contact_content_section">
          <p class="text-center">Contact</p>
          <h1 class="p-heading text-center">Fill out the form to be contacted by a member  of the Ecom team.</h1>
        </div>
      </div>
      <div class="box p-5 my-5 mx-auto contact_form_section light-bg">
        <form class="contact_form_section">
          <div class="row flex flex-wrap mb-3">
            <div class="col-md-6 px-3">
              <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">First Name</label>
              <input class="appearance-none d-block w-100 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter First Name" />
            </div>
            <div class="col-md-6 px-3">
              <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Email Address</label>
              <input class="appearance-none d-block w-100 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email Address" />
            </div>
          </div>
          <div class="row flex flex-wrap mb-3">
            <div class="col-12 px-3">
              <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Subject</label>
              <input class="appearance-none d-block w-100 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Subject" />
            </div>
          </div>
          <div class="row flex flex-wrap mb-3">
            <div class="col-12 px-3">
              <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Message</label>
              <textarea class="appearance-none d-block w-100 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 textarea" placeholder="Enter a message"></textarea>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="col-12 px-1">
              <div className="d-flex gap-2 align-items-center mb-3">
                <input type="checkbox" name='grid-state' id='grid-state' />
                <label class="d-block uppercase tracking-wide text-gray-700 text-xs font-bold" for="grid-state">I agree with Prasasti Privacy Policy</label>
              </div>
              <a href="/contact-us" class="submit_btn" type='button'>Submit</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
