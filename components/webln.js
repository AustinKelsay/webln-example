async function enable() {
    if (typeof window.webln === "undefined") {
      return alert("No WebLN available.");
    }
    try {
      await window.webln.enable();
    } catch (error) {
      alert("User denied permission or cancelled.");
    }
  }

async function sendPayment(paymentRequest) {
    const result = await window.webln.sendPayment(paymentRequest);
    console.log(result);
}