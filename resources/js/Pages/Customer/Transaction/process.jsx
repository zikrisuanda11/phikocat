import IndexLayout from "@/Layouts/IndexLayout";
import React, { useEffect } from "react";

export default function process({ snapToken, midtransClientKey, auth }) {
  // console.log(midtransClientKey);

  // useEffect(() => {
  //   const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
  //   const myMidtransClientKey = `${midtransClientKey}`

  //   const script = document.createElement('script');
  //   script.src = snapSrcUrl;
  //   script.setAttribute('data-client-key', myMidtransClientKey);

  //   document.body.appendChild(script);
  //   // console.log(script);
  //   {window.snap.pay({ snapToken })}
  //   return () => {
  //     // {window.snap.embed({ snapToken }, {
  //     //   embedId: 'snap-container'
  //     // })}
  //     document.body.removeChild(script);
  //   }
  // }, []);

  useEffect(() => {
    const loadSnapScript = () => {
      const snapScript = document.createElement('script');
      snapScript.src = 'https://app.stg.midtrans.com/snap/snap.js';
      snapScript.setAttribute('data-client-key', midtransClientKey);
      snapScript.async = true;
  
      const promise = new Promise((resolve, reject) => {
        snapScript.onload = resolve;
        snapScript.onerror = reject;
      });
  
      document.head.appendChild(snapScript);
      console.log(promise);
      return promise;
    };
  
    const handleSnapEmbed = () => {
      if (typeof window.snap === 'undefined') {
        console.error('Failed to load snap.js');
        return;
      }
  
      window.snap.embed({ snapToken }, {
        embedId: 'snap-container',

      });
    };
  
    loadSnapScript()
      .then(() => {
        console.log('snap.js loaded');
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
  }, [midtransClientKey, snapToken]);
  
  return (
    <>
      <IndexLayout auth={auth}>
        <div className="mx-10 flex justify-center">
          {/* <button onClick={handleOnClick}>Pay</button> */}
          <div id="snap-container"></div>
        </div>
        {/* {snapToken &&
          <>
            <div className="mx-10 flex justify-center">
              <div id="snap-container"></div>
            </div>
            {console.log(window.snap)}
            {window.snap.pay({ snapToken })}
          </>
        } */}
        {/* <div id="snap-container"></div>
        {window.snap.embed({snapToken}, {
          embedId: 'snap-container'
        })} */}
      </IndexLayout>
    </>
  )
}