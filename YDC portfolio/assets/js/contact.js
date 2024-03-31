/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail =(e) => {
    e.preventDefault()


    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_zf9bw2f','template_klbt1dk','#contact-form','RMsejuYRYh3jcENXq')
        .then(() => {
              // Show sent message
              contactMessage.textContent = 'Message sent successfully ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)

                 // Clear input fields
                 contactForm.requestFullscreen()

        }, () =>{

             // Show error message
             contactMessage.textContent = '      Message not sent (service error) ❌'

        })
}

contactForm.addEventListener('submit', sendEmail)
 