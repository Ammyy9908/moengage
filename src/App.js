import { messaging } from "./firebase";
import { getToken, onMessage } from "@firebase/messaging";
import { useEffect, useState } from "react";
import Alert from "./components/modal";

function App({ Component, pageProps }) {
  const [notification, setNotification] = useState(null);
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Device Token for notification
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });
      console.log("Token Gen", token);
    } else if (permission === "denied") {
      console.log("Denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();

    // Set up message handler
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Message received while app is in the foreground:", payload);
      setNotification(payload);
      // You can access notification data from the payload here
    });

    // Clean up message handler on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gray-300  w-full h-screen flex items-center justify-center">
      {notification ? (
        <Alert />
      ) : (
        <p className="text-2xl">You will be notified for Attendance</p>
      )}
    </div>
  );
}

export default App;
