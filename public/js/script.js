(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

setTimeout(function () {
  var successAlert = document.getElementById('successAlert');
  if (successAlert) {
    successAlert.style.opacity = '0';
    setTimeout(function () {
      successAlert.remove();
      document.body.style.transition = 'margin-top 0.5s';
      document.body.style.marginTop = '0';
    }, 500);
  }

  var errorAlert = document.getElementById('errorAlert');
  if (errorAlert) {
    errorAlert.style.opacity = '0';
    setTimeout(function () {
      errorAlert.remove();
      document.body.style.transition = 'margin-top 0.5s';
      document.body.style.marginTop = '0';
    }, 500);
  }
}, 2500);

function dismissAlert() {
  var alert = document.querySelector('.alert-dismissible.show');
  if (alert) {
    alert.style.opacity = '0';
    setTimeout(function () {
      alert.remove();
      document.body.style.transition = 'margin-top 0.5s';
      document.body.style.marginTop = '0';
    }, 500);
  }
}

// let taxSwitch = document.getElementById('flexSwitchCheckDefault');
// taxSwitch.addEventListener('click', () => {
//   let taxInfo = document.getElementsByClassName('tax-info');
//   for (let info of taxInfo) {
//     if (info.style.display !== 'inline') {
//       info.style.display = 'inline';
//     } else {
//       info.style.display = 'none';
//     }
//   }
// });

let taxSwitch = document.getElementById('flexSwitchCheckDefault');

taxSwitch.addEventListener('change', () => {
  updatePriceDisplay(taxSwitch.checked);
});

function updatePriceDisplay(isTaxSwitchOn) {
  let priceInfoElements = document.querySelectorAll('.price-info');

  priceInfoElements.forEach((priceInfo) => {
    const basePrice = parseFloat(priceInfo.dataset.basePrice);
    const totalPrice = isTaxSwitchOn
      ? calculateTotalPrice(basePrice)
      : basePrice;

    priceInfo.innerHTML = `&#8377; ${totalPrice.toLocaleString(
      'en-IN'
    )} /night`;

    if (isTaxSwitchOn) {
      priceInfo.innerHTML += ` <i class="tax"> &nbsp;with 18% GST</i>`;
    }
  });
}

// Function to calculate total price with GST
function calculateTotalPrice(basePrice) {
  const gstPercentage = 18;
  const gstAmount = (basePrice * gstPercentage) / 100;
  const totalPrice = basePrice + gstAmount;
  return totalPrice.toLocaleString('en-IN');
}
