"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Interface con los tipos de datos que voy a manejar en el contexto
interface ReservationContextType {
  date: string | null;
  salon: { id: number; roomName: string } | null;
  timeRange: { startTime: string; endTime: string; id: number } | null;
  aditionals: number[];
  setDate: (date: string | null) => void;
  setSalon: (salon: { id: number; roomName: string } | null) => void;
  setTimeRange: (
    timeRange: { startTime: string; endTime: string; id: number } | null
  ) => void;
  addAdicional: (newAdicionales: number[]) => void;
  resetReservation: () => void;
}

// Creación del contexto ReservationContext el cual tiene su Provider
const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

// Creación y exportación del hook del contexto para poder consumir sus estados
export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};

// Creación y uso del Provider para darle el contexto a todo el proyecto
export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [date, setDate] = useState<string | null>(null);
  const [salon, setSalon] = useState<{ id: number; roomName: string } | null>(
    null
  );
  const [timeRange, setTimeRange] = useState<{
    startTime: string;
    endTime: string;
    id: number;
  } | null>(null);
  const [aditionals, setAditionals] = useState<number[]>([]);

  // Cuando se refresca la página se setean los valores del Locale Storage
  useEffect(() => {
    const savedState = localStorage.getItem("reservationState");
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        if (parsedState.date) setDate(parsedState.date);
        if (parsedState.salon) setSalon(parsedState.salon);
        if (parsedState.timeRange) setTimeRange(parsedState.timeRange);
        if (parsedState.aditionals) {
          setAditionalOld(parsedState.aditionals);
        }
      } catch (error) {
        console.error(
          "Error parsing reservationState from localStorage:",
          error
        );
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "reservationState",
      JSON.stringify({ date, salon, timeRange, aditionals })
    );
  }, [date, salon, timeRange, aditionals]);

  const setAditionalOld = (newAdicionales: number[]) => {
    setAditionals((prev) => [...prev, ...newAdicionales]);
  };

  const addAdicional = (newAdicionales: number[]) => {
    setAditionals(newAdicionales);
  };

  const resetReservation = () => {
    setDate(null);
    setSalon(null);
    setTimeRange(null);
    setAditionals([]);
    localStorage.clear; // Opcional: limpiar el localStorage
  };

  return (
    <ReservationContext.Provider
      value={{
        date,
        setDate,
        salon,
        setSalon,
        timeRange,
        setTimeRange,
        aditionals,
        addAdicional,
        resetReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
