<template>
  <section class="contact-us bg-light EG-Default">
    <div class="container mt-4">
      <div class="row contact-us-bg">
        <div class="col-xl-4 text-center d-flex flex-column align-items-center justify-content-center">
          <h1 class="text-center mt-5 mb-4">Welcome !</h1>
          <p class="hanuman fs-5 mt-3">Please fill in your information
            or contact us at the phone number below to contact us.
          </p>
          <div class="row mt-3 mb-4">
            <div class="col-xl-12b-3 icon">
              <button type="button" class="btn btn-social-media"><i class="fa-brands fa-facebook fs-3"></i></button>
              <button type="button" class="btn btn-social-media ms-2"><i class="fa-brands fa-twitter fs-3"></i></button>
              <button type="button" class="btn btn-social-media ms-2"><i class="fa-brands fa-linkedin-in fs-3"></i></button>
              <button type="button" class="btn btn-social-media ms-2"><i class="fa-brands fa-telegram fs-3"></i></button>
            </div>
          </div>
        </div>
        <div class="col-xl-8 hanuman">
          <h1 class="text-center koulen-title mb-5 tittle">Contact Us</h1>
          <form class="mt-2">
            <div class="row">
              <div class="col">
                <input type="text" class="form-control bg-light" placeholder="first name" name="name">
              </div>
              <div class="col">
                <input type="text" class="form-control bg-light" placeholder="last name" name="name">
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <input type="text" class="form-control bg-light " placeholder="email" name="email">
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <input type="text" class="form-control bg-light " placeholder="phone number" name="phone">
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <textarea class="form-control bg-light" placeholder="Your message here​..." rows="5" id="comment"
                  name="text"></textarea>
              </div>
            </div>
            <div class="row mt-4 mb-5">
              <div class="col">
                <button type="button" class="btn btn-submit btn-secondary">Send</button>
                <button type="button" class="btn btn-submit btn-secondary ms-2">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>|
  </section>
</template>


<style>
.contact-us {
  margin: 50px 0px 80px 0px;
}

.contact-us h1 {
  color: var(--color-h);
}

.contact-us p {
  line-height: 35px;
  color: var(--color-text);
}

.contact-us .btn-social-media,
.profile-card .btn-social-media {
  border: 1px solid var(--color-h);
  color: var(--color-H);
}

.contact-us .contact-us-bg {
  background-color: var(--color-main);
  border-radius: 10px;
  padding: 20px;
}

.contact-us .tittle {
  color: var(--color-h);
}
</style>
