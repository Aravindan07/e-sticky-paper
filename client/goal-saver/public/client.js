console.log("In client.js File");

const publicVapidKey =
  "BNABAnzSs4wtkrbpRUOnZ7xq1ZRTunhAOAiGhzte94Mcg-3pPcMeJ0SOnIQ4wGemhgeL4KewxT_6OztLbXm8weA";

//Check for service worker
if ("serviceWorker" in navigator) {
  send().catch((err) => console.error(err));
}

//Asking user permission

function askUserPermission() {
  return Notification.requestPermission();
}

//Register SW, Register push, Send push
async function send() {
  //Register service worker
  console.log("Registering service worker...");
  const register = await navigator.serviceWorker.register("./worker.js", {
    scope: "/",
  });
  console.log("Service worker Registered");

  askUserPermission();
  //Register push
  console.log("Registering push...");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });
  console.log("Push registered");

  //Send push notification
  console.log("Sending push");
  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
  console.log("Push sent...");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
