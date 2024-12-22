"use client";
// React - Next
import { useState } from "react";
import { useRouter } from "next/navigation";
// Context
import { useReservation } from "@/context/ReservationContext";
// Components
import TitleColors from "../StructElements/TitleColors";
import ButtonColors from "../StructElements/ButtonColors";
// Utils
import { scrollToSection } from "@/utils/scrollToSection";
// Datepicker
import { DatePickerForm } from "../StructElements/DatePickerForm";
import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
} from "@internationalized/date";

type DateValue = ZonedDateTime | CalendarDate | CalendarDateTime;

export default function Birthday() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // Creo estado para la selección de fecha y habilitación del boton
  const { setDate } = useReservation(); // Traigo el set de la fecha del provider
  const router = useRouter(); // router para hacer la navegación

  const handleDateChange = (date: DateValue) => {
    if (date) {
      // Conversion según el tipo de dato recibido
      const { day, month, year } = date;
      const formattedDate = `${String(day).padStart(2, "0")}-${String(
        month
      ).padStart(2, "0")}-${year}`;
      setSelectedDate(formattedDate); // Seteo la fecha para habilitar el button y usarlo para el setDate
    }
  };

  const handleSubmit = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toString().split("T")[0];
      setDate(formattedDate); // Guardo fecha seleccionada en el context
      router.push(`/reservas/${formattedDate}`); // Una vez guardado el contexto, navego a las reservas
    }
  };
  return (
    <div className="w-full h-auto auto-rows-max grid grid-cols-1 gap-[15px] text-center justify-items-center md:gap-[20px] md:justify-items-start md:text-start md:order-1">
      <TitleColors
        text="El lugar para festejar en grande tu"
        colorText="Cumpleaños"
      />
      <p className="w-full max-w-[450px] text-paragraphMobile md:max-w-none">
        El espacio ideal para celebrar momentos inolvidables. Salón de fiestas
        infantiles único en Mendoza.
      </p>
      <ButtonColors
        text="Reservar"
        scrollToSection={scrollToSection}
        sectionTo="section1"
      />
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <DatePickerForm></DatePickerForm>
          {/* <DatePicker
            label={"Birth date"}
            variant={"bordered"}
            onChange={handleDateChange}
          /> */}
        </div>
      </div>
      <button onClick={handleSubmit} disabled={!selectedDate} className="mt-4">
        Buscar
      </button>
    </div>
  );
}
