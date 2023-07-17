import IndexLayout from "@/Layouts/IndexLayout";
import React, { useEffect } from "react";

export default function transfer({ transaction, midtransClientKey }) {
  useEffect(() => {
    const loadSnapScript = () => {
      const snapScript = document.createElement('script');
      snapScript.src = "https://app.sandbox.midtrans.com/snap/snap.js";
      snapScript.setAttribute('data-client-key', midtransClientKey);
      snapScript.async = true;
  
      const promise = new Promise((resolve, reject) => {
        snapScript.onload = resolve;
        snapScript.onerror = reject;
      });
  
      document.head.appendChild(snapScript);
      return promise;
    };
  
    const handleSnapEmbed = () => {
      if (typeof window.snap === 'undefined') {
        console.error('Failed to load snap.js');
        return;
      }
  
      // window.snap.pay({ snapToken })
      window.snap.embed(transaction.token, {
        embedId: 'snap-container',

      });
    };
  
    loadSnapScript()
      .then(() => {
        handleSnapEmbed();
      })
      .catch((error) => {
        console.error('Failed to load snap.js', error);
      });
  
    return () => {
      const snapScript = document.querySelector('script[src="https://app.stg.midtrans.com/snap/snap.js"]');
      if (snapScript) {
        document.head.removeChild(snapScript);
      }
    };
  }, [midtransClientKey]);
  
  return (
    <>
      <IndexLayout>
        <div className="mx-10 flex justify-center mt-10">
          <div id="snap-container" className="h-full border-2 border-white shadow-lg"></div>
        </div>
      </IndexLayout>
    </>
  )
}