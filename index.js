async function enable() {
    if (typeof window.webln === "undefined") {
      return alert("No WebLN available.");
    }
  
    try {
      await window.webln.enable();
      celebrate();
    } catch (error) {
      alert("User denied permission or cancelled.");
    }
  }