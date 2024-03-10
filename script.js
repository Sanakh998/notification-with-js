let btn = document.querySelector("button");

// btn notification
btn.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      let notification = new Notification("Example Notification", {
        body: "This is more details about notification",
        data: { hello: "javascript" },
        tag: "welcome", // same tags override notifications
        icon: "bell.svg"
      });
      // notification.addEventListener('error', e => {
      //     console.log(e.target.body)
      //     console.log(e.target.data)
      //     alert("error")
      // })
    }
  });
});

// tab close notify
let notification;
let interval;
document.addEventListener("visibilitychange", () => {
  let leaveDate = new Date();
  if (document.visibilityState === "hidden") {
    interval = setInterval(() => {
      notification = new Notification("Come Back Please", {
        body: `You have been gone for ${Math.round(
          (new Date() - leaveDate) / 1000
        )} seconds`,
        tag: "come back",
      });
    }, 100);
    // console.log("object")
  } else {
    if (interval) clearInterval(interval);
    if (notification) notification.close();
  }
});
