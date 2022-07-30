/* Component logic */
window.onload = () => {
  const button = document.getElementById('chooseContact');
  button.addEventListener('click', () => {
    if (!window?.ReactNativeWebView?.postMessage) {
      alert('Contacts API not supported');
    } else {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          request: 'contact',
        }),
      );
    }
  });
};

/* Receivers Logic */
window.receivers = {
  selectedContact(data) {
    const {contact, selectedPhone} = JSON.parse(data);
    showContact(contact, selectedPhone);
  },
};

/* Just Showing stuff on screen */
function showContact(contact, selectedPhone) {
  const nameEl = document.createElement('div');
  nameEl.innerText = 'Selected Contact: ' + contact.name;

  const numberTypeEl = document.createElement('div');
  numberTypeEl.innerText = 'Contact Number type: ' + selectedPhone.type;

  const numberEl = document.createElement('div');
  numberEl.innerText = 'Contact Number: ' + selectedPhone.number;

  document.documentElement.appendChild(nameEl);
  document.documentElement.appendChild(numberTypeEl);
  document.documentElement.appendChild(numberEl);
}
