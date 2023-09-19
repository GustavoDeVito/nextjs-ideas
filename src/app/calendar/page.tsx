"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import bootstrap5Plugin from "@fullcalendar/bootstrap5";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCallback, useState } from "react";
import {
  EventClickArg,
  EventDropArg,
  EventSourceInput,
} from "@fullcalendar/core/index.js";
import DialogCalendar, {
  DialogEventProps,
} from "../components/Calendar/dialog";
import { randomColorHex } from "../utils/color";

type EventProps = {
  id?: string;
  title: string;
  start: Date;
  end: Date;
  color: string;
};

export type CalendarProps = {
  id?: string;
  title: string;
  start: Date;
  end: Date;
};

export default function Calendar() {
  const [event, setEvent] = useState<EventProps[]>([
    {
      id: "1",
      title: "nice event - 1",
      start: new Date(),
      end: new Date(),
      color: randomColorHex(),
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState<DialogEventProps>();
  const [dialog, setDialog] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (calendar: CalendarProps) => {
      if (calendar?.id) {
        const newCalendar = event.filter((item) => item.id !== calendar.id);

        const [{ color }] = event.filter((item) => item.id === calendar.id);

        newCalendar.push({ ...calendar, color });

        // setEvent([...newCalendar, { ...calendar, color }]);
      } else {
        const [existEvent] = event.filter(
          (item) => item.title === calendar.title
        );
        const color = existEvent ? existEvent.color : randomColorHex();

        setEvent([
          ...event,
          {
            ...calendar,
            id: `id:${calendar?.title}:${calendar.start.toDateString()}`,
            color,
          },
        ]);
      }

      setSelectedEvent({});

      setDialog(false);
    },
    [event]
  );

  const handleView = useCallback(
    ({ event: { id, title, start, end } }: EventClickArg) => {
      const date = `${start?.getFullYear()}-${start
        ?.getMonth()
        .toString()
        .padStart(2, "0")}-${start?.getDate()}`;

      const formatterTime = (date: Date) => {
        const hours = date?.getHours().toString().padStart(2, "0");
        const minutes = date?.getMinutes().toString().padStart(2, "0");

        return `${hours}:${minutes}`;
      };

      const start_time = formatterTime(start ?? new Date());
      const end_time = formatterTime(end ?? new Date());

      setSelectedEvent({
        id,
        name: title,
        date,
        start_time,
        end_time,
      });

      setDialog(true);
    },
    []
  );

  const handleAdd = useCallback(({ dateStr }: DateClickArg) => {
    setSelectedEvent({ date: dateStr });

    setDialog(true);
  }, []);

  const handleUpdate = useCallback(
    ({ event }: EventDropArg) => {
      const { id, title, start, end } = event;

      const date = `${start?.getFullYear()}-${start
        ?.getMonth()
        .toString()
        .padStart(2, "0")}-${start?.getDate()}`;

      const formatterDate = (time: Date) => {
        const hours = time?.getHours().toString().padStart(2, "0");
        const minutes = time?.getMinutes().toString().padStart(2, "0");

        return new Date(`${date} ${hours}:${minutes}`);
      };

      handleSubmit({
        id,
        title,
        start: formatterDate(start ?? new Date()),
        end: formatterDate(end ?? new Date()),
      });
    },
    [handleSubmit]
  );

  const handleDelete = useCallback(() => {
    const calendar = event.filter((item) => item.id !== selectedEvent?.id);

    setEvent(calendar);

    setSelectedEvent({});

    setDialog(false);
  }, [event, selectedEvent]);

  return (
    <>
      <DialogCalendar
        visible={dialog}
        setVisible={setDialog}
        defaultSelected={selectedEvent}
        onDelete={handleDelete}
        handleSubmit={handleSubmit}
      />

      <div className="w-full max-w-screen-xl mt-10 mx-auto">
        <FullCalendar
          plugins={[
            bootstrap5Plugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
          ]}
          themeSystem="bootstrap5"
          locale="pt-BR"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek",
          }}
          buttonText={{
            today: "hoje",
            month: "mês",
            week: "semana",
            day: "dia",
          }}
          nowIndicator={true}
          editable={true}
          eventDrop={handleUpdate}
          selectable={true}
          selectMirror={true}
          events={event}
          eventClick={handleView}
          dateClick={handleAdd}
        />
      </div>
    </>
  );
}
