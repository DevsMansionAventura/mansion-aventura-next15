"use client";

import { useEffect } from "react";
import { useReservation } from "@/context/ReservationContext";

const ResetReservation = () => {
  const { resetReservation } = useReservation();

  useEffect(() => {
    resetReservation(); // Reiniciar la reserva al montar el componente
  }, []);

  return null; // Este componente no necesita renderizar nada
};

export default ResetReservation;
