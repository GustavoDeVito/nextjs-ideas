"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CalendarProps } from "@/app/calendar/page";

type DialogCalendarProps = {
  visible: boolean;
  setVisible: (newState: boolean) => void;
  defaultSelected?: DialogEventProps;
  onDelete: () => void;
  handleSubmit: (calendar: CalendarProps) => void;
};

export type DialogEventProps = {
  id?: string;
  name?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
};

export default function DialogCalendar({
  visible,
  setVisible,
  defaultSelected,
  onDelete,
  handleSubmit,
}: DialogCalendarProps) {
  const [event, setEvent] = useState<DialogEventProps>();

  const onSubmit = () => {
    handleSubmit({
      id: defaultSelected?.id,
      title: event?.name ?? defaultSelected?.name ?? "",
      start: new Date(
        `${event?.date ?? defaultSelected?.date} ${
          event?.start_time ?? defaultSelected?.start_time
        }`
      ),
      end: new Date(
        `${event?.date ?? defaultSelected?.date} ${
          event?.end_time ?? defaultSelected?.end_time
        }`
      ),
    });

    setEvent({});
  };

  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setVisible}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Adicionar Evento
                      </Dialog.Title>
                      <div className="flex flex-col gap-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Nome
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={defaultSelected?.name}
                              value={event?.name}
                              onChange={({ target: { value } }) =>
                                setEvent({ ...event, name: value })
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="start"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Data
                          </label>
                          <div className="inline-flex relative mt-2 rounded-md shadow-sm gap-1">
                            <input
                              type="date"
                              name="start"
                              id="start"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              disabled={!!defaultSelected?.id}
                              defaultValue={defaultSelected?.date}
                              value={event?.date}
                              onChange={({ target: { value } }) =>
                                setEvent({ ...event, date: value })
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Hora Inicial/Final
                          </label>
                          <div className="inline-flex relative mt-2 rounded-md shadow-sm gap-1">
                            <input
                              type="time"
                              name="time"
                              id="time"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={defaultSelected?.start_time}
                              value={event?.start_time}
                              onChange={({ target: { value } }) =>
                                setEvent({ ...event, start_time: value })
                              }
                            />

                            <input
                              type="time"
                              name="time"
                              id="time"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={defaultSelected?.end_time}
                              value={event?.end_time}
                              onChange={({ target: { value } }) =>
                                setEvent({ ...event, end_time: value })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={onSubmit}
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setVisible(false)}
                  >
                    Voltar
                  </button>
                  {defaultSelected?.id && (
                    <button
                      type="button"
                      className="mt-3 mr-auto inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={onDelete}
                    >
                      Excluir
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
