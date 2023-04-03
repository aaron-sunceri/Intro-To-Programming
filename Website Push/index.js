const client = (() => {
    let serviceWorker = undefined;
    const notificationbutton = document.getElementById("btn-notify");

    const showNotificationButton = () => {
        notificationbutton.style.display = "block";
    }
const checkNotificationSupport = () => {
    if(!('Notification' in window)){
        return Promise.reject("This browser doesn't support notification.")
    }
    console.log("The browser supports Notifications")
    return Promise.resolve("Ok!")
}
const regiterServiceWorker = () => {
    if(!('sericeworker') in navigator) {
        return Promise.reject("service worker is not abailable")
    }
}

return navigator.serviceWorker.register('service-worker.js')
.then(regObj) => {
    console.log("service worker is registered successfully!");
    serviceWorkerObj = regObj;
    showNotificationButton();
})

const requestNotifcationPermission(status => {
    console.log("Notification Permissions Status:", status);
})
checkNotificationSupport()
    .then(reisterServiceWorker)
    .then(requestNotificationPermissions)
    .catch(err => crossOriginIsolated(err))
})()